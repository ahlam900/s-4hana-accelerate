import Layout from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { Shield, Users, Award, TrendingUp } from "lucide-react";
import ContactFormSection from "@/components/sections/ContactFormSection";

const values = [
  { icon: Shield, title: "SAP Certified Expertise", desc: "Our consultants hold the highest SAP certifications with deep S/4HANA specialization across all modules." },
  { icon: Users, title: "Enterprise-Grade Team", desc: "200+ senior SAP professionals with experience across Fortune 500 clients and complex global rollouts." },
  { icon: Award, title: "Proven Track Record", desc: "500+ successful SAP projects delivered on time and budget, spanning implementations, migrations, and optimizations." },
  { icon: TrendingUp, title: "Finance Transformation Focus", desc: "Specialized in SAP FICO and digital finance transformation, helping CFO organizations modernize financial operations." },
];

const About = () => {
  return (
    <Layout>
      <section className="gradient-hero section-padding pt-32">
        <div className="container-wide mx-auto">
          <motion.h1
            className="font-heading text-4xl md:text-5xl font-bold text-primary-foreground mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            About CBS Consulting
          </motion.h1>
          <motion.p
            className="text-primary-foreground/80 text-lg max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            A premier IT consulting firm specialized in SAP transformation, S/4HANA implementation, and professional SAP training.
          </motion.p>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-narrow mx-auto">
          <motion.div
            className="prose prose-lg max-w-none text-muted-foreground mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-lg leading-relaxed">
              CBS Consulting was founded with a clear mission: to help enterprises navigate the complex landscape of SAP transformation with confidence. Our team of senior SAP consultants brings decades of combined experience in S/4HANA implementations, ECC migrations, and enterprise digital transformation.
            </p>
            <p className="text-lg leading-relaxed mt-4">
              We specialize in finance and ERP transformation, working closely with CIOs, CFOs, and SAP program directors to deliver measurable business value. Our integrated approach combines strategic consulting with hands-on implementation expertise and professional training programs to ensure lasting transformation success.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                className="flex gap-4 p-6 rounded-xl bg-card border border-border card-shadow"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <v.icon className="text-accent shrink-0 mt-1" size={24} />
                <div>
                  <h3 className="font-heading font-semibold text-foreground mb-2">{v.title}</h3>
                  <p className="text-muted-foreground text-sm">{v.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <ContactFormSection />
    </Layout>
  );
};

export default About;
