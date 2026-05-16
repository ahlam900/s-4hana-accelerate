import { ReactNode } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, LucideIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

interface CtaLink {
  label: string;
  to: string;
}

interface RightCardItem {
  icon: LucideIcon;
  title: string;
  meta: string;
}

interface RightCardFooter {
  label: string;
  ctaLabel: string;
  ctaTo: string;
}

export interface StandardHeroProps {
  eyebrow: string;
  title: ReactNode;
  description?: ReactNode;
  primaryCta?: CtaLink;
  secondaryCta?: CtaLink;
  proofItems?: string[];
  rightCard: {
    eyebrow: string;
    items: RightCardItem[];
    footer?: RightCardFooter;
  };
}

/**
 * Unified premium hero — 2-column grid mirroring the approved Formations hero.
 * Use on all non-locked main pages to deliver a consistent "SAP institute / consulting" identity.
 */
const StandardHero = ({
  eyebrow,
  title,
  description,
  primaryCta,
  secondaryCta,
  proofItems,
  rightCard,
}: StandardHeroProps) => {
  return (
    <section className="relative pt-24 md:pt-28 pb-16 md:pb-20 overflow-hidden bg-secondary border-b border-border">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-champagne/30 to-transparent" />
      <div className="container-wide grid lg:grid-cols-12 gap-12 lg:gap-20 items-center relative">
        {/* LEFT */}
        <div className="lg:col-span-7 relative z-10">
          <div className="inline-flex items-center gap-3 mb-8">
            <span className="h-px w-8 bg-champagne" />
            <span className="text-[10px] uppercase tracking-[0.32em] text-champagne font-medium">
              {eyebrow}
            </span>
          </div>

          <h1 className="display-xl text-foreground max-w-[22ch] leading-[1.05]">
            {title}
          </h1>

          {description && (
            <div className="lede mt-7 max-w-xl leading-relaxed text-muted-foreground">
              {description}
            </div>
          )}

          {(primaryCta || secondaryCta) && (
            <div className="mt-9 flex flex-wrap gap-3">
              {primaryCta && (
                <Button asChild size="lg" variant="ink">
                  <Link to={primaryCta.to}>
                    {primaryCta.label} <ArrowRight />
                  </Link>
                </Button>
              )}
              {secondaryCta && (
                <Button asChild size="lg" variant="outline">
                  <Link to={secondaryCta.to}>{secondaryCta.label}</Link>
                </Button>
              )}
            </div>
          )}

          {proofItems && proofItems.length > 0 && (
            <div className="mt-12 pt-6 border-t border-border/70 flex flex-nowrap items-center gap-x-6 md:gap-x-8 text-[10.5px] md:text-[11px] uppercase tracking-[0.2em] text-muted-foreground whitespace-nowrap overflow-x-auto">
              {proofItems.map((item, i) => (
                <span key={i} className="contents">
                  <span>{item}</span>
                  {i < proofItems.length - 1 && (
                    <span className="h-3 w-px bg-border shrink-0" />
                  )}
                </span>
              ))}
            </div>
          )}
        </div>

        {/* RIGHT — premium card */}
        <div className="lg:col-span-5 relative">
          <div className="relative bg-background rounded-sm shadow-[var(--shadow-lift)] ring-1 ring-border overflow-hidden">
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-champagne/40 to-transparent" />
            <div className="p-8 md:p-10">
              <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.28em] text-champagne mb-6">
                <span className="h-px w-5 bg-champagne" /> {rightCard.eyebrow}
              </div>
              <ul className="divide-y divide-border/70">
                {rightCard.items.map((item) => (
                  <li key={item.title} className="py-4 first:pt-0 last:pb-0 flex items-start gap-4">
                    <div className="flex items-center justify-center h-9 w-9 rounded-sm bg-champagne/[0.07] ring-1 ring-champagne/25 shrink-0">
                      <item.icon className="h-[18px] w-[18px] text-champagne" strokeWidth={1.4} />
                    </div>
                    <div className="min-w-0">
                      <div className="font-display text-[16px] leading-snug text-foreground">
                        {item.title}
                      </div>
                      <div className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground mt-1.5">
                        {item.meta}
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            {rightCard.footer && (
              <div className="border-t border-border bg-secondary/60 px-8 md:px-10 py-4 flex items-center justify-between">
                <span className="text-[10.5px] uppercase tracking-[0.2em] text-muted-foreground">
                  {rightCard.footer.label}
                </span>
                <Link
                  to={rightCard.footer.ctaTo}
                  className="text-[12px] font-medium text-champagne inline-flex items-center gap-1.5 hover:gap-2 transition-all"
                >
                  {rightCard.footer.ctaLabel} <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default StandardHero;
