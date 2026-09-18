import nodemailer from "nodemailer";
import type { Enquiry } from "./types.js";

function getEnv(key: string): string {
  return process.env[key] ?? (import.meta.env as Record<string, string>)[key] ?? "";
}

export async function sendEnquiryEmail(enquiry: Enquiry): Promise<void> {
  const host = getEnv("SMTP_HOST");
  if (!host) return;

  const transporter = nodemailer.createTransport({
    host,
    port: Number(getEnv("SMTP_PORT") || "587"),
    secure: getEnv("SMTP_PORT") === "465",
    connectionTimeout: 5000,
    greetingTimeout: 5000,
    socketTimeout: 10000,
    auth: {
      user: getEnv("SMTP_USER"),
      pass: getEnv("SMTP_PASS"),
    },
  });

  await transporter.sendMail({
    from: getEnv("SMTP_FROM") || "noreply@empereal.com",
    to: getEnv("SMTP_TO") || "info@empereal.com",
    subject: `New enquiry from ${enquiry.name}`,
    text: [
      `Name: ${enquiry.name}`,
      `Company: ${enquiry.company ?? "—"}`,
      `Email: ${enquiry.email}`,
      `Phone: ${enquiry.phone ?? "—"}`,
      `Interest: ${enquiry.interest ?? "—"}`,
      ``,
      enquiry.message,
    ].join("\n"),
  });
}
