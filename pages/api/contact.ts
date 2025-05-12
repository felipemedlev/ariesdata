// pages/api/contact.ts
import { Resend } from 'resend';
import type { NextApiRequest, NextApiResponse } from 'next';

const resend = new Resend(process.env.RESEND_API_KEY); // <-- Debes agregar tu API key a .env.local

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
  ) {
  if (req.method !== 'POST') return res.status(405).end();

  const { name, email, subject, message } = req.body;

  try {
    const data = await resend.emails.send({
      from: 'Contact Form <noreply@ariesanalytics.ai>',
      to: 'nicolas.toro@ariesanalytics.ai',
      subject: `[Contact] ${subject}`,
      replyTo: email,
      html: `
        <h2>Nuevo mensaje desde el sitio</h2>
        <p><strong>Nombre:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Asunto:</strong> ${subject}</p>
        <p><strong>Mensaje:</strong><br/>${message}</p>
      `,
    });

    return res.status(200).json({ success: true });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: 'Email could not be sent.' });
  }
}
