import { createClient } from "@supabase/supabase-js";

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

    const internalHtml = `
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

    const internalEmailResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "CBS Institute <contact@cbs-institute.com>",
        to: process.env.LEAD_NOTIFICATION_TO!,
        subject: `Lead ${insertedLead.type_demande} - ${insertedLead.prenom} ${insertedLead.nom}`,
        html: internalHtml,
        reply_to: insertedLead.email || undefined,
      }),
    });

    const internalEmailResult = await internalEmailResponse.json();
    console.log("INTERNAL EMAIL RESULT:", internalEmailResult);

    if (!internalEmailResponse.ok) {
      console.error("Internal email send error:", internalEmailResult);
      return res.status(500).json({
        error: "Internal email send failed",
        details: internalEmailResult,
      });
    }

    const clientHtml = `
      <div style="font-family: Arial, Helvetica, sans-serif; color: #0f172a; max-width: 640px; margin: 0 auto; line-height: 1.6;">
        <div style="padding: 32px 24px; border: 1px solid #e5e7eb; border-radius: 12px;">
          <h2 style="margin: 0 0 16px; font-size: 28px; color: #0f172a;">Merci pour votre demande</h2>
          
          <p>Bonjour ${insertedLead.prenom || "et merci"},</p>
          
          <p>Nous avons bien reçu votre demande concernant <strong>${insertedLead.type_demande || "nos offres CBS Institute"}</strong>.</p>
          
          <p>Notre équipe reviendra vers vous sous <strong>24 à 48 heures</strong> avec un premier niveau d’analyse et les prochaines étapes adaptées à votre besoin.</p>

          <div style="margin: 24px 0; padding: 16px; background: #f8fafc; border-radius: 10px;">
            <p style="margin: 0 0 8px;"><strong>Récapitulatif</strong></p>
            <p style="margin: 0;"><strong>Nom :</strong> ${insertedLead.prenom} ${insertedLead.nom}</p>
            <p style="margin: 0;"><strong>Email :</strong> ${insertedLead.email}</p>
            <p style="margin: 0;"><strong>Société :</strong> ${insertedLead.societe || "-"}</p>
            <p style="margin: 0;"><strong>Type de demande :</strong> ${insertedLead.type_demande || "-"}</p>
          </div>

          <p>Si votre demande est urgente, vous pouvez répondre directement à cet email.</p>

          <p style="margin-top: 32px;">
            Bien cordialement,<br />
            <strong>CBS Institute</strong><br />
            Expertise Finance SAP
          </p>
        </div>
      </div>
    `;

    const clientEmailResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "CBS Institute <contact@cbs-institute.com>",
        to: insertedLead.email,
        subject: "CBS Institute — Nous avons bien reçu votre demande",
        html: clientHtml,
        reply_to: process.env.LEAD_NOTIFICATION_TO || "contact@cbs-institute.com",
      }),
    });

    const clientEmailResult = await clientEmailResponse.json();
    console.log("CLIENT EMAIL RESULT:", clientEmailResult);

    if (!clientEmailResponse.ok) {
      console.error("Client email send error:", clientEmailResult);
    }

    return res.status(200).json({
      success: true,
      lead: insertedLead,
      internalEmail: internalEmailResult,
      clientEmail: clientEmailResult,
    });
  } catch (err) {
    console.error("SERVER ERROR:", err);
    return res.status(500).json({ error: "Server error" });
  }
}
