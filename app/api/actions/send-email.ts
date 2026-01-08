"use server"

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendContactEmail(formData: any) {
  try {
    const { name, email, countryCode, phone, subject, message } = formData;

    const data = await resend.emails.send({
      from: "Termimax Contact <onboarding@resend.dev>", // Once verified, use your domain
      to: ["sales.support@termimax.net"],
      subject: `New Contact Form: ${subject}`,
      replyTo: email,
      text: `
        Name: ${name}
        Email: ${email}
        Phone: ${countryCode} ${phone}
        
        Message:
        ${message}
      `,
    });

    return { success: true, data };
  } catch (error) {
    return { success: false, error };
  }
}