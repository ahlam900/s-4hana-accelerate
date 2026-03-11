import { motion } from "framer-motion";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { Send, Mail, Phone, Linkedin } from "lucide-react";

const ContactFormSection = () => {
  const [form, setForm] = useState({ name: "", email: "", company: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      toast.error("Please fill in all required fields.");
      return;
    }
    toast.success("Thank you! We'll be in touch shortly.");
    setForm({ name: "", email: "", company: "", message: "" });
  };

  return (
    <section className="section-padding bg-muted" id="contact">
      <div className="container-wide mx-auto">
        <div className="grid lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="inline-block px-3 py-1 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
              Get Started
            </span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
              Request a Consultation
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Whether you're planning an SAP S/4HANA implementation, exploring training programs, or need strategic transformation advisory — our experts are here to help.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-foreground">
                <Mail className="text-accent" size={18} />
                <span className="text-sm">info@cbsconsulting.com</span>
              </div>
              <div className="flex items-center gap-3 text-foreground">
                <Phone className="text-accent" size={18} />
                <span className="text-sm">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-3 text-foreground">
                <Linkedin className="text-accent" size={18} />
                <span className="text-sm">CBS Consulting on LinkedIn</span>
              </div>
            </div>
          </motion.div>

          <motion.form
            className="bg-card rounded-xl p-8 card-shadow border border-border"
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <div className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-foreground mb-1.5 block">Full Name *</label>
                  <Input
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="John Doe"
                    maxLength={100}
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-1.5 block">Work Email *</label>
                  <Input
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="john@company.com"
                    maxLength={255}
                  />
                </div>
              </div>
              <div>
                <label className="text-sm font-medium text-foreground mb-1.5 block">Company</label>
                <Input
                  value={form.company}
                  onChange={(e) => setForm({ ...form, company: e.target.value })}
                  placeholder="Company Name"
                  maxLength={100}
                />
              </div>
              <div>
                <label className="text-sm font-medium text-foreground mb-1.5 block">How can we help? *</label>
                <Textarea
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="Tell us about your SAP transformation needs..."
                  rows={4}
                  maxLength={1000}
                />
              </div>
              <Button type="submit" variant="hero" className="w-full" size="lg">
                <Send size={16} className="mr-2" /> Send Request
              </Button>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default ContactFormSection;
