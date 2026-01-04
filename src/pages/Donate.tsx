import { Heart, GraduationCap, Users, Home, ArrowRight, Shield } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const donationAreas = [
  {
    icon: GraduationCap,
    title: "Youth Education Fund",
    description: "Support scholarships, study materials, and educational workshops for young community members.",
  },
  {
    icon: Users,
    title: "Community Welfare",
    description: "Help families in need with emergency assistance, food support, and essential services.",
  },
  {
    icon: Home,
    title: "Community Development",
    description: "Contribute to community facilities, events infrastructure, and cultural preservation projects.",
  },
  {
    icon: Heart,
    title: "General Fund",
    description: "Support our ongoing community programs and operational costs to keep serving our members.",
  },
];

const Donate = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-br from-primary/10 to-secondary/10">
          <div className="container mx-auto px-4 text-center">
            <span className="text-secondary font-semibold text-sm uppercase tracking-wider">
              Support Our Community
            </span>
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground mt-3 mb-4">
              Make a Donation
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Your generous contributions help us continue our mission of unity, cultural 
              preservation, and community empowerment. Every donation makes a difference.
            </p>
          </div>
        </section>

        {/* Donation Areas */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-8 text-center">
              Where Your Donation Goes
            </h2>
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {donationAreas.map((area, index) => (
                <Card key={index} className="border-border bg-card hover-lift">
                  <CardHeader className="pb-3">
                    <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center mb-3">
                      <area.icon className="w-6 h-6 text-secondary" />
                    </div>
                    <CardTitle className="font-heading text-lg text-foreground">
                      {area.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-muted-foreground">
                      {area.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* How to Donate */}
        <section className="py-16 bg-card">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-8">
                How to Donate
              </h2>
              <div className="p-8 rounded-2xl bg-background border border-border">
                <Heart className="w-12 h-12 text-secondary mx-auto mb-4" />
                <p className="text-muted-foreground mb-6">
                  To make a donation to Hadin Kai Community, please contact us directly. 
                  We will provide you with the appropriate payment details and ensure your 
                  contribution is directed to your chosen cause.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <a 
                    href="mailto:Hadinkai2024@gmail.com?subject=Donation%20Inquiry"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-secondary text-secondary-foreground font-semibold hover:bg-secondary/90 transition-colors"
                  >
                    Contact to Donate
                    <ArrowRight className="w-4 h-4" />
                  </a>
                  <a 
                    href="tel:+447564499627"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border-2 border-secondary text-secondary font-semibold hover:bg-secondary/10 transition-colors"
                  >
                    Call: +44 7564 499627
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Trust Badge */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center">
              <div className="inline-flex items-center gap-3 px-6 py-4 rounded-xl bg-primary/5 border border-primary/20">
                <Shield className="w-6 h-6 text-primary" />
                <p className="text-foreground">
                  <span className="font-semibold">Your Trust Matters:</span>{" "}
                  <span className="text-muted-foreground">
                    All donations are managed transparently and reported at our Annual General Meetings.
                  </span>
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Donate;
