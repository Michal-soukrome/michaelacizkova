import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const PHOTOGRAPHER_EMAIL = process.env.CONTACT_PHOTOGRAPHER_EMAIL;
const SENDER_FROM = process.env.CONTACT_SENDER_FROM;
const RESEND_API_KEY = process.env.RESEND_API_KEY;
const RECAPTCHA_SECRET_KEY = process.env.RECAPTCHA_SECRET_KEY;

const ALLOWED_SERVICES = new Set([
  "Svatební focení",
  "Rodinné, párové, těhotenské focení",
  "Newborn focení",
  "Reportážní focení",
  "Ateliérové focení",
]);

const RATE_LIMIT_WINDOW_MS = 60_000;
const RATE_LIMIT_MAX_REQUESTS = 5;
const REQUEST_LOG = new Map<string, number[]>();

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/\"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function sanitizeText(value: unknown, maxLength: number) {
  if (typeof value !== "string") return "";

  return escapeHtml(value.trim().replace(/\s+/g, " ").slice(0, maxLength));
}

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function getClientIp(req: NextRequest) {
  const forwarded = req.headers.get("x-forwarded-for");
  if (forwarded) return forwarded.split(",")[0].trim();

  return req.headers.get("x-real-ip") ?? "unknown";
}

function isRateLimited(ip: string) {
  const now = Date.now();
  const timestamps = REQUEST_LOG.get(ip) ?? [];
  const validTimestamps = timestamps.filter(
    (timestamp) => now - timestamp < RATE_LIMIT_WINDOW_MS,
  );

  validTimestamps.push(now);
  REQUEST_LOG.set(ip, validTimestamps);

  return validTimestamps.length > RATE_LIMIT_MAX_REQUESTS;
}

function isLocalhostRequest(req: NextRequest) {
  const host = req.headers.get("host") ?? "";
  return host.includes("localhost") || host.includes("127.0.0.1");
}

async function verifyRecaptcha(token: string, ip: string) {
  if (!RECAPTCHA_SECRET_KEY) {
    return false;
  }

  const response = await fetch(
    "https://www.google.com/recaptcha/api/siteverify",
    {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({
        secret: RECAPTCHA_SECRET_KEY,
        response: token,
        remoteip: ip,
      }),
    },
  );

  const data = (await response.json()) as {
    success?: boolean;
    score?: number;
    action?: string;
  };

  return Boolean(
    data.success &&
    data.action === "contact_form" &&
    (data.score === undefined || data.score >= 0.5),
  );
}

export async function POST(req: NextRequest) {
  try {
    if (!PHOTOGRAPHER_EMAIL || !SENDER_FROM || !RESEND_API_KEY) {
      return NextResponse.json(
        { error: "Nastavení emailu chybí v produkční konfiguraci." },
        { status: 500 },
      );
    }

    const clientIp = getClientIp(req);
    if (isRateLimited(clientIp)) {
      return NextResponse.json(
        { error: "Příliš mnoho pokusů. Zkuste to prosím za chvíli znovu." },
        { status: 429 },
      );
    }

    const body = await req.json();
    const name = sanitizeText(body.name, 100);
    const email = sanitizeText(body.email, 200).toLowerCase();
    const subject = sanitizeText(body.subject, 200);
    const message = sanitizeText(body.message, 5000);
    const service = sanitizeText(body.service, 200);
    const captchaToken = sanitizeText(body.captchaToken, 2048);

    if (!name || !email || !subject || !message || !service || !captchaToken) {
      return NextResponse.json(
        { error: "Vyplňte prosím všechna povinná pole." },
        { status: 400 },
      );
    }

    if (!isValidEmail(email)) {
      return NextResponse.json(
        { error: "Zadejte prosím platný email." },
        { status: 400 },
      );
    }

    if (!ALLOWED_SERVICES.has(service)) {
      return NextResponse.json({ error: "Neplatná služba." }, { status: 400 });
    }

    const isLocalhost = isLocalhostRequest(req);
    if (!isLocalhost && !(await verifyRecaptcha(captchaToken, clientIp))) {
      return NextResponse.json(
        { error: "Ověření bezpečnosti selhalo. Zkuste to prosím znovu." },
        { status: 400 },
      );
    }

    const resend = new Resend(RESEND_API_KEY);

    await resend.emails.send({
      from: SENDER_FROM,
      to: PHOTOGRAPHER_EMAIL,
      replyTo: email,
      subject: `Nová poptávka na "${service}" - ${name}`,
      html: `
     <div>
  <h3>Nová poptávka z webu michaelacizkova.cz</h3>

  <table>
  <tr>
    <td>Datum odeslání</td>
    <td>${new Date().toLocaleString()}</td>
  </tr>
    <tr>
      <td>Jméno</td>
      <td>${name}</td>
    </tr>
    <tr>
      <td>Služba</td>
      <td>${service}</td>
    </tr>
    <tr>
      <td>Email</td>
      <td><a href="mailto:${email}">${email}</a></td>
    </tr>
    <tr>
      <td>Předmět</td>
      <td>${subject}</td>
    </tr>
    <tr>
      <td>Zpráva</td>
      <td>${message}</td>
    </tr>
  </table>
</div>

      `,
    });

    return NextResponse.json({
      message: "Zpráva byla úspěšně odeslána.",
    });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Nepodařilo se odeslat zprávu. Zkuste to prosím znovu." },
      { status: 500 },
    );
  }
}
