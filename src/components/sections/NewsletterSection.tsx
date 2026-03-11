import { motion } from "framer-motion";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";

const NewsletterSection = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    toast.success("Subscribed! You'll receive our latest SAP insights.");
    setEmail("");
  };

  return (
    <section className="section-padding gradient-hero">
      <div className="container-narrow mx-auto text-center">
        <motion.h2
          className="font-heading text-3xl md:text-4xl font-bold text-primary-foreground mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Stay Ahead in SAP Transformation
        </motion.h2>
        <motion.p
          className="text-primary-foreground/70 mb-8 max-w-lg mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          Subscribe to our newsletter for expert SAP insights, whitepapers, and training updates.
        </motion.p>
        <motion.form
          className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <Input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="your@email.com"
            className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/40"
            maxLength={255}
          />
          <Button variant="hero" type="submit">Subscribe</Button>
        </motion.form>
      </div>
    </section>
  );
};

export default NewsletterSection;
