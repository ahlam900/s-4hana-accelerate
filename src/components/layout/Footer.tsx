import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="gradient-hero text-primary-foreground">
      <div className="container-wide mx-auto px-4 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-md bg-accent flex items-center justify-center">
                <span className="text-accent-foreground font-heading font-bold text-sm">CBS</span>
              </div>
              <span className="font-heading font-bold text-lg">CBS Consulting</span>
            </div>
            <p className="text-primary-foreground/70 text-sm leading-relaxed">
              Enterprise SAP transformation consulting and professional SAP training academy. Trusted by leading organizations worldwide.
            </p>
          </div>

          <div>
            <h4 className="font-heading font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/70">
              <li><Link to="/sap-consulting" className="hover:text-primary-foreground transition-colors">SAP S/4HANA Implementation</Link></li>
              <li><Link to="/sap-consulting" className="hover:text-primary-foreground transition-colors">ECC to S/4HANA Migration</Link></li>
              <li><Link to="/training" className="hover:text-primary-foreground transition-colors">SAP Training Academy</Link></li>
              <li><Link to="/corporate-programs" className="hover:text-primary-foreground transition-colors">Corporate Programs</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/70">
              <li><Link to="/about" className="hover:text-primary-foreground transition-colors">About Us</Link></li>
              <li><Link to="/industries" className="hover:text-primary-foreground transition-colors">Industries</Link></li>
              <li><Link to="/blog" className="hover:text-primary-foreground transition-colors">Blog & Insights</Link></li>
              <li><Link to="/contact" className="hover:text-primary-foreground transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/70">
              <li>info@cbsconsulting.com</li>
              <li>+1 (555) 123-4567</li>
              <li>LinkedIn: CBS Consulting</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-primary-foreground/50">
          <p>&copy; {new Date().getFullYear()} CBS Consulting. All rights reserved.</p>
          <div className="flex gap-6">
            <span className="hover:text-primary-foreground cursor-pointer transition-colors">Privacy Policy</span>
            <span className="hover:text-primary-foreground cursor-pointer transition-colors">Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
