import { Calendar, GraduationCap, HandHeart, Globe, Music, Users } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const programs = [
  {
    icon: Music,
    title: "Cultural Events & Celebrations",
    description: "Annual festivals, Eid celebrations, cultural showcases, and traditional ceremonies that bring our community together.",
    color: "text-secondary",
    bgColor: "bg-secondary/10",
  },
  {
    icon: GraduationCap,
    title: "Youth Development Initiatives",
    description: "Educational workshops, mentorship programs, skills training, and leadership development for our young people.",
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
  {
    icon: HandHeart,
    title: "Community Support Programmes",
    description: "Welfare assistance, family support services, crisis intervention, and community outreach initiatives.",
    color: "text-accent",
    bgColor: "bg-accent/10",
  },
  {
    icon: GraduationCap,
    title: "Educational & Empowerment Projects",
    description: "Scholarships, study circles, career guidance, and professional development opportunities.",
    color: "text-forest-light",
    bgColor: "bg-primary/10",
  },
  {
    icon: Globe,
    title: "Diaspora Engagement",
    description: "Partnerships with communities in Nigeria and across the UK, cultural exchanges, and homeland development projects.",
    color: "text-secondary",
    bgColor: "bg-secondary/10",
  },
  {
    icon: Users,
    title: "Social Gatherings",
    description: "Regular community meetings, networking events, family days, and recreational activities for all ages.",
    color: "text-accent",
    bgColor: "bg-accent/10",
  },
];

const Programs = () => {
  return (
    <section id="programs" className="py-24 bg-background pattern-cultural">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-secondary font-semibold text-sm uppercase tracking-wider">
            Programs & Activities
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-3 mb-4">
            What We Do
          </h2>
          <div className="section-divider mb-6" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover the diverse range of programs and activities that strengthen our community bonds 
            and create positive impact.
          </p>
        </div>

        {/* Programs Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {programs.map((program, index) => (
            <Card
              key={program.title}
              className="group border-border bg-card/80 backdrop-blur-sm hover-lift overflow-hidden"
            >
              <CardHeader className="pb-4">
                <div className={`w-14 h-14 rounded-xl ${program.bgColor} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <program.icon className={`w-7 h-7 ${program.color}`} />
                </div>
                <CardTitle className="font-heading text-xl text-foreground">
                  {program.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {program.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-3 px-6 py-4 rounded-xl bg-primary/5 border border-primary/20">
            <Calendar className="w-5 h-5 text-primary" />
            <p className="text-foreground">
              <span className="font-semibold">Interested in participating?</span>
              <span className="text-muted-foreground"> Contact us to learn about upcoming events and activities.</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Programs;
