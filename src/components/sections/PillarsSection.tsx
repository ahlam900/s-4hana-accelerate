import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Settings, GraduationCap, Building2, ArrowRight } from "lucide-react";

const pillars = [
  {
    icon: Settings,
    title: "SAP Transformation Consulting",
    description: "End-to-end SAP S/4HANA implementations, ECC migrations, system optimization, and digital finance transformation for enterprise clients.",
    link: "/sap-consulting",
    features: ["S/4HANA Implementation", "ECC Migration", "SAP Optimization"],
  },
  {
    icon: GraduationCap,
    title: "SAP Training Academy",
    description: "Professional SAP training programs designed to prepare future SAP consultants and corporate teams for S/4HANA environments.",
    link: "/training",
    features: ["SAP FICO Training", "Logistics Modules", "Certification Prep"],
  },
  {
    icon: Building2,
    title: "Corporate Transformation",
    description: "Strategic transformation programs for companies undergoing large-scale ERP transformation and finance digitalization.",
    link: "/corporate-programs",
    features: ["Transformation Strategy", "Change Management", "Program Governance"],
  },
];

const PillarsSection = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-wide mx-auto">
        <div className="text-center mb-16">
          <motion.span
            className="inline-block px-3 py-1 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Our Core Pillars
          </motion.span>
          <motion.h2
            className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Comprehensive SAP Excellence
          </motion.h2>
          <motion.p
            className="text-muted-foreground max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Three integrated pillars delivering end-to-end SAP transformation and talent development.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pillars.map((pillar, i) => (
            <motion.div
              key={pillar.title}
              className="group bg-card rounded-xl p-8 card-shadow hover:card-shadow-hover transition-all duration-300 border border-border hover:border-accent/30"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
            >
              <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-5 group-hover:bg-accent/20 transition-colors">
                <pillar.icon className="text-accent" size={24} />
              </div>
              <h3 className="font-heading text-xl font-semibold text-foreground mb-3">{pillar.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-5">{pillar.description}</p>
              <ul className="space-y-2 mb-6">
                {pillar.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-foreground">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                    {f}
                  </li>
                ))}
              </ul>
              <Link
                to={pillar.link}
                className="inline-flex items-center gap-1 text-sm font-medium text-accent hover:text-electric-light transition-colors"
              >
                Learn More <ArrowRight size={14} />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PillarsSection;
