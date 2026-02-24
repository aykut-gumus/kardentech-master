import { NextResponse } from "next/server";

export const runtime = "nodejs";

function badRequest(message: string) {
  return NextResponse.json({ ok: false, error: message }, { status: 400 });
}

export async function POST(req: Request) {
  const contentType = req.headers.get("content-type") ?? "";
  if (!contentType.toLowerCase().includes("multipart/form-data")) {
    return badRequest("Geçersiz içerik tipi.");
  }

  const formData = await req.formData();

  const name = String(formData.get("name") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const phone = String(formData.get("phone") ?? "").trim();
  const coverLetter = String(formData.get("coverLetter") ?? "").trim();
  const cv = formData.get("cv");

  if (!name) return badRequest("Ad Soyad alanı zorunludur.");
  if (!email) return badRequest("E-posta alanı zorunludur.");
  if (!phone) return badRequest("Telefon alanı zorunludur.");
  if (!(cv instanceof File)) return badRequest("CV dosyası zorunludur.");

  const filename = cv.name || "cv";
  const lower = filename.toLowerCase();
  const allowed = lower.endsWith(".pdf") || lower.endsWith(".doc") || lower.endsWith(".docx");
  if (!allowed) {
    return badRequest("CV dosyası .pdf, .doc veya .docx olmalıdır.");
  }

  const bytes = await cv.arrayBuffer();
  const buffer = Buffer.from(bytes);

  // Placeholder: integrate an email service here (e.g. Nodemailer or Resend)
  //
  // - Destination: company owner's email address
  // - Subject: `Yeni CV Başvurusu: ${name}`
  // - Body: include name/email/phone + coverLetter
  // - Attachment: `filename` + `buffer` (mime type: cv.type if available)
  //
  // Example fields you already have:
  // const payload = { name, email, phone, coverLetter, filename, size: buffer.length };
  // await sendEmailWithAttachment(payload, buffer);

  return NextResponse.json({
    ok: true,
    message:
      "Başvurunuz alındı. En kısa sürede sizinle iletişime geçilecektir.",
    meta: {
      name,
      email,
      phone,
      filename,
      size: buffer.length,
      hasCoverLetter: Boolean(coverLetter),
    },
  });
}

