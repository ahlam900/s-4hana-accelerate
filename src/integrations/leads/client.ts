// External Supabase project dedicated to centralized "leads" table.
// Uses a publishable (anon) key — safe to expose client-side.
import { createClient } from "@supabase/supabase-js";

const LEADS_SUPABASE_URL = "https://bcndhwwuamooeofezepv.supabase.co";
const LEADS_SUPABASE_PUBLISHABLE_KEY =
  "sb_publishable_Ho9QH3Ig3yG7xYVlyYWtlQ_4Yz_0Tt6";

export const leadsSupabase = createClient(
  LEADS_SUPABASE_URL,
  LEADS_SUPABASE_PUBLISHABLE_KEY,
  {
    auth: {
      persistSession: false,
      autoRefreshToken: false,
    },
  }
);

export type LeadInsert = {
  prenom: string;
  nom: string;
  email: string;
  telephone?: string | null;
  societe?: string | null;
  type_demande?: string | null;
  message?: string | null;
  source: string;
  statut: string;
  formulaire: string;
  niveau?: string | null;
  objectif?: string | null;
  fonction?: string | null;
  besoin?: string | null;
};

export async function insertLead(payload: LeadInsert) {
  return leadsSupabase.from("leads").insert(payload as never);
}
