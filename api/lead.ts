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
<div style="font-family: 'Helvetica Neue', Arial, sans-serif; background:#f8fafc; padding:40px 0;">
  <div style="max-width:620px;margin:0 auto;background:#ffffff;border-radius:14px;overflow:hidden;border:1px solid #e2e8f0;">
    
    <div style="background:#0f172a;color:white;padding:28px 24px;">
      <h2 style="margin:0;font-size:22px;">CBS FINANCE INSTITUTE</h2>
      <p style="margin:4px 0 0;font-size:14px;color:#cbd5f5;">Expertise Finance SAP & Transformation Digitale</p>
    </div>

    <div style="padding:30px 24px;color:#0f172a;">
      
      <h1 style="font-size:26px;margin-bottom:10px;">Merci pour votre demande</h1>

      <p>Bonjour <strong>${insertedLead.prenom}</strong>,</p>

      <p>
        Nous avons bien reçu votre demande concernant 
        <strong>${insertedLead.type_demande}</strong>.
      </p>

      <p>
        Un expert CBS vous contactera sous 
        <strong>24 à 48 heures</strong> afin d’analyser votre besoin 
        et vous proposer un accompagnement adapté.
      </p>

      <div style="margin:25px 0;padding:18px;background:#f1f5f9;border-radius:10px;">
        <p style="margin:0 0 10px;"><strong>Résumé de votre demande</strong></p>
        <p style="margin:0;"><strong>Nom :</strong> ${insertedLead.prenom} ${insertedLead.nom}</p>
        <p style="margin:0;"><strong>Email :</strong> ${insertedLead.email}</p>
        <p style="margin:0;"><strong>Société :</strong> ${insertedLead.societe || "-"}</p>
        <p style="margin:0;"><strong>Type :</strong> ${insertedLead.type_demande}</p>
      </div>

      <div style="margin:30px 0;padding:20px;border:1px solid #0f172a;border-radius:10px;">
        <p style="margin:0 0 10px;"><strong>Accélérer votre demande ?</strong></p>
        <p style="margin:0 0 15px;">
          Répondez directement à cet email pour être recontacté en priorité.
        </p>
        <a href="mailto:contact@cbs-institute.com" 
           style="display:inline-block;padding:12px 18px;background:#0f172a;color:#fff;text-decoration:none;border-radius:6px;">
           Contacter un expert
        </a>
      </div>

      <p style="margin-top:30px;">
        Bien cordialement,<br/>
        <strong>CBS Finance Institute</strong><br/>
        Conseil & Formation SAP Finance
      </p>

    </div>

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
