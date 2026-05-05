import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

// ─── Config — set all three in .env.local + Vercel project settings ────────
const PHOTOGRAPHER_EMAIL = process.env.CONTACT_PHOTOGRAPHER_EMAIL!;
const SENDER_FROM = process.env.CONTACT_SENDER_FROM!;

export async function POST(req: NextRequest) {
  try {
    const { name, email, subject, message } = await req.json();

    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: "Vyplňte prosím všechna povinná pole." },
        { status: 400 },
      );
    }

    // ⬇️ Instancujeme až uvnitř handleru
    const resend = new Resend(process.env.RESEND_API_KEY);

    // 1) Email fotografce
    await resend.emails.send({
      from: SENDER_FROM,
      to: PHOTOGRAPHER_EMAIL,
      replyTo: email,
      subject: `Nová poptávka: ${subject}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; color: #333;">
          <h2 style="color: #7c5c3e; border-bottom: 1px solid #e8ddd4; padding-bottom: 12px;">
            Nová poptávka přes web
          </h2>
          <table style="width: 100%; border-collapse: collapse; margin: 24px 0;">
            <tr>
              <td style="padding: 8px 0; color: #888; width: 100px;">Jméno</td>
              <td style="padding: 8px 0; font-weight: 600;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #888;">Email</td>
              <td style="padding: 8px 0;">
                <a href="mailto:${email}" style="color: #7c5c3e;">${email}</a>
              </td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #888;">Předmět</td>
              <td style="padding: 8px 0;">${subject}</td>
            </tr>
          </table>
          <div style="background: #faf7f4; border-left: 3px solid #7c5c3e; padding: 16px 20px; border-radius: 4px;">
            <p style="margin: 0; color: #888; font-size: 12px; text-transform: uppercase; letter-spacing: 0.1em; margin-bottom: 8px;">Zpráva</p>
            <p style="margin: 0; line-height: 1.7; white-space: pre-wrap;">${message}</p>
          </div>
          <p style="margin-top: 24px; font-size: 12px; color: #aaa;">
            Odpověz přímo na tento email — reply-to je nastaveno na ${email}
          </p>
        </div>
      `,
    });

    // 2) Potvrzení návštěvníkovi
    await resend.emails.send({
      from: SENDER_FROM,
      to: email,
      subject: "Děkuji za zprávu 🤍",
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; color: #333;">
          <h2 style="color: #7c5c3e;">Ahoj ${name},</h2>
          <p style="line-height: 1.7;">
            děkuji za tvoji zprávu! Dostala jsem ji a ozvu se ti co nejdříve,
            obvykle do 1–2 pracovních dní.
          </p>
          <p style="line-height: 1.7;">Těším se na spolupráci 🤍</p>
          <p style="line-height: 1.7; margin-top: 32px;">
            Michaela Čížková<br/>
            <span style="color: #888; font-size: 14px;">Fotografka</span>
          </p>
          <hr style="border: none; border-top: 1px solid #e8ddd4; margin: 32px 0;" />
          <p style="font-size: 12px; color: #aaa; line-height: 1.6;">
            Tato zpráva byla odeslána z kontaktního formuláře na webu.<br/>
            Pokud jsi zprávu neodeslal/a, tuto zprávu ignoruj.
          </p>
        </div>
      `,
    });

    return NextResponse.json({
      message: "Zpráva byla úspěšně odeslána. Ozvu se ti brzy 🤍",
    });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Nepodařilo se odeslat zprávu. Zkuste to prosím znovu." },
      { status: 500 },
    );
  }
}
