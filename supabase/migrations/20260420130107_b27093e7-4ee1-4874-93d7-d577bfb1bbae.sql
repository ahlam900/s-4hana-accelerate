
-- Demandes générales (page Contact)
CREATE TABLE public.contact_submissions (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  prenom TEXT NOT NULL,
  nom TEXT NOT NULL,
  email TEXT NOT NULL,
  telephone TEXT,
  societe TEXT,
  sujet TEXT NOT NULL,
  message TEXT NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
ALTER TABLE public.contact_submissions ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Anyone can submit contact form" ON public.contact_submissions FOR INSERT WITH CHECK (true);

-- Demandes de formation (page Formations Finance SAP)
CREATE TABLE public.training_inquiries (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  prenom TEXT NOT NULL,
  nom TEXT NOT NULL,
  email TEXT NOT NULL,
  telephone TEXT,
  societe TEXT,
  formation_souhaitee TEXT NOT NULL,
  niveau TEXT,
  objectif TEXT,
  message TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
ALTER TABLE public.training_inquiries ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Anyone can submit training inquiry" ON public.training_inquiries FOR INSERT WITH CHECK (true);

-- Demandes entreprise (page Offres entreprise)
CREATE TABLE public.corporate_inquiries (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  prenom TEXT NOT NULL,
  nom TEXT NOT NULL,
  societe TEXT NOT NULL,
  fonction TEXT,
  email TEXT NOT NULL,
  telephone TEXT,
  offre_souhaitee TEXT NOT NULL,
  besoin TEXT,
  message TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
ALTER TABLE public.corporate_inquiries ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Anyone can submit corporate inquiry" ON public.corporate_inquiries FOR INSERT WITH CHECK (true);

-- Commandes de produits digitaux (checkout factice)
CREATE TABLE public.digital_orders (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  prenom TEXT NOT NULL,
  nom TEXT NOT NULL,
  email TEXT NOT NULL,
  societe TEXT,
  items JSONB NOT NULL,
  total_eur NUMERIC(10,2) NOT NULL,
  status TEXT NOT NULL DEFAULT 'pending',
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
ALTER TABLE public.digital_orders ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Anyone can submit order" ON public.digital_orders FOR INSERT WITH CHECK (true);
