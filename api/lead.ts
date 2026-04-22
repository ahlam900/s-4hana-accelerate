import { createClient } from "@supabase/supabase-js";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

export default async function handler(req: any, res: any) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const data = req.body;

    const payload = {
      prenom: data.prenom || "",
      nom: data.nom || "",
      email: data.email || "",
      telephone: data.telephone || "",
      societe: data.societe || "",
      type_demande: data.type_demande || data.type || "",
      message: data.message || "",
      source: data.source || "website",
      statut: data.statut || "new",
      formulaire: data.formulaire || "contact",
      niveau: data.niveau || "",
      objectif: data.objectif || "",
      fonction: data.fonction || "",
      besoin: data.besoin || "",
    };

    const { data: insertedLead, error } = await supabase
      .from("leads")
      .insert(payload)
      .select()
      .single();

    if (error) {
      console.error("Supabase insert error:", error);
      return res.status(500).json({ error: "Supabase insert failed" });
    }

    const html = `
      <h2>Nouveau lead reçu</h2>
      <p><strong>Formulaire :</strong> ${insertedLead.formulaire}</p>
      <p><strong>Nom :</strong> ${insertedLead.prenom} ${insertedLead.nom}</p>
      <p><strong>Email :</strong> ${insertedLead.email}</p>
      <p><strong>Téléphone :</strong> ${insertedLead.telephone || "-"}</p>
      <p><strong>Société :</strong> ${insertedLead.societe || "-"}</p>
      <p><strong>Type :</strong> ${insertedLead.type_demande || "-"}</p>
      <p><strong>Niveau :</strong> ${insertedLead.niveau || "-"}</p>
      <p><strong>Objectif :</strong> ${insertedLead.objectif || "-"}</p>
      <p><strong>Fonction :</strong> ${insertedLead.fonction || "-"}</p>
      <p><strong>Besoin :</strong> ${insertedLead.besoin || "-"}</p>
      <p><strong>Message :</strong></p>
      <p>${insertedLead.message || "-"}</p>
    `;

    await resend.emails.send({
      from: "CBS Institute <contact@cbs-institute.com>",
      to: process.env.LEAD_NOTIFICATION_TO!,
      subject: `Nouveau lead (${insertedLead.formulaire})`,
      html,
    });

    return res.status(200).json({ success: true, lead: insertedLead });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: "Server error" });
  }
}
