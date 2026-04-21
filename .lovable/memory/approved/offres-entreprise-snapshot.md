---
name: Offres Entreprise Snapshot
description: LOCKED baseline for /offres-entreprise — premium hero (EN copy), "Our Offerings in Detail" with two consulting engagement cards (problem/approach/impact)
type: reference
---

# /offres-entreprise — Approved Locked Baseline

## Locked sections (do NOT modify without explicit instruction)

1. **Hero** (`bg-ink`)
   - H1: "Structurez et sécurisez vos transformations Finance SAP." (champagne accent on "transformations Finance SAP")
   - Lede (EN): "CBS Finance Institute supports finance departments in structuring, securing, and accelerating their SAP Finance transformations."
   - Sub: "Our approach ensures process reliability, team alignment, and successful execution of S/4HANA projects in demanding environments."
   - 3 bullets (FR): Structuration des processus / Formation Key Users / Accompagnement S/4HANA
   - CTA: "Discuss your transformation →" (champagne variant)
   - Trust line: "✔ Response within 24h — confidential exchange"

2. **Our Offerings in Detail** (white section)
   - Two side-by-side `DetailedOffer` cards in a 2-col grid separated by hairline borders
   - Card structure: index + tag → title → "The challenge" → "Our approach" (Layers icons) → "Measurable impact" (→ markers) → CTA
   - Engagement 01: SAP Digital Transformation Package — CTA "Frame my transformation"
   - Engagement 02: SAP Key User Training Package — CTA "Empower my key users"
   - Closing line: "Each engagement is shaped with your leadership team..."

3. Why CBS, Inquiry form — unchanged from previous version

## Files
- `src/pages/OffresEntreprise.tsx`
- `src/components/forms/CorporateInquiryForm.tsx`

## Design tokens used
- bg-ink, text-ivory, text-champagne, card-premium, eyebrow, display-lg/md, lede, container-wide
- Buttons: variant `champagne` (hero CTA), variant `ink` (offer CTAs)
