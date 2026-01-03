import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About Us", href: "#about" },
  { label: "Programs", href: "#programs" },
  { label: "Leadership", href: "#leadership" },
  { label: "News", href: "#news" },
  { label: "Contact", href: "#contact" },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <img 
              src={logo} 
              alt="Hadin Kai Community Logo - Together we build, Together we benefit" 
              className="w-14 h-14 rounded-full object-cover"
            />
            <div className="hidden sm:block">
              <h1 className="font-heading font-semibold text-lg text-foreground leading-tight">
                Hadin Kai
              </h1>
              <p className="text-xs text-muted-foreground">Together We Build</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollToSection(link.href)}
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors duration-200"
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Button
              onClick={() => scrollToSection("#contact")}
              className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-semibold"
            >
              Join Us
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-border animate-fade-in">
            <nav className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollToSection(link.href)}
                  className="text-left px-4 py-3 text-foreground hover:bg-muted rounded-lg transition-colors"
                >
                  {link.label}
                </button>
              ))}
              <Button
                onClick={() => scrollToSection("#contact")}
                className="mt-2 mx-4 bg-secondary hover:bg-secondary/90 text-secondary-foreground"
              >
                Join Us
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
