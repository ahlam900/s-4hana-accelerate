import Layout from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import ContactFormSection from "@/components/sections/ContactFormSection";

const packages = [
  {
    title: "Corporate SAP Transformation Packages",
    desc: "Support for companies implementing SAP S/4HANA.",
    items: ["ERP transformation strategy", "Finance process redesign", "SAP architecture advisory", "SAP program governance"],
  },
  {
    title: "Corporate SAP Training Programs",
    desc: "Training programs tailored for enterprise teams.",
    items: ["SAP Key User training", "SAP functional consultant training", "SAP transformation workshops"],
  },
  {
    title: "Enterprise Transformation Support",
    desc: "Strategic support for large-scale organizational change.",
    items: ["Change management", "Transformation roadmap design", "SAP program governance"],
  },
];

const CorporatePrograms = () => {
  return (
    <Layout>
      <section className="gradient-hero section-padding pt-32">
        <div className="container-wide mx-auto">
          <motion.h1
            className="font-heading text-4xl md:text-5xl font-bold text-primary-foreground mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Enterprise SAP Transformation Programs
          </motion.h1>
          <motion.p
            className="text-primary-foreground/80 text-lg max-w-2xl mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            Strategic transformation programs for companies undergoing large-scale ERP transformation and finance digitalization.
          </motion.p>
          <Button variant="hero" size="lg" asChild>
            <Link to="/contact">Explore Programs <ArrowRight className="ml-1" size={18} /></Link>
          </Button>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-wide mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {packages.map((pkg, i) => (
              <motion.div
                key={pkg.title}
                className="bg-card rounded-xl p-8 card-shadow border border-border"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <h3 className="font-heading text-xl font-semibold text-foreground mb-3">{pkg.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">{pkg.desc}</p>
                <ul className="space-y-2">
                  {pkg.items.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-foreground">
                      <CheckCircle2 className="text-accent shrink-0" size={16} />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <ContactFormSection />
    </Layout>
  );
};

export default CorporatePrograms;
