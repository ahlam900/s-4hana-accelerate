import Layout from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { Send, Mail, Phone, Linkedin, MapPin } from "lucide-react";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", company: "", type: "consultation", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      toast.error("Please fill in all required fields.");
      return;
    }
    toast.success("Thank you! We'll be in touch within 24 hours.");
    setForm({ name: "", email: "", company: "", type: "consultation", message: "" });
  };

  return (
    <Layout>
      <section className="gradient-hero section-padding pt-32">
        <div className="container-wide mx-auto">
          <motion.h1
            className="font-heading text-4xl md:text-5xl font-bold text-primary-foreground mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Get in Touch
          </motion.h1>
          <motion.p
            className="text-primary-foreground/80 text-lg max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            Ready to start your SAP transformation journey? Contact us for a consultation, training inquiry, or partnership discussion.
          </motion.p>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-wide mx-auto">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <motion.form
                className="bg-card rounded-xl p-8 card-shadow border border-border"
                onSubmit={handleSubmit}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <h2 className="font-heading text-2xl font-bold text-foreground mb-6">Send Us a Message</h2>
                <div className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium text-foreground mb-1.5 block">Full Name *</label>
                      <Input value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="John Doe" maxLength={100} />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-foreground mb-1.5 block">Work Email *</label>
                      <Input type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="john@company.com" maxLength={255} />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium text-foreground mb-1.5 block">Company</label>
                      <Input value={form.company} onChange={(e) => setForm({ ...form, company: e.target.value })} placeholder="Company Name" maxLength={100} />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-foreground mb-1.5 block">Inquiry Type</label>
                      <select
                        value={form.type}
                        onChange={(e) => setForm({ ...form, type: e.target.value })}
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                      >
                        <option value="consultation">Consultation Request</option>
                        <option value="training">Training Inquiry</option>
                        <option value="partnership">Corporate Partnership</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-1.5 block">Message *</label>
                    <Textarea value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} placeholder="Tell us about your needs..." rows={5} maxLength={1000} />
                  </div>
                  <Button type="submit" variant="hero" className="w-full" size="lg">
                    <Send size={16} className="mr-2" /> Send Message
                  </Button>
                </div>
              </motion.form>
            </div>

            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <div>
                <h3 className="font-heading text-xl font-semibold text-foreground mb-4">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Mail className="text-accent mt-0.5" size={18} />
                    <div>
                      <p className="text-sm font-medium text-foreground">Email</p>
                      <p className="text-sm text-muted-foreground">info@cbsconsulting.com</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Phone className="text-accent mt-0.5" size={18} />
                    <div>
                      <p className="text-sm font-medium text-foreground">Phone</p>
                      <p className="text-sm text-muted-foreground">+1 (555) 123-4567</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Linkedin className="text-accent mt-0.5" size={18} />
                    <div>
                      <p className="text-sm font-medium text-foreground">LinkedIn</p>
                      <p className="text-sm text-muted-foreground">CBS Consulting</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <MapPin className="text-accent mt-0.5" size={18} />
                    <div>
                      <p className="text-sm font-medium text-foreground">Address</p>
                      <p className="text-sm text-muted-foreground">Global offices — Contact us for local details</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-muted rounded-xl p-6">
                <h4 className="font-heading font-semibold text-foreground mb-2">Response Time</h4>
                <p className="text-muted-foreground text-sm">We typically respond within 24 business hours. For urgent matters, please call us directly.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
