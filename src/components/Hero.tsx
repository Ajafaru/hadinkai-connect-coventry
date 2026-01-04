import { ArrowRight, Users, Heart, Crown } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/community-lord-mayor.jpg";

const Hero = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="Hadin Kai Community members with His Highness Sarkin Zango Coventry and distinguished guests" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/80 to-primary/70" />
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-32 left-10 w-32 h-32 rounded-full bg-secondary/20 blur-3xl animate-float" />
      <div className="absolute bottom-32 right-10 w-48 h-48 rounded-full bg-secondary/30 blur-3xl animate-float" style={{ animationDelay: "1s" }} />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-foreground/10 border border-primary-foreground/20 mb-8 animate-fade-up backdrop-blur-sm">
            <Crown className="w-4 h-4 text-secondary" />
            <span className="text-sm font-medium text-primary-foreground">Together We Build • Together We Benefit</span>
          </div>

          {/* Main Heading */}
          <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-primary-foreground mb-6 animate-fade-up" style={{ animationDelay: "0.1s" }}>
            Hadin Kai Community
            <span className="block text-secondary mt-2">Coventry</span>
          </h1>

          {/* Tagline */}
          <p className="text-xl md:text-2xl text-primary-foreground/90 font-light mb-4 animate-fade-up" style={{ animationDelay: "0.2s" }}>
            Uniting Zango Diaspora in Coventry Through Culture, Education & Service
          </p>

          {/* Description */}
          <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto mb-10 animate-fade-up" style={{ animationDelay: "0.3s" }}>
            Led by His Highness, Alhaji Ali Umar Abass – Sarkin Zango Coventry, we preserve 
            our heritage, empower our youth, and strengthen community bonds across generations.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up" style={{ animationDelay: "0.4s" }}>
            <Button
              size="lg"
              onClick={() => scrollToSection("#about")}
              className="bg-secondary hover:bg-secondary/90 text-secondary-foreground px-8 py-6 text-lg font-semibold group"
            >
              Learn About Us
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollToSection("#programs")}
              className="border-2 border-primary-foreground/30 text-primary-foreground bg-primary-foreground/10 hover:bg-primary-foreground/20 px-8 py-6 text-lg font-semibold backdrop-blur-sm"
            >
              Join Our Activities
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-16 pt-12 border-t border-primary-foreground/20 animate-fade-up" style={{ animationDelay: "0.5s" }}>
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <Users className="w-6 h-6 text-secondary" />
              </div>
              <p className="text-2xl md:text-3xl font-heading font-bold text-primary-foreground">500+</p>
              <p className="text-sm text-primary-foreground/70">Community Members</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <Heart className="w-6 h-6 text-secondary" />
              </div>
              <p className="text-2xl md:text-3xl font-heading font-bold text-primary-foreground">15+</p>
              <p className="text-sm text-primary-foreground/70">Years of Service</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <Crown className="w-6 h-6 text-secondary" />
              </div>
              <p className="text-2xl md:text-3xl font-heading font-bold text-primary-foreground">50+</p>
              <p className="text-sm text-primary-foreground/70">Annual Events</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path
            d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            fill="hsl(var(--card))"
          />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
