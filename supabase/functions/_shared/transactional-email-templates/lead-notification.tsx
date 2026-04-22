import * as React from 'npm:react@18.3.1'
import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Preview,
  Section,
  Text,
} from 'npm:@react-email/components@0.0.22'
import type { TemplateEntry } from './registry.ts'

interface LeadNotificationProps {
  formulaire?: string
  type_demande?: string
  prenom?: string
  nom?: string
  email?: string
  telephone?: string
  societe?: string
  niveau?: string
  objectif?: string
  fonction?: string
  besoin?: string
  message?: string
  source?: string
  statut?: string
}

const dash = (v?: string) => (v && v.trim() ? v : '—')

const LeadNotificationEmail = ({
  formulaire,
  type_demande,
  prenom,
  nom,
  email,
  telephone,
  societe,
  niveau,
  objectif,
  fonction,
  besoin,
  message,
  source,
  statut,
}: LeadNotificationProps) => (
  <Html lang="fr" dir="ltr">
    <Head />
    <Preview>
      Nouveau lead {dash(formulaire)} — {dash(prenom)} {dash(nom)}
    </Preview>
    <Body style={main}>
      <Container style={container}>
        <Heading style={h1}>Nouveau lead reçu</Heading>
        <Text style={text}>A new lead has been submitted on the website.</Text>

        <Section style={section}>
          <Text style={row}><strong>Form source:</strong> {dash(formulaire)}</Text>
          <Text style={row}><strong>Type de demande:</strong> {dash(type_demande)}</Text>
        </Section>

        <Hr style={hr} />

        <Section style={section}>
          <Text style={row}><strong>Prénom:</strong> {dash(prenom)}</Text>
          <Text style={row}><strong>Nom:</strong> {dash(nom)}</Text>
          <Text style={row}><strong>Email:</strong> {dash(email)}</Text>
          <Text style={row}><strong>Téléphone:</strong> {dash(telephone)}</Text>
          <Text style={row}><strong>Société:</strong> {dash(societe)}</Text>
        </Section>

        <Hr style={hr} />

        <Section style={section}>
          <Text style={row}><strong>Niveau:</strong> {dash(niveau)}</Text>
          <Text style={row}><strong>Objectif:</strong> {dash(objectif)}</Text>
          <Text style={row}><strong>Fonction:</strong> {dash(fonction)}</Text>
          <Text style={row}><strong>Besoin:</strong> {dash(besoin)}</Text>
        </Section>

        <Hr style={hr} />

        <Section style={section}>
          <Text style={rowLabel}><strong>Message:</strong></Text>
          <Text style={messageBlock}>{dash(message)}</Text>
        </Section>

        <Hr style={hr} />

        <Section style={section}>
          <Text style={row}><strong>Source:</strong> {dash(source)}</Text>
          <Text style={row}><strong>Statut:</strong> {dash(statut)}</Text>
        </Section>
      </Container>
    </Body>
  </Html>
)

export const template = {
  component: LeadNotificationEmail,
  subject: (data: Record<string, any>) =>
    `[CBS Lead] New submission - ${data.formulaire ?? '—'} - ${data.prenom ?? ''} ${data.nom ?? ''}`.trim(),
  to: 'contact@cbs-institute.com',
  displayName: 'CBS lead notification',
  previewData: {
    formulaire: 'contact',
    type_demande: 'Information',
    prenom: 'Jane',
    nom: 'Doe',
    email: 'jane@example.com',
    telephone: '+33 6 12 34 56 78',
    societe: 'Acme',
    niveau: '',
    objectif: '',
    fonction: 'CFO',
    besoin: 'Audit S/4HANA',
    message: 'Bonjour, je souhaite être recontacté.',
    source: 'website',
    statut: 'new',
  },
} satisfies TemplateEntry

const main = { backgroundColor: '#ffffff', fontFamily: 'Arial, sans-serif' }
const container = { padding: '24px', maxWidth: '640px', margin: '0 auto' }
const h1 = { fontSize: '22px', fontWeight: 'bold', color: '#0a2540', margin: '0 0 16px' }
const text = { fontSize: '14px', color: '#333333', lineHeight: '1.5', margin: '0 0 16px' }
const section = { margin: '0 0 8px' }
const row = { fontSize: '14px', color: '#333333', lineHeight: '1.6', margin: '0 0 4px' }
const rowLabel = { fontSize: '14px', color: '#333333', lineHeight: '1.6', margin: '0 0 4px' }
const messageBlock = { fontSize: '14px', color: '#333333', lineHeight: '1.6', margin: '0', whiteSpace: 'pre-wrap' as const }
const hr = { borderColor: '#e5e7eb', margin: '16px 0' }
