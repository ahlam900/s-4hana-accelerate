import { motion } from "framer-motion";
import { Shield, Users, Award, TrendingUp, CheckCircle2, Clock } from "lucide-react";

const reasons = [
  { icon: Shield, title: "Certified SAP Expertise", desc: "Our consultants hold the highest SAP certifications with deep S/4HANA specialization." },
  { icon: Users, title: "200+ Senior Consultants", desc: "A global team of experienced SAP professionals with enterprise-grade delivery track records." },
  { icon: Award, title: "Proven Methodology", desc: "Battle-tested implementation frameworks refined across 500+ SAP projects." },
  { icon: TrendingUp, title: "Finance Transformation", desc: "Specialized in SAP FICO and digital finance transformation for CFO organizations." },
  { icon: CheckCircle2, title: "End-to-End Delivery", desc: "From strategy through go-live and support — complete SAP transformation lifecycle coverage." },
  { icon: Clock, title: "Accelerated Timelines", desc: "Pre-built accelerators and templates that reduce implementation timelines by up to 40%." },
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
              Your Trusted SAP Transformation Partner
            </motion.h2>
            <motion.p
              className="text-muted-foreground leading-relaxed mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              CBS Consulting combines deep SAP technical expertise with strategic business acumen to deliver transformational outcomes for global enterprises. We don't just implement technology — we drive business value.
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
