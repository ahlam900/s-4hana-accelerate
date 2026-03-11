import { motion } from "framer-motion";

const IntroSection = () => {
  return (
    <section className="section-padding bg-card">
      <div className="container-narrow mx-auto text-center">
        <motion.span
          className="inline-block px-3 py-1 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          About CBS Consulting
        </motion.span>
        <motion.h2
          className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Empowering Enterprises Through SAP Innovation
        </motion.h2>
        <motion.p
          className="text-muted-foreground text-lg leading-relaxed max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          CBS Consulting is a premier IT consulting firm specialized in SAP transformation and professional SAP training. With deep expertise in SAP S/4HANA implementations, ECC to S/4HANA migrations, and enterprise digital transformation, we partner with leading organizations to modernize their ERP landscape and build world-class SAP talent.
        </motion.p>
      </div>
    </section>
  );
};

export default IntroSection;
