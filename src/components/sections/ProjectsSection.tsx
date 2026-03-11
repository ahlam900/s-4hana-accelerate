import { motion } from "framer-motion";
import { Building2, Zap, Factory } from "lucide-react";

const projects = [
  {
    icon: Zap,
    sector: "Energy Sector",
    title: "S/4HANA Finance Transformation",
    scope: "Migration from SAP ECC to SAP S/4HANA",
    modules: "SAP FICO, SAP MM",
    detail: "Finance transformation and reporting optimization",
    outcome: "Modernized financial architecture and improved financial closing process",
  },
  {
    icon: Building2,
    sector: "Utilities Industry",
    title: "S/4HANA Implementation",
    scope: "Greenfield SAP S/4HANA implementation",
    modules: "SAP FICO, SAP PM",
    detail: "Integration with SAP Analytics and reporting systems",
    outcome: "Enterprise ERP modernization and improved operational efficiency",
  },
  {
    icon: Factory,
    sector: "Manufacturing",
    title: "ECC to S/4HANA Migration",
    scope: "Brownfield conversion from ECC to S/4HANA",
    modules: "SAP FICO, SAP SD, SAP MM",
    detail: "End-to-end brownfield conversion strategy",
    outcome: "Simplified finance architecture and improved system performance",
  },
];

const ProjectsSection = () => {
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
            Proven Track Record
          </span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
            Recent SAP Transformation Projects
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            CBS Consulting has delivered complex SAP S/4HANA transformation projects across industries, helping enterprises modernize their ERP landscape.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              className="bg-card rounded-xl border border-border card-shadow overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <div className="p-1.5">
                <div className="bg-primary/5 rounded-lg p-5 mb-0">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                      <project.icon className="text-accent" size={20} />
                    </div>
                    <span className="text-xs font-medium text-accent uppercase tracking-wider">{project.sector}</span>
                  </div>
                  <h3 className="font-heading text-lg font-semibold text-foreground mb-3">{project.title}</h3>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <p>{project.scope}</p>
                    <p><span className="font-medium text-foreground">Modules:</span> {project.modules}</p>
                    <p>{project.detail}</p>
                  </div>
                </div>
              </div>
              <div className="px-6 pb-6 pt-4 border-t border-border">
                <p className="text-sm">
                  <span className="font-medium text-foreground">Outcome: </span>
                  <span className="text-muted-foreground">{project.outcome}</span>
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
