import { Resend } from 'resend';
import type { NextApiRequest, NextApiResponse } from 'next';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).end();

  const { name, email, subject, message } = req.body;

  console.log('Incoming request to /api/contact');
  console.log('Data received:', { name, email, subject, message });

  try {
    const result = await resend.emails.send({
      from: 'Contact Form <onboarding@resend.dev>', // TEMP: usar remitente válido
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

    console.log('Resend response:', result);

    res.status(200).json({ success: true });
  } catch (err) {
    console.error('Email sending failed:', err);
    res.status(500).json({ error: 'Email could not be sent.' });
  }
}
