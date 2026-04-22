import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { CheckCircle2, AlertCircle, Loader2 } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";

const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL as string;
const SUPABASE_ANON = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY as string;

type State =
  | { kind: "loading" }
  | { kind: "valid" }
  | { kind: "already" }
  | { kind: "invalid" }
  | { kind: "submitting" }
  | { kind: "done" }
  | { kind: "error"; message: string };

const Unsubscribe = () => {
  const [params] = useSearchParams();
  const token = params.get("token") ?? "";
  const [state, setState] = useState<State>({ kind: "loading" });

  useEffect(() => {
    if (!token) {
      setState({ kind: "invalid" });
      return;
    }
    let cancelled = false;
    (async () => {
      try {
        const res = await fetch(
          `${SUPABASE_URL}/functions/v1/handle-email-unsubscribe?token=${encodeURIComponent(token)}`,
          { headers: { apikey: SUPABASE_ANON } }
        );
        const data = await res.json();
        if (cancelled) return;
        if (data?.valid === true) setState({ kind: "valid" });
        else if (data?.reason === "already_unsubscribed") setState({ kind: "already" });
        else setState({ kind: "invalid" });
      } catch {
        if (!cancelled) setState({ kind: "error", message: "Une erreur est survenue." });
      }
    })();
    return () => {
      cancelled = true;
    };
  }, [token]);

  const confirm = async () => {
    setState({ kind: "submitting" });
    try {
      const { data, error } = await supabase.functions.invoke("handle-email-unsubscribe", {
        body: { token },
      });
      if (error) throw error;
      if (data?.success) setState({ kind: "done" });
      else if (data?.reason === "already_unsubscribed") setState({ kind: "already" });
      else setState({ kind: "error", message: "Désinscription impossible." });
    } catch {
      setState({ kind: "error", message: "Une erreur est survenue." });
    }
  };

  return (
    <main className="min-h-[70vh] flex items-center justify-center px-6">
      <div className="card-premium p-10 md:p-12 max-w-lg w-full text-center">
        {state.kind === "loading" && (
          <>
            <Loader2 className="h-10 w-10 text-champagne mx-auto animate-spin" />
            <h1 className="display-sm mt-6">Vérification…</h1>
          </>
        )}
        {state.kind === "valid" && (
          <>
            <h1 className="display-sm">Confirmer la désinscription</h1>
            <p className="text-muted-foreground mt-4">
              Vous ne recevrez plus d'emails de notre part.
            </p>
            <Button variant="ink" size="lg" className="mt-8" onClick={confirm}>
              Confirmer la désinscription
            </Button>
          </>
        )}
        {state.kind === "submitting" && (
          <>
            <Loader2 className="h-10 w-10 text-champagne mx-auto animate-spin" />
            <h1 className="display-sm mt-6">Traitement en cours…</h1>
          </>
        )}
        {state.kind === "done" && (
          <>
            <CheckCircle2 className="h-12 w-12 text-champagne mx-auto" strokeWidth={1.5} />
            <h1 className="display-sm mt-6">Désinscription confirmée</h1>
            <p className="text-muted-foreground mt-4">
              Vous ne recevrez plus d'emails de notre part.
            </p>
          </>
        )}
        {state.kind === "already" && (
          <>
            <CheckCircle2 className="h-12 w-12 text-champagne mx-auto" strokeWidth={1.5} />
            <h1 className="display-sm mt-6">Déjà désinscrit</h1>
            <p className="text-muted-foreground mt-4">
              Cette adresse a déjà été désinscrite.
            </p>
          </>
        )}
        {(state.kind === "invalid" || state.kind === "error") && (
          <>
            <AlertCircle className="h-12 w-12 text-destructive mx-auto" strokeWidth={1.5} />
            <h1 className="display-sm mt-6">Lien invalide</h1>
            <p className="text-muted-foreground mt-4">
              {state.kind === "error" ? state.message : "Ce lien de désinscription est invalide ou a expiré."}
            </p>
          </>
        )}
      </div>
    </main>
  );
};

export default Unsubscribe;
