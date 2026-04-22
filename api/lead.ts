import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req: any, res: any) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const data = req.body;

    const {
      prenom,
      nom,
      email,
      telephone,
      societe,
      type,
      message,
      source
    } = data;

    const html = `
      <h2>Nouveau lead reçu</h2>
      <p><strong>Source :</strong> ${source}</p>
      <p><strong>Nom :</strong> ${prenom} ${nom}</p>
      <p><strong>Email :</strong> ${email}</p>
      <p><strong>Téléphone :</strong> ${telephone || "-"}</p>
      <p><strong>Société :</strong> ${societe || "-"}</p>
      <p><strong>Type :</strong> ${type || "-"}</p>
      <p><strong>Message :</strong></p>
      <p>${message || "-"}</p>
    `;

    await resend.emails.send({
      from: "CBS Institute <noreply@notify.cbs-institute.com>",
      to: process.env.LEAD_NOTIFICATION_TO!,
      subject: `Nouveau lead (${source})`,
      html
    });

    return res.status(200).json({ success: true });

  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: "Email failed" });
  }
}
