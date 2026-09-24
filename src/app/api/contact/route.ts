import { NextResponse } from "next/server";

// Receives the contact-form enquiry and forwards it to the Google Apps Script
// web app, which (1) appends a row to the "Enquiries" Google Sheet and
// (2) emails the enquiry to Tirupati Associates.
// Setup steps: see CONTACT-FORM-SETUP.md in the project root.

export const runtime = "nodejs";

type Enquiry = {
  name?: string;
  company?: string;
  email?: string;
  phone?: string;
  country?: string;
  product?: string;
  quantity?: string;
  message?: string;
  website?: string; // honeypot — real visitors never fill this
};

const MAX_LEN: Record<string, number> = {
  name: 120,
  company: 160,
  email: 160,
  phone: 40,
  country: 80,
  product: 80,
  quantity: 80,
  message: 4000,
};

const clean = (v: unknown, max: number) =>
  typeof v === "string" ? v.trim().slice(0, max) : "";

export async function POST(req: Request) {
  let body: Enquiry;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request." }, { status: 400 });
  }

  // Spam bots fill every field, including the hidden one — pretend success and drop it.
  if (body.website) return NextResponse.json({ ok: true });

  const data = Object.fromEntries(
    Object.entries(MAX_LEN).map(([k, max]) => [k, clean(body[k as keyof Enquiry], max)])
  ) as Record<keyof typeof MAX_LEN, string>;

  if (!data.name || !data.email || !data.country) {
    return NextResponse.json({ ok: false, error: "Please fill in your name, email and country." }, { status: 400 });
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    return NextResponse.json({ ok: false, error: "Please enter a valid email address." }, { status: 400 });
  }

  const scriptUrl = process.env.GOOGLE_SCRIPT_URL;
  if (!scriptUrl) {
    console.error("[contact] GOOGLE_SCRIPT_URL is not set");
    return NextResponse.json(
      { ok: false, error: "The enquiry form is not configured yet. Please email or WhatsApp us directly." },
      { status: 500 }
    );
  }

  try {
    const res = await fetch(scriptUrl, {
      method: "POST",
      // text/plain avoids a CORS preflight on the Apps Script side
      headers: { "Content-Type": "text/plain;charset=utf-8" },
      body: JSON.stringify({
        ...data,
        secret: process.env.CONTACT_FORM_SECRET ?? "",
        page: req.headers.get("referer") ?? "",
      }),
      redirect: "follow",
      signal: AbortSignal.timeout(15000),
    });
    const result = await res.json().catch(() => null);
    if (!res.ok || !result?.ok) {
      console.error("[contact] Apps Script error", res.status, result);
      throw new Error("Apps Script rejected the enquiry");
    }
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[contact] Failed to submit enquiry", err);
    return NextResponse.json(
      { ok: false, error: "Sorry, we couldn't send your enquiry. Please try again or contact us on WhatsApp." },
      { status: 502 }
    );
  }
}
