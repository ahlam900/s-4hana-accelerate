import Layout from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import NewsletterSection from "@/components/sections/NewsletterSection";

const posts = [
  { title: "5 Critical Success Factors for SAP S/4HANA Migration", excerpt: "Learn the key considerations that determine the success of your ECC to S/4HANA conversion project.", date: "March 2026", category: "SAP Transformation" },
  { title: "The CFO's Guide to SAP Finance Transformation", excerpt: "How modern CFO organizations are leveraging SAP S/4HANA to transform financial operations and reporting.", date: "February 2026", category: "Finance" },
  { title: "Brownfield vs Greenfield: Choosing Your S/4HANA Path", excerpt: "A comprehensive comparison of migration approaches and when each strategy makes sense for your enterprise.", date: "January 2026", category: "Migration Strategy" },
  { title: "Building Your SAP Talent Pipeline in 2026", excerpt: "Strategies for developing internal SAP expertise through structured training and certification programs.", date: "January 2026", category: "Training" },
  { title: "Change Management in SAP Transformations", excerpt: "Why organizational change management is the most critical — and often overlooked — component of SAP projects.", date: "December 2025", category: "Change Management" },
  { title: "SAP Analytics: Unlocking Real-Time Insights", excerpt: "How SAP Embedded Analytics and SAP Analytics Cloud are transforming enterprise decision-making.", date: "November 2025", category: "Analytics" },
];

const Blog = () => {
  return (
    <Layout>
      <section className="gradient-hero section-padding pt-32">
        <div className="container-wide mx-auto">
          <motion.h1
            className="font-heading text-4xl md:text-5xl font-bold text-primary-foreground mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            SAP Insights & Resources
          </motion.h1>
          <motion.p
            className="text-primary-foreground/80 text-lg max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            Expert perspectives on SAP transformation, S/4HANA implementation, and enterprise digital strategy.
          </motion.p>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-wide mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, i) => (
              <motion.article
                key={post.title}
                className="bg-card rounded-xl border border-border card-shadow hover:card-shadow-hover transition-all duration-300 overflow-hidden group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
              >
                <div className="h-2 gradient-accent" />
                <div className="p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-xs font-medium px-2 py-1 rounded-full bg-accent/10 text-accent">{post.category}</span>
                    <span className="text-xs text-muted-foreground">{post.date}</span>
                  </div>
                  <h3 className="font-heading text-lg font-semibold text-foreground mb-3 group-hover:text-accent transition-colors">{post.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4">{post.excerpt}</p>
                  <span className="inline-flex items-center gap-1 text-sm font-medium text-accent">
                    Read More <ArrowRight size={14} />
                  </span>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <NewsletterSection />
    </Layout>
  );
};

export default Blog;
