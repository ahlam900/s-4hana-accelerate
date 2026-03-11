import { motion } from "framer-motion";
import { Zap, Factory, ShoppingCart, Landmark, Building, Globe } from "lucide-react";

const industries = [
  { icon: Zap, name: "Energy" },
  { icon: Globe, name: "Utilities" },
  { icon: Factory, name: "Manufacturing" },
  { icon: ShoppingCart, name: "Retail" },
  { icon: Landmark, name: "Financial Services" },
  { icon: Building, name: "Public Sector" },
];

const IndustriesSection = () => {
  return (
    <section className="section-padding bg-muted">
      <div className="container-wide mx-auto">
        <div className="text-center mb-12">
          <motion.h2
            className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Industries We Serve
          </motion.h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Deep domain expertise across critical sectors driving SAP transformation.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {industries.map((ind, i) => (
            <motion.div
              key={ind.name}
              className="bg-card rounded-xl p-6 text-center card-shadow hover:card-shadow-hover transition-all duration-300 border border-border hover:border-accent/30"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
            >
              <ind.icon className="mx-auto text-accent mb-3" size={28} />
              <span className="text-sm font-medium text-foreground">{ind.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustriesSection;
