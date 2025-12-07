import { Crown, Heart } from "lucide-react";

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
              <div className="w-12 h-12 rounded-full bg-primary-foreground/10 flex items-center justify-center">
                <Crown className="w-6 h-6 text-secondary" />
              </div>
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
              <span className="text-primary-foreground italic">Strength in Unity</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {["Home", "About Us", "Programs", "Leadership", "News", "Contact"].map((link) => (
                <li key={link}>
                  <button
                    onClick={() => scrollToSection(`#${link.toLowerCase().replace(" ", "-").replace("about-us", "about")}`)}
                    className="text-primary-foreground/70 hover:text-secondary transition-colors"
                  >
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Community */}
          <div>
            <h4 className="font-heading text-lg font-semibold mb-4">Community</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-primary-foreground/70 hover:text-secondary transition-colors">
                  Become a Member
                </a>
              </li>
              <li>
                <a href="#" className="text-primary-foreground/70 hover:text-secondary transition-colors">
                  Volunteer With Us
                </a>
              </li>
              <li>
                <a href="#" className="text-primary-foreground/70 hover:text-secondary transition-colors">
                  Donate
                </a>
              </li>
              <li>
                <a href="#" className="text-primary-foreground/70 hover:text-secondary transition-colors">
                  Partner With Us
                </a>
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
            <p className="flex items-center gap-1 text-primary-foreground/60">
              Made with <Heart className="w-4 h-4 text-accent fill-current" /> for our community
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
