import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, GraduationCap, Briefcase } from "lucide-react";

const topics = [
  "Financial Accounting configuration",
  "Controlling processes",
  "S/4HANA Finance architecture",
  "SAP project methodology",
  "Business process integration",
];

const careers = [
  "SAP Functional Consultant",
  "SAP Finance Consultant",
  "ERP Transformation Specialist",
];

const BecomeConsultantSection = () => {
  return (
    <section className="section-padding bg-muted">
      <div className="container-wide mx-auto">
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="inline-block px-3 py-1 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
            SAP Training Academy
          </span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
            Become an SAP Consultant
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Launch your career in SAP consulting with our professional training programs designed for the S/4HANA era.
          </p>
        </motion.div>

        <motion.div
          className="max-w-4xl mx-auto bg-card rounded-2xl border border-border card-shadow overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="gradient-hero p-8 md:p-10">
            <div className="flex items-center gap-3 mb-3">
              <GraduationCap className="text-accent-foreground" size={28} />
              <span className="text-accent-foreground/80 text-sm font-medium uppercase tracking-wider">Featured Program</span>
            </div>
            <h3 className="font-heading text-2xl md:text-3xl font-bold text-primary-foreground mb-2">
              SAP FICO Consultant Program
            </h3>
            <p className="text-primary-foreground/70 text-lg">70 Hours · Professional Certification Track</p>
          </div>

          <div className="p-8 md:p-10">
            <p className="text-muted-foreground leading-relaxed mb-8">
              Professional SAP training program designed to prepare future SAP consultants and finance professionals to work in SAP S/4HANA environments.
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <h4 className="font-heading font-semibold text-foreground mb-4 flex items-center gap-2">
                  <CheckCircle2 className="text-accent" size={18} /> Program Topics
                </h4>
                <ul className="space-y-3">
                  {topics.map((t) => (
                    <li key={t} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="font-heading font-semibold text-foreground mb-4 flex items-center gap-2">
                  <Briefcase className="text-accent" size={18} /> Career Outcomes
                </h4>
                <ul className="space-y-3">
                  {careers.map((c) => (
                    <li key={c} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                      {c}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <Button variant="hero" size="lg" asChild>
              <Link to="/contact">
                Enroll in SAP Training <ArrowRight className="ml-1" size={18} />
              </Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BecomeConsultantSection;
