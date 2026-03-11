import Layout from "@/components/layout/Layout";
import { motion } from "framer-motion";
import IndustriesSection from "@/components/sections/IndustriesSection";
import ContactFormSection from "@/components/sections/ContactFormSection";

const industryDetails = [
  { name: "Energy", desc: "SAP solutions for upstream, midstream, and downstream energy operations including asset management and commodity trading." },
  { name: "Utilities", desc: "Transforming utility companies with SAP S/4HANA for billing, customer management, and grid operations." },
  { name: "Manufacturing", desc: "Streamlining production planning, quality management, and supply chain with integrated SAP solutions." },
  { name: "Retail", desc: "End-to-end retail transformation from procurement to point-of-sale with SAP S/4HANA." },
  { name: "Financial Services", desc: "Regulatory compliance, risk management, and financial reporting powered by SAP." },
  { name: "Public Sector", desc: "Government and public sector ERP modernization with SAP best practices." },
];

const Industries = () => {
  return (
    <Layout>
      <section className="gradient-hero section-padding pt-32">
        <div className="container-wide mx-auto">
          <motion.h1
            className="font-heading text-4xl md:text-5xl font-bold text-primary-foreground mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Industries We Serve
          </motion.h1>
          <motion.p
            className="text-primary-foreground/80 text-lg max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            Deep domain expertise across critical sectors driving SAP transformation and digital modernization.
          </motion.p>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-wide mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industryDetails.map((ind, i) => (
              <motion.div
                key={ind.name}
                className="bg-card rounded-xl p-8 card-shadow border border-border"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
              >
                <h3 className="font-heading text-xl font-semibold text-foreground mb-3">{ind.name}</h3>
                <p className="text-muted-foreground text-sm">{ind.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <ContactFormSection />
    </Layout>
  );
};

export default Industries;
