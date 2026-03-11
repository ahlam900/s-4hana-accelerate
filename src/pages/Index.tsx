import Layout from "@/components/layout/Layout";
import HeroSection from "@/components/sections/HeroSection";
import IntroSection from "@/components/sections/IntroSection";
import PillarsSection from "@/components/sections/PillarsSection";
import IndustriesSection from "@/components/sections/IndustriesSection";
import WhyChooseSection from "@/components/sections/WhyChooseSection";
import ContactFormSection from "@/components/sections/ContactFormSection";
import NewsletterSection from "@/components/sections/NewsletterSection";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <IntroSection />
      <PillarsSection />
      <WhyChooseSection />
      <IndustriesSection />
      <ContactFormSection />
      <NewsletterSection />
    </Layout>
  );
};

export default Index;
