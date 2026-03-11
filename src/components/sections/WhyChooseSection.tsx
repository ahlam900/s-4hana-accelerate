import { motion } from "framer-motion";
import { Shield, Globe, Award, TrendingUp, CheckCircle2, Users } from "lucide-react";

const reasons = [
  { icon: Shield, title: "SAP S/4HANA Transformation Specialists", desc: "Focused exclusively on SAP S/4HANA implementations, ECC migrations, and enterprise ERP modernization." },
  { icon: TrendingUp, title: "Deep SAP Finance Expertise", desc: "Specialized in SAP FICO and finance transformation for CFO organizations and enterprise finance departments." },
  { icon: Users, title: "Senior SAP Consultants", desc: "Our team consists of experienced SAP professionals with proven delivery track records across complex enterprise projects." },
  { icon: Award, title: "Proven SAP Implementation Methodology", desc: "Battle-tested frameworks and accelerators refined across 50+ SAP S/4HANA transformation projects." },
  { icon: CheckCircle2, title: "End-to-End ERP Transformation Support", desc: "From strategy and architecture through go-live and post-implementation support — complete SAP transformation lifecycle." },
  { icon: Globe, title: "International SAP Consulting Experience", desc: "Global delivery expertise across industries and geographies, supporting multinational ERP transformation programs." },
];

const WhyChooseSection = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-wide mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <motion.span
              className="inline-block px-3 py-1 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              Why CBS Consulting
            </motion.span>
            <motion.h2
              className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Why Enterprises Choose CBS Consulting
            </motion.h2>
            <motion.p
              className="text-muted-foreground leading-relaxed mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              CBS Consulting combines deep SAP S/4HANA expertise with strategic finance transformation experience to deliver measurable outcomes for global enterprises. We are your trusted partner for SAP transformation and SAP consulting talent development.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {reasons.map((reason, i) => (
              <motion.div
                key={reason.title}
                className="flex gap-3 p-4 rounded-lg bg-card border border-border card-shadow"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <reason.icon className="text-accent shrink-0 mt-0.5" size={20} />
                <div>
                  <h4 className="font-heading font-semibold text-sm text-foreground mb-1">{reason.title}</h4>
                  <p className="text-xs text-muted-foreground leading-relaxed">{reason.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
