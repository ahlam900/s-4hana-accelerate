import Layout from "@/components/layout/Layout";
import HeroSection from "@/components/sections/HeroSection";
import IntroSection from "@/components/sections/IntroSection";
import PillarsSection from "@/components/sections/PillarsSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import FinanceExpertiseSection from "@/components/sections/FinanceExpertiseSection";
import BecomeConsultantSection from "@/components/sections/BecomeConsultantSection";
import WhyChooseSection from "@/components/sections/WhyChooseSection";
import IndustriesSection from "@/components/sections/IndustriesSection";
import ContactFormSection from "@/components/sections/ContactFormSection";
import NewsletterSection from "@/components/sections/NewsletterSection";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <IntroSection />
      <PillarsSection />
      <ProjectsSection />
      <FinanceExpertiseSection />
      <BecomeConsultantSection />
      <WhyChooseSection />
      <IndustriesSection />
      <ContactFormSection />
      <NewsletterSection />
    </Layout>
  );
};

export default Index;
