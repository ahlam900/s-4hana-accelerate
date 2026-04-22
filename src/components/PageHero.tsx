import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface PageHeroProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  primaryCta?: { label: string; to: string };
  secondaryCta?: { label: string; to: string };
  variant?: "ivory" | "ink";
  className?: string;
}

const PageHero = ({
  eyebrow,
  title,
  subtitle,
  primaryCta,
  secondaryCta,
  variant = "ivory",
  className,
}: PageHeroProps) => {
  const isInk = variant === "ink";
  return (
    <section
      className={cn(
        "section-y border-b border-border",
        isInk ? "bg-ink text-ivory" : "bg-secondary",
        className,
      )}
    >
      <div className="container-wide">
        <div className="max-w-4xl">
          {eyebrow && (
            <div className={cn("eyebrow mb-6", isInk && "text-ivory/60")}>{eyebrow}</div>
          )}
          <h1 className={cn("display-lg", isInk ? "text-ivory" : "text-foreground")}>{title}</h1>
          {subtitle && (
            <p
              className={cn(
                "lede mt-6 max-w-2xl",
                isInk ? "text-ivory/75" : "text-muted-foreground",
              )}
            >
              {subtitle}
            </p>
          )}
          {(primaryCta || secondaryCta) && (
            <div className="mt-10 flex flex-wrap gap-3">
              {primaryCta && (
                <Button asChild size="lg" variant={isInk ? "champagne" : "ink"}>
                  <Link to={primaryCta.to}>
                    {primaryCta.label} <ArrowRight />
                  </Link>
                </Button>
              )}
              {secondaryCta && (
                <Button asChild size="lg" variant={isInk ? "outlineLight" : "outline"}>
                  <Link to={secondaryCta.to}>{secondaryCta.label}</Link>
                </Button>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default PageHero;
