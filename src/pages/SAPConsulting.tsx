import Layout from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import ContactFormSection from "@/components/sections/ContactFormSection";

const services = [
  {
    title: "SAP S/4HANA Implementation",
    desc: "End-to-end implementation including business process design, SAP configuration, integration architecture, data migration, testing and deployment.",
    items: ["Business process design", "SAP configuration", "Integration architecture", "Data migration", "Testing and deployment"],
  },
  {
    title: "ECC to S/4HANA Migration",
    desc: "Comprehensive migration strategies tailored to your enterprise landscape and business objectives.",
    items: ["Brownfield conversion", "Greenfield implementation", "Landscape transformation"],
  },
  {
    title: "SAP Functional Expertise",
    desc: "Deep module expertise across the SAP ecosystem.",
    items: ["SAP FICO", "SAP MM", "SAP SD", "SAP PP", "SAP PS", "SAP HCM", "SAP Analytics"],
  },
  {
    title: "SAP Optimization & Support",
    desc: "Continuous improvement and support services for existing SAP landscapes.",
    items: ["ERP optimization", "Finance transformation", "Performance improvement", "Reporting and analytics"],
  },
];

const SAPConsulting = () => {
  return (
    <Layout>
      <section className="gradient-hero section-padding pt-32">
        <div className="container-wide mx-auto">
          <motion.h1
            className="font-heading text-4xl md:text-5xl font-bold text-primary-foreground mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            SAP Transformation & S/4HANA Consulting
          </motion.h1>
          <motion.p
            className="text-primary-foreground/80 text-lg max-w-2xl mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            CBS Consulting supports enterprises in modernizing their ERP landscape through SAP S/4HANA implementations, ECC to S/4HANA conversions, system optimization, and digital finance transformation.
          </motion.p>
          <Button variant="hero" size="lg" asChild>
            <Link to="/contact">Discuss Your Project <ArrowRight className="ml-1" size={18} /></Link>
          </Button>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-wide mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((svc, i) => (
              <motion.div
                key={svc.title}
                className="bg-card rounded-xl p-8 card-shadow border border-border"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <h3 className="font-heading text-xl font-semibold text-foreground mb-3">{svc.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">{svc.desc}</p>
                <ul className="space-y-2">
                  {svc.items.map((item) => (
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

export default SAPConsulting;
