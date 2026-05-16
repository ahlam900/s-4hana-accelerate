import { LucideIcon } from "lucide-react";

export interface HeroContextCardItem {
  icon: LucideIcon;
  title: string;
  meta: string;
}

interface HeroContextCardProps {
  label: string;
  items: HeroContextCardItem[];
  footerLabel?: string;
  footerHint?: string;
}

/**
 * Sober premium card used in the right column of page heroes
 * to keep a consistent 2-column hero layout across the site.
 * Mirrors the visual language of the Formations hero catalog card.
 */
const HeroContextCard = ({ label, items, footerLabel, footerHint }: HeroContextCardProps) => {
  return (
    <div className="relative bg-background rounded-sm shadow-[var(--shadow-lift)] ring-1 ring-border overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-champagne/40 to-transparent" />
      <div className="p-8 md:p-10">
        <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.28em] text-champagne mb-6">
          <span className="h-px w-5 bg-champagne" /> {label}
        </div>
        <ul className="divide-y divide-border/70">
          {items.map((item) => (
            <li key={item.title} className="py-4 first:pt-0 last:pb-0 flex items-start gap-4">
              <div className="flex items-center justify-center h-9 w-9 rounded-sm bg-champagne/[0.07] ring-1 ring-champagne/25 shrink-0">
                <item.icon className="h-[18px] w-[18px] text-champagne" strokeWidth={1.4} />
              </div>
              <div className="min-w-0">
                <div className="font-display text-[16px] leading-snug text-foreground">{item.title}</div>
                <div className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground mt-1.5">{item.meta}</div>
              </div>
            </li>
          ))}
        </ul>
      </div>
      {(footerLabel || footerHint) && (
        <div className="border-t border-border bg-secondary/60 px-8 md:px-10 py-4 flex items-center justify-between">
          {footerLabel && (
            <span className="text-[10.5px] uppercase tracking-[0.2em] text-muted-foreground">{footerLabel}</span>
          )}
          {footerHint && (
            <span className="text-[12px] font-medium text-champagne">{footerHint}</span>
          )}
        </div>
      )}
    </div>
  );
};

export default HeroContextCard;
