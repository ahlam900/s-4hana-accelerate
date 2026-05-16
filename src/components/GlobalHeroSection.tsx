import { ReactNode } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, LucideIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useLang } from "@/i18n/useLang";

interface CtaLink {
  label: ReactNode;
  to: string;
}

interface RightCardItem {
  icon: LucideIcon;
  title: ReactNode;
  meta: ReactNode;
}

interface RightCardFooter {
  label: ReactNode;
  ctaLabel: ReactNode;
  ctaTo: string;
}

interface RightImageBadge {
  eyebrow: ReactNode;
  title: ReactNode;
  meta?: ReactNode;
  note?: ReactNode;
}

interface RightImage {
  src: string;
  alt: string;
  badge?: RightImageBadge;
  priority?: boolean;
}

interface RightCard {
  eyebrow: ReactNode;
  items: RightCardItem[];
  footer?: RightCardFooter;
}

export interface GlobalHeroSectionProps {
  eyebrow: ReactNode;
  title: ReactNode;
  description?: ReactNode;
  primaryCta?: CtaLink;
  secondaryCta?: CtaLink;
  proofItems?: ReactNode[];
  rightCard?: RightCard;
  rightImage?: RightImage;
  className?: string;
}

const GlobalHeroSection = ({
  eyebrow,
  title,
  description,
  primaryCta,
  secondaryCta,
  proofItems,
  rightCard,
  rightImage,
  className,
}: GlobalHeroSectionProps) => {
  const { localize } = useLang();

  const resolveTo = (to: string) => {
    if (to.startsWith("#") || to.startsWith("?") || to.startsWith("mailto:") || to.startsWith("http")) {
      return to;
    }
    return localize(to);
  };

  return (
    <section className={cn("global-hero-section", className)}>
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-champagne/30 to-transparent" />
      <div className="global-hero-grid">
        <div className="global-hero-copy">
          <div className="inline-flex items-center gap-3 mb-8">
            <span className="h-px w-8 bg-champagne" />
            <span className="text-[10px] uppercase tracking-[0.32em] text-champagne font-medium">
              {eyebrow}
            </span>
          </div>

          <h1 className="display-xl text-foreground max-w-[22ch] leading-[1.05]">{title}</h1>

          {description && (
            <div className="lede mt-7 max-w-xl leading-relaxed text-muted-foreground">{description}</div>
          )}

          {(primaryCta || secondaryCta) && (
            <div className="global-hero-actions">
              {primaryCta && (
                <Button asChild size="lg" variant="ink">
                  <Link to={resolveTo(primaryCta.to)}>
                    {primaryCta.label} <ArrowRight />
                  </Link>
                </Button>
              )}
              {secondaryCta && (
                <Button asChild size="lg" variant="outline">
                  <Link to={resolveTo(secondaryCta.to)}>{secondaryCta.label}</Link>
                </Button>
              )}
            </div>
          )}

          {proofItems && proofItems.length > 0 && (
            <div className="global-hero-meta">
              {proofItems.map((item, index) => (
                <span key={index} className="contents">
                  <span>{item}</span>
                  {index < proofItems.length - 1 && <span className="h-3 w-px bg-border shrink-0" />}
                </span>
              ))}
            </div>
          )}
        </div>

        <div className="global-hero-side">
          {rightCard && (
            <div className="global-hero-panel flex h-full flex-col bg-background">
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-champagne/40 to-transparent" />
              <div className="flex-1 p-8 md:p-10">
                <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.28em] text-champagne mb-6">
                  <span className="h-px w-5 bg-champagne" /> {rightCard.eyebrow}
                </div>
                <ul className="divide-y divide-border/70">
                  {rightCard.items.map((item) => (
                    <li key={String(item.title)} className="py-4 first:pt-0 last:pb-0 flex items-start gap-4">
                      <div className="flex items-center justify-center h-9 w-9 rounded-sm bg-champagne/[0.07] ring-1 ring-champagne/25 shrink-0">
                        <item.icon className="h-[18px] w-[18px] text-champagne" strokeWidth={1.4} />
                      </div>
                      <div className="min-w-0">
                        <div className="font-display text-[16px] leading-snug text-foreground">{item.title}</div>
                        <div className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground mt-1.5">
                          {item.meta}
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
              {rightCard.footer && (
                <div className="border-t border-border bg-secondary/60 px-8 md:px-10 py-4 flex items-center justify-between gap-5">
                  <span className="text-[10.5px] uppercase tracking-[0.2em] text-muted-foreground">
                    {rightCard.footer.label}
                  </span>
                  <Link
                    to={resolveTo(rightCard.footer.ctaTo)}
                    className="text-[12px] font-medium text-champagne inline-flex items-center gap-1.5 hover:gap-2 transition-all shrink-0"
                  >
                    {rightCard.footer.ctaLabel} <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              )}
            </div>
          )}

          {rightImage && (
            <div className="global-hero-panel min-h-[360px] sm:min-h-[420px] lg:min-h-[500px]">
              <img
                src={rightImage.src}
                alt={rightImage.alt}
                className="absolute inset-0 h-full w-full object-cover"
                width={1080}
                height={1350}
                fetchPriority={rightImage.priority ? "high" : "auto"}
                loading={rightImage.priority ? "eager" : "lazy"}
                decoding="async"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/55 via-ink/10 to-ink/15 pointer-events-none" />
              {rightImage.badge && (
                <div className="absolute bottom-4 left-4 md:bottom-6 md:left-6 bg-ink/94 backdrop-blur-sm text-ivory px-4 py-3.5 rounded-sm max-w-[220px] shadow-[var(--shadow-lift)] ring-1 ring-champagne/20">
                  <div className="flex items-center gap-2 text-[8.5px] uppercase tracking-[0.26em] text-champagne mb-1.5">
                    <span className="h-px w-3 bg-champagne" /> {rightImage.badge.eyebrow}
                  </div>
                  <div className="font-display text-[13.5px] leading-snug">{rightImage.badge.title}</div>
                  {rightImage.badge.meta && (
                    <div className="text-[9.5px] uppercase tracking-[0.18em] text-ivory/55 mt-1.5 pt-1.5 border-t border-ivory/10">
                      {rightImage.badge.meta}
                    </div>
                  )}
                  {rightImage.badge.note && (
                    <div className="text-[8.5px] uppercase tracking-wide text-ivory/40 mt-1">
                      {rightImage.badge.note}
                    </div>
                  )}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default GlobalHeroSection;