import { Calendar, GraduationCap, HandHeart, Globe, Music, Users } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import youthStudy from "@/assets/youth-study.jpg";
import youthGathering from "@/assets/youth-gathering.jpg";
import sarkinCeremony from "@/assets/sarkin-ceremony.jpg";
import youthSession from "@/assets/youth-session.jpg";
import sarkinWithLeader from "@/assets/sarkin-with-leader.jpg";
import communityMeeting from "@/assets/community-meeting.jpg";
import communityGathering from "@/assets/community-gathering.jpg";

const programs = [
  {
    icon: Music,
    title: "Cultural Events & Celebrations",
    description: "Annual festivals, Eid celebrations, cultural showcases, and traditional ceremonies that bring our community together.",
    color: "text-secondary",
    bgColor: "bg-secondary/10",
    image: sarkinCeremony,
    imageAlt: "Traditional cultural ceremony with community leaders",
  },
  {
    icon: GraduationCap,
    title: "Youth Development Initiatives",
    description: "Educational workshops, mentorship programs, skills training, and leadership development for our young people.",
    color: "text-primary",
    bgColor: "bg-primary/10",
    image: youthStudy,
    imageAlt: "Youth education programme with students learning together",
  },
  {
    icon: HandHeart,
    title: "Community Support Programmes",
    description: "Welfare assistance, family support services, crisis intervention, and community outreach initiatives.",
    color: "text-accent",
    bgColor: "bg-accent/10",
    image: communityGathering,
    imageAlt: "Community members gathering for support and fellowship",
  },
  {
    icon: GraduationCap,
    title: "Educational & Empowerment Projects",
    description: "Scholarships, study circles, career guidance, and professional development opportunities.",
    color: "text-forest-light",
    bgColor: "bg-primary/10",
    image: youthSession,
    imageAlt: "Youth study session with learning materials",
  },
  {
    icon: Globe,
    title: "Diaspora Engagement",
    description: "Partnerships with communities in Nigeria and across the UK, cultural exchanges, and homeland development projects.",
    color: "text-secondary",
    bgColor: "bg-secondary/10",
    image: sarkinWithLeader,
    imageAlt: "Community leaders strengthening diaspora partnerships",
  },
  {
    icon: Users,
    title: "Social Gatherings",
    description: "Regular community meetings, networking events, family days, and recreational activities for all ages.",
    color: "text-accent",
    bgColor: "bg-accent/10",
    image: communityMeeting,
    imageAlt: "Community meeting with members engaged in discussion",
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

        {/* Youth Programs Image Gallery */}
        <div className="mb-16">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="relative rounded-2xl overflow-hidden shadow-card aspect-video">
              <img 
                src={youthStudy} 
                alt="Youth education and study program at Hadin Kai Community" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <h4 className="font-heading text-lg font-semibold text-primary-foreground">Youth Education</h4>
                <p className="text-primary-foreground/80 text-sm">Empowering the next generation through learning</p>
              </div>
            </div>
            <div className="relative rounded-2xl overflow-hidden shadow-card aspect-video">
              <img 
                src={youthGathering} 
                alt="Youth gathering and community session at Hadin Kai Community" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <h4 className="font-heading text-lg font-semibold text-primary-foreground">Community Sessions</h4>
                <p className="text-primary-foreground/80 text-sm">Building bonds across generations</p>
              </div>
            </div>
          </div>
        </div>

        {/* Programs Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {programs.map((program, index) => (
            <Card
              key={program.title}
              className="group border-border bg-card/80 backdrop-blur-sm hover-lift overflow-hidden"
            >
              <div className="relative h-40 overflow-hidden">
                <img
                  src={program.image}
                  alt={program.imageAlt}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/10 to-transparent" />
              </div>
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
