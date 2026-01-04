import { Heart, Users, Calendar, BookOpen, ArrowRight, CheckCircle } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const volunteerOpportunities = [
  {
    icon: Users,
    title: "Event Support",
    description: "Help organize and run community events, cultural celebrations, and social gatherings.",
    commitment: "Flexible - per event basis",
  },
  {
    icon: BookOpen,
    title: "Youth Mentorship",
    description: "Share your experience and guide young community members in their educational and career journeys.",
    commitment: "2-4 hours per month",
  },
  {
    icon: Calendar,
    title: "Administrative Support",
    description: "Assist with community communications, record keeping, and organizational tasks.",
    commitment: "4-6 hours per month",
  },
  {
    icon: Heart,
    title: "Welfare Visiting",
    description: "Visit elderly and unwell community members to provide companionship and support.",
    commitment: "Flexible - as needed",
  },
];

const benefits = [
  "Make a meaningful impact in your community",
  "Develop new skills and gain experience",
  "Build lasting friendships and connections",
  "Preserve and celebrate our cultural heritage",
  "Create a better future for our youth",
  "Receive recognition for your contributions",
];

const Volunteer = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-br from-primary/10 to-secondary/10">
          <div className="container mx-auto px-4 text-center">
            <span className="text-secondary font-semibold text-sm uppercase tracking-wider">
              Get Involved
            </span>
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground mt-3 mb-4">
              Volunteer With Us
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Join our dedicated team of volunteers and make a lasting difference in the 
              Hadin Kai Community. Your time and skills are invaluable.
            </p>
          </div>
        </section>

        {/* Opportunities */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-8 text-center">
              Volunteer Opportunities
            </h2>
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {volunteerOpportunities.map((opportunity, index) => (
                <Card key={index} className="border-border bg-card hover-lift">
                  <CardHeader className="pb-3">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-3">
                      <opportunity.icon className="w-6 h-6 text-primary" />
                    </div>
                    <CardTitle className="font-heading text-lg text-foreground">
                      {opportunity.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-muted-foreground mb-3">
                      {opportunity.description}
                    </CardDescription>
                    <p className="text-sm font-medium text-secondary">
                      Time commitment: {opportunity.commitment}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-16 bg-card">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-8 text-center">
                Why Volunteer?
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3 p-4 rounded-lg bg-background">
                    <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Sign Up CTA */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto p-8 rounded-2xl bg-gradient-to-r from-primary/10 to-secondary/10 border border-border text-center">
              <Heart className="w-10 h-10 text-secondary mx-auto mb-4" />
              <h3 className="font-heading text-xl font-semibold text-foreground mb-2">
                Ready to Make a Difference?
              </h3>
              <p className="text-muted-foreground mb-6">
                Contact us to learn more about volunteer opportunities and how you can contribute 
                to our community.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a 
                  href="mailto:Hadinkai2024@gmail.com?subject=Volunteer%20Inquiry"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-colors"
                >
                  Email Us
                  <ArrowRight className="w-4 h-4" />
                </a>
                <a 
                  href="tel:+447564499627"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border-2 border-primary text-primary font-semibold hover:bg-primary/10 transition-colors"
                >
                  Call: +44 7564 499627
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Volunteer;
