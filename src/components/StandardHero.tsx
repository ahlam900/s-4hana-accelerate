import { ReactNode } from "react";
import { LucideIcon } from "lucide-react";
import GlobalHeroSection from "@/components/GlobalHeroSection";

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
  proofItems?: ReactNode[];
  rightCard: {
    eyebrow: string;
    items: RightCardItem[];
    footer?: RightCardFooter;
  };
}

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
    <GlobalHeroSection
      eyebrow={eyebrow}
      title={title}
      description={description}
      primaryCta={primaryCta}
      secondaryCta={secondaryCta}
      proofItems={proofItems}
      rightCard={rightCard}
    />
  );
};

export default StandardHero;