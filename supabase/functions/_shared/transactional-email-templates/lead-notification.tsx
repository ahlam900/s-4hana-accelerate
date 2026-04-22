import * as React from 'npm:react@18.3.1'
import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Link,
  Preview,
  Section,
  Text,
} from 'npm:@react-email/components@0.0.22'
import type { TemplateEntry } from './registry.ts'

interface LeadNotificationProps {
  formulaire?: string | null
  type_demande?: string | null
  prenom?: string | null
  nom?: string | null
  email?: string | null
  telephone?: string | null
  societe?: string | null
  niveau?: string | null
  objectif?: string | null
  fonction?: string | null
  besoin?: string | null
  message?: string | null
  source?: string | null
  statut?: string | null
}

const dash = (v?: string | null) => (v && v.trim() ? v : '—')
const has = (v?: string | null) => !!(v && v.trim())

const formLabel = (f?: string) => {
  switch ((f || '').toLowerCase()) {
    case 'contact':
      return 'Contact'
    case 'formation':
      return 'Formation'
    case 'entreprise':
      return 'Entreprise'
    default:
      return dash(f)
  }
}

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
}: LeadNotificationProps) => {
  const fullName = `${prenom ?? ''} ${nom ?? ''}`.trim() || '—'

  return (
    <Html lang="fr" dir="ltr">
      <Head />
      <Preview>
        Nouveau lead {formLabel(formulaire)} — {fullName}
        {has(societe) ? ` · ${societe}` : ''}
      </Preview>
      <Body style={main}>
        <Container style={container}>
          {/* Header band */}
          <Section style={headerBand}>
            <Text style={brandKicker}>CBS INSTITUTE · LEADS</Text>
            <Heading style={h1}>Nouveau lead reçu</Heading>
            <Text style={headerSub}>
              Source formulaire&nbsp;:&nbsp;
              <span style={pill}>{formLabel(formulaire)}</span>
              {has(type_demande) ? (
                <>
                  &nbsp;·&nbsp;Type&nbsp;:&nbsp;
                  <span style={pillMuted}>{type_demande}</span>
                </>
              ) : null}
            </Text>
          </Section>

          {/* Highlight card: key fields */}
          <Section style={highlightCard}>
            <Text style={highlightLabel}>Contact</Text>
            <Heading as="h2" style={highlightName}>
              {fullName}
            </Heading>

            <table cellPadding={0} cellSpacing={0} style={kvTable}>
              <tbody>
                <tr>
                  <td style={kvKey}>Email</td>
                  <td style={kvVal}>
                    {has(email) ? (
                      <Link href={`mailto:${email}`} style={linkStyle}>
                        {email}
                      </Link>
                    ) : (
                      '—'
                    )}
                  </td>
                </tr>
                <tr>
                  <td style={kvKey}>Téléphone</td>
                  <td style={kvVal}>
                    {has(telephone) ? (
                      <Link href={`tel:${(telephone || '').replace(/\s+/g, '')}`} style={linkStyle}>
                        {telephone}
                      </Link>
                    ) : (
                      '—'
                    )}
                  </td>
                </tr>
                <tr>
                  <td style={kvKey}>Société</td>
                  <td style={kvVal}>{dash(societe)}</td>
                </tr>
                <tr>
                  <td style={kvKey}>Type de demande</td>
                  <td style={kvVal}>
                    <span style={pillAccent}>{dash(type_demande)}</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </Section>

          {/* Details grid */}
          <Section style={detailsCard}>
            <Text style={sectionTitle}>Détails</Text>
            <table cellPadding={0} cellSpacing={0} style={kvTable}>
              <tbody>
                <tr>
                  <td style={kvKey}>Fonction</td>
                  <td style={kvVal}>{dash(fonction)}</td>
                </tr>
                <tr>
                  <td style={kvKey}>Niveau</td>
                  <td style={kvVal}>{dash(niveau)}</td>
                </tr>
                <tr>
                  <td style={kvKey}>Objectif</td>
                  <td style={kvVal}>{dash(objectif)}</td>
                </tr>
                <tr>
                  <td style={kvKey}>Besoin</td>
                  <td style={kvVal}>{dash(besoin)}</td>
                </tr>
              </tbody>
            </table>
          </Section>

          {/* Message */}
          <Section style={messageCard}>
            <Text style={sectionTitle}>Message</Text>
            <Text style={messageBlock}>{dash(message)}</Text>
          </Section>

          {/* Meta */}
          <Section style={metaSection}>
            <Text style={metaText}>
              <strong style={metaStrong}>Source :</strong> {dash(source)}
              &nbsp;·&nbsp;
              <strong style={metaStrong}>Statut :</strong>{' '}
              <span style={statusPill}>{dash(statut)}</span>
              &nbsp;·&nbsp;
              <strong style={metaStrong}>Formulaire :</strong> {formLabel(formulaire)}
            </Text>
          </Section>

          <Hr style={hr} />
          <Text style={footer}>
            Notification automatique — CBS Institute
          </Text>
        </Container>
      </Body>
    </Html>
  )
}

export const template = {
  component: LeadNotificationEmail,
  subject: (data: Record<string, any>) =>
    `[CBS Lead] New submission - ${data.formulaire ?? '—'} - ${data.prenom ?? ''} ${data.nom ?? ''}`.trim(),
  to: 'contact@cbs-institute.com',
  displayName: 'CBS lead notification',
  previewData: undefined,
} satisfies TemplateEntry

/* Styles — premium corporate (deep blue / white / accent) */
const NAVY = '#0a2540'
const NAVY_SOFT = '#13315c'
const ACCENT = '#1e6cff'
const BG = '#f4f6fb'
const CARD = '#ffffff'
const BORDER = '#e3e8f0'
const TEXT = '#1f2a44'
const MUTED = '#6b7588'

const main = {
  backgroundColor: '#ffffff',
  fontFamily:
    "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
  margin: 0,
  padding: '24px 0',
}
const container = {
  maxWidth: '640px',
  margin: '0 auto',
  padding: '0 16px',
  backgroundColor: '#ffffff',
}
const headerBand = {
  background: `linear-gradient(135deg, ${NAVY} 0%, ${NAVY_SOFT} 100%)`,
  borderRadius: '14px 14px 0 0',
  padding: '28px 28px 24px',
  color: '#ffffff',
}
const brandKicker = {
  fontSize: '11px',
  letterSpacing: '2px',
  fontWeight: 700,
  color: '#9ec1ff',
  margin: '0 0 8px',
  textTransform: 'uppercase' as const,
}
const h1 = {
  fontSize: '24px',
  fontWeight: 700,
  color: '#ffffff',
  margin: '0 0 12px',
  lineHeight: '1.2',
}
const headerSub = {
  fontSize: '13px',
  color: '#cfdcf5',
  margin: 0,
  lineHeight: '1.6',
}
const pill = {
  display: 'inline-block',
  backgroundColor: ACCENT,
  color: '#ffffff',
  padding: '3px 10px',
  borderRadius: '999px',
  fontSize: '12px',
  fontWeight: 600,
}
const pillMuted = {
  display: 'inline-block',
  backgroundColor: 'rgba(255,255,255,0.14)',
  color: '#ffffff',
  padding: '3px 10px',
  borderRadius: '999px',
  fontSize: '12px',
  fontWeight: 600,
}
const pillAccent = {
  display: 'inline-block',
  backgroundColor: '#e8f0ff',
  color: ACCENT,
  padding: '3px 10px',
  borderRadius: '999px',
  fontSize: '12px',
  fontWeight: 600,
}
const statusPill = {
  display: 'inline-block',
  backgroundColor: '#e6f7ee',
  color: '#0f8a4a',
  padding: '2px 9px',
  borderRadius: '999px',
  fontSize: '12px',
  fontWeight: 600,
  textTransform: 'capitalize' as const,
}
const highlightCard = {
  backgroundColor: BG,
  border: `1px solid ${BORDER}`,
  borderTop: 'none',
  padding: '24px 28px 20px',
}
const highlightLabel = {
  fontSize: '11px',
  letterSpacing: '1.5px',
  textTransform: 'uppercase' as const,
  color: MUTED,
  margin: '0 0 6px',
  fontWeight: 700,
}
const highlightName = {
  fontSize: '22px',
  fontWeight: 700,
  color: NAVY,
  margin: '0 0 16px',
  lineHeight: '1.2',
}
const detailsCard = {
  backgroundColor: CARD,
  borderLeft: `1px solid ${BORDER}`,
  borderRight: `1px solid ${BORDER}`,
  padding: '20px 28px',
}
const messageCard = {
  backgroundColor: CARD,
  borderLeft: `1px solid ${BORDER}`,
  borderRight: `1px solid ${BORDER}`,
  padding: '4px 28px 20px',
}
const metaSection = {
  backgroundColor: BG,
  border: `1px solid ${BORDER}`,
  borderRadius: '0 0 14px 14px',
  padding: '14px 28px',
}
const sectionTitle = {
  fontSize: '11px',
  letterSpacing: '1.5px',
  textTransform: 'uppercase' as const,
  color: MUTED,
  margin: '0 0 10px',
  fontWeight: 700,
}
const kvTable = {
  width: '100%',
  borderCollapse: 'collapse' as const,
}
const kvKey = {
  width: '38%',
  fontSize: '13px',
  color: MUTED,
  padding: '8px 12px 8px 0',
  verticalAlign: 'top' as const,
  borderBottom: `1px solid ${BORDER}`,
  fontWeight: 500,
}
const kvVal = {
  fontSize: '14px',
  color: TEXT,
  padding: '8px 0',
  verticalAlign: 'top' as const,
  borderBottom: `1px solid ${BORDER}`,
  fontWeight: 500,
}
const linkStyle = {
  color: ACCENT,
  textDecoration: 'none',
  fontWeight: 600,
}
const messageBlock = {
  fontSize: '14px',
  color: TEXT,
  lineHeight: '1.65',
  margin: 0,
  whiteSpace: 'pre-wrap' as const,
  backgroundColor: BG,
  border: `1px solid ${BORDER}`,
  borderRadius: '10px',
  padding: '14px 16px',
}
const metaText = {
  fontSize: '12px',
  color: MUTED,
  margin: 0,
  lineHeight: '1.6',
}
const metaStrong = {
  color: NAVY,
  fontWeight: 700,
}
const hr = {
  borderColor: BORDER,
  margin: '20px 0 12px',
}
const footer = {
  fontSize: '11px',
  color: MUTED,
  textAlign: 'center' as const,
  margin: 0,
}
