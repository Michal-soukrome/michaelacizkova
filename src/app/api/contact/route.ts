/**
 * Contact Form API Route
 *
 * Handles POST requests from the contact form.
 * Uses Nodemailer to send emails via SMTP.
 *
 * Required environment variables (set in .env.local):
 *   SMTP_HOST     – SMTP server hostname (e.g. smtp.seznam.cz)
 *   SMTP_PORT     – SMTP port (465 for SSL, 587 for TLS)
 *   SMTP_USER     – SMTP login / sender email
 *   SMTP_PASS     – SMTP password or app-specific password
 *   CONTACT_EMAIL – (optional) recipient email, defaults to foto.michaelacizkova@seznam.cz
 *
 * On Vercel, this runs as a serverless function — no separate backend needed.
 *
 * @see https://nodemailer.com/about/ for Nodemailer docs
 * @see .env.example for a template of required variables
 */
import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  try {
    const { name, email, subject, message } = await req.json();

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: "Všechna pole jsou povinná." },
        { status: 400 },
      );
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Neplatná emailová adresa." },
        { status: 400 },
      );
    }

    // Create SMTP transporter from environment variables.
    // `secure: true` is used when port is 465 (implicit TLS).
    // For port 587 the connection upgrades via STARTTLS automatically.
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT) || 587,
      secure: Number(process.env.SMTP_PORT) === 465,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // Send the email.
    // `from` uses the SMTP account; `replyTo` is set to the visitor's email
    // so Michaela can reply directly from her mail client.
    await transporter.sendMail({
      from: `"Webový formulář" <${process.env.SMTP_USER}>`,
      to: process.env.CONTACT_EMAIL || "foto.michaelacizkova@seznam.cz",
      replyTo: email,
      subject: `[Kontaktní formulář] ${subject}`,
      text: `Jméno: ${name}\nEmail: ${email}\nPředmět: ${subject}\n\nZpráva:\n${message}`,
      html: `
        <h2>Nová zpráva z kontaktního formuláře</h2>
        <p><strong>Jméno:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Předmět:</strong> ${subject}</p>
        <hr />
        <p><strong>Zpráva:</strong></p>
        <p>${message.replace(/\n/g, "<br />")}</p>
      `,
    });

    return NextResponse.json(
      { message: "Zpráva byla úspěšně odeslána!" },
      { status: 200 },
    );
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Nepodařilo se odeslat zprávu. Zkuste to prosím znovu." },
      { status: 500 },
    );
  }
}
