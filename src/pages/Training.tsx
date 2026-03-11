import Layout from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, BookOpen } from "lucide-react";
import ContactFormSection from "@/components/sections/ContactFormSection";
import BecomeConsultantSection from "@/components/sections/BecomeConsultantSection";

const programs = [
  {
    title: "SAP S/4HANA Finance (FICO)",
    desc: "Comprehensive SAP Finance training for S/4HANA environments.",
    topics: ["General Ledger", "Accounts Payable", "Accounts Receivable", "Asset Accounting", "Controlling", "Profitability Analysis", "Financial closing"],
    format: "Online & Bootcamp",
    price: "From $2,500",
  },
  {
    title: "SAP Logistics Training",
    desc: "Master SAP logistics modules for supply chain excellence.",
    topics: ["SAP MM", "SAP SD", "SAP PP", "Procurement processes", "Supply chain management"],
    format: "Online & Corporate",
    price: "From $2,200",
  },
  {
    title: "SAP Transformation Training",
    desc: "Strategic courses on ECC to S/4HANA migration and transformation methodology.",
    topics: ["ECC to S/4HANA migration", "SAP transformation strategy", "SAP project methodology"],
    format: "Intensive Bootcamp",
    price: "From $3,000",
  },
];

const formats = [
  { label: "Online Training", desc: "Flexible self-paced and instructor-led virtual sessions." },
  { label: "Corporate Training", desc: "Tailored programs delivered at your organization." },
  { label: "Intensive Bootcamps", desc: "Accelerated hands-on programs for rapid skill building." },
  { label: "Certification Prep", desc: "Focused preparation for official SAP certifications." },
];

const Training = () => {
  return (
    <Layout>
      <section className="gradient-hero section-padding pt-32">
        <div className="container-wide mx-auto">
          <motion.h1
            className="font-heading text-4xl md:text-5xl font-bold text-primary-foreground mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            CBS SAP Training Academy
          </motion.h1>
          <motion.p
            className="text-primary-foreground/80 text-lg max-w-2xl mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            Professional SAP training programs designed to prepare future SAP consultants and corporate teams for SAP S/4HANA environments.
          </motion.p>
          <Button variant="hero" size="lg" asChild>
            <Link to="/contact">Inquire About Training <BookOpen className="ml-1" size={18} /></Link>
          </Button>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-wide mx-auto">
          <h2 className="font-heading text-3xl font-bold text-foreground mb-10 text-center">Training Programs</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {programs.map((prog, i) => (
              <motion.div
                key={prog.title}
                className="bg-card rounded-xl border border-border card-shadow flex flex-col overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="p-8 flex-1">
                  <h3 className="font-heading text-xl font-semibold text-foreground mb-2">{prog.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4">{prog.desc}</p>
                  <ul className="space-y-2 mb-4">
                    {prog.topics.map((t) => (
                      <li key={t} className="flex items-center gap-2 text-sm text-foreground">
                        <CheckCircle2 className="text-accent shrink-0" size={14} />
                        {t}
                      </li>
                    ))}
                  </ul>
                  <div className="text-xs text-muted-foreground">{prog.format}</div>
                </div>
                <div className="p-8 pt-0 border-t border-border mt-auto">
                  <div className="flex items-center justify-between">
                    <span className="font-heading font-bold text-lg text-foreground">{prog.price}</span>
                    <Button variant="hero" size="sm" asChild>
                      <Link to="/contact">Enroll <ArrowRight size={14} /></Link>
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-muted">
        <div className="container-wide mx-auto">
          <h2 className="font-heading text-3xl font-bold text-foreground mb-10 text-center">Training Formats</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {formats.map((f, i) => (
              <motion.div
                key={f.label}
                className="bg-card p-6 rounded-xl border border-border card-shadow"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
              >
                <h4 className="font-heading font-semibold text-foreground mb-2">{f.label}</h4>
                <p className="text-muted-foreground text-sm">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <BecomeConsultantSection />

      <ContactFormSection />
    </Layout>
  );
};

export default Training;
