import { motion } from "framer-motion";
import { Landmark, BarChart3, FileText, Calculator, PieChart, TrendingUp, Database, ClipboardCheck } from "lucide-react";

const expertiseAreas = [
  { icon: Landmark, label: "SAP S/4HANA Finance" },
  { icon: FileText, label: "Universal Journal" },
  { icon: Database, label: "Central Finance" },
  { icon: Calculator, label: "Asset Accounting" },
  { icon: PieChart, label: "Controlling (CO)" },
  { icon: BarChart3, label: "Profitability Analysis" },
  { icon: ClipboardCheck, label: "Financial Closing Optimization" },
  { icon: TrendingUp, label: "Finance Data & Reporting Transformation" },
];

const FinanceExpertiseSection = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-wide mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="inline-block px-3 py-1 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
              SAP FICO Specialists
            </span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">
              SAP Finance Transformation Expertise
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              CBS Consulting has deep expertise in SAP Finance transformation projects supporting CFO organizations and finance departments undergoing ERP modernization.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Our senior consultants combine functional SAP FICO knowledge with strategic finance transformation experience to deliver measurable outcomes for enterprise clients.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {expertiseAreas.map((area, i) => (
              <motion.div
                key={area.label}
                className="flex items-center gap-3 p-4 rounded-lg bg-card border border-border card-shadow"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
              >
                <div className="w-9 h-9 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                  <area.icon className="text-accent" size={18} />
                </div>
                <span className="font-heading font-semibold text-sm text-foreground">{area.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinanceExpertiseSection;
