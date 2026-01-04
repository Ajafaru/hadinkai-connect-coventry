import { Heart, Mail, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "@/assets/logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <img 
                src={logo} 
                alt="Hadin Kai Community Logo" 
                className="w-20 h-20 object-contain bg-primary-foreground rounded-lg p-1"
              />
              <div>
                <h3 className="font-heading text-xl font-bold">Hadin Kai Community</h3>
                <p className="text-sm text-primary-foreground/70">Coventry</p>
              </div>
            </div>
            <p className="text-primary-foreground/80 max-w-md mb-6">
              A united community preserving our cultural heritage, empowering our youth, 
              and building a stronger future together under visionary leadership.
            </p>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-foreground/10 border border-primary-foreground/20">
              <span className="text-secondary font-semibold">Hadin Kai</span>
              <span className="text-primary-foreground/70">–</span>
              <span className="text-primary-foreground italic">Together We Build, Together We Benefit</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {["Home", "About", "Programs", "Leadership", "Gallery", "Contact"].map((link) => (
                <li key={link}>
                  <button
                    onClick={() => scrollToSection(`#${link.toLowerCase()}`)}
                    className="text-primary-foreground/70 hover:text-secondary transition-colors"
                  >
                    {link}
                  </button>
                </li>
              ))}
              <li>
                <Link 
                  to="/events" 
                  className="text-primary-foreground/70 hover:text-secondary transition-colors"
                >
                  Events
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact & Actions */}
          <div>
            <h4 className="font-heading text-lg font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li>
                <a 
                  href="mailto:Hadinkai2024@gmail.com" 
                  className="flex items-center gap-2 text-primary-foreground/70 hover:text-secondary transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  Hadinkai2024@gmail.com
                </a>
              </li>
              <li>
                <a 
                  href="tel:+447564499627" 
                  className="flex items-center gap-2 text-primary-foreground/70 hover:text-secondary transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  +44 7564 499627
                </a>
              </li>
              <li className="pt-4">
                <Link 
                  to="/volunteer" 
                  className="text-primary-foreground/70 hover:text-secondary transition-colors"
                >
                  Volunteer With Us
                </Link>
              </li>
              <li>
                <Link 
                  to="/donate" 
                  className="text-primary-foreground/70 hover:text-secondary transition-colors"
                >
                  Donate
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
            <p className="text-primary-foreground/60">
              © {currentYear} Hadin Kai Community – Coventry. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              <Link 
                to="/privacy" 
                className="text-primary-foreground/60 hover:text-secondary transition-colors"
              >
                Privacy Policy
              </Link>
              <Link 
                to="/terms" 
                className="text-primary-foreground/60 hover:text-secondary transition-colors"
              >
                Terms of Use
              </Link>
            </div>
            <p className="flex items-center gap-1 text-primary-foreground/60">
              Made with <Heart className="w-4 h-4 text-accent fill-current" aria-hidden="true" /> for our community
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
