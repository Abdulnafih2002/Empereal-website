export const prerender = false;
import type { APIRoute } from "astro";
import { isRateLimited } from "../../../lib/rate-limit.js";
import { getEnquiries, putEnquiries } from "../../../lib/storage.js";
import { sendEnquiryEmail } from "../../../lib/email.js";
import type { Enquiry } from "../../../lib/types.js";

export const POST: APIRoute = async ({ request }) => {
  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0].trim() ?? "unknown";

  if (isRateLimited(ip)) {
    return new Response(
      JSON.stringify({ error: "Too many submissions. Please try again later." }),
      { status: 429, headers: { "Content-Type": "application/json" } }
    );
  }

  let body: Record<string, string>;
  try {
    body = await request.json() as Record<string, string>;
  } catch {
    return new Response(JSON.stringify({ error: "Invalid request." }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }

  const { name, email, message, company, phone, interest } = body;

  if (!name?.trim() || !email?.trim() || !message?.trim()) {
    return new Response(
      JSON.stringify({ error: "Name, email, and message are required." }),
      { status: 400, headers: { "Content-Type": "application/json" } }
    );
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return new Response(
      JSON.stringify({ error: "Please enter a valid email address." }),
      { status: 400, headers: { "Content-Type": "application/json" } }
    );
  }

  if (interest?.trim() === "Company Profile Download" && (!company?.trim() || !phone?.trim())) {
    return new Response(
      JSON.stringify({ error: "Name, company, email, and phone are required to download the company profile." }),
      { status: 400, headers: { "Content-Type": "application/json" } }
    );
  }

  const enquiry: Enquiry = {
    id: crypto.randomUUID(),
    name: name.trim(),
    company: company?.trim() || undefined,
    email: email.trim().toLowerCase(),
    phone: phone?.trim() || undefined,
    interest: interest?.trim() || undefined,
    message: message.trim(),
    status: "new",
    createdAt: new Date().toISOString(),
  };

  try {
    const all = await getEnquiries();
    await putEnquiries([enquiry, ...all]);
  } catch (err) {
    console.error("[enquiry submit] storage error", err);
    return new Response(
      JSON.stringify({ error: "Failed to save enquiry. Please try again." }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }

  sendEnquiryEmail(enquiry).catch((err) =>
    console.error("[enquiry submit] email error", err)
  );

  return new Response(JSON.stringify({ ok: true }), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
};
