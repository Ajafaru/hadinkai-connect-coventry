import { Calendar, Bell, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import youthSession from "@/assets/youth-session.jpg";
import communityGathering from "@/assets/community-gathering.jpg";
import sarkinCeremony from "@/assets/sarkin-ceremony.jpg";
import communityElders from "@/assets/community-elders.jpg";

const newsItems = [
  {
    category: "Announcement",
    date: "January 2026",
    title: "Annual General Meeting 2026",
    description: "All community members are invited to attend our Annual General Meeting on January 25th. We will review achievements and plan for the year ahead.",
    isNew: true,
    image: communityElders,
    imageAlt: "Community elders gathered for the annual general meeting",
  },
  {
    category: "Event",
    date: "February 2026",
    title: "Youth Leadership Workshop",
    description: "A special workshop for young community members focusing on leadership skills, career development, and cultural identity.",
    isNew: true,
    image: youthSession,
    imageAlt: "Youth leadership workshop with participants learning together",
  },
  {
    category: "Upcoming",
    date: "March 2026",
    title: "Eid ul-Fitr Celebration",
    description: "Join us for the blessed Eid ul-Fitr celebration with prayers, traditional food, and community fellowship. All families welcome.",
    isNew: true,
    image: communityGathering,
    imageAlt: "Community gathering for Eid celebrations and fellowship",
  },
  {
    category: "Community",
    date: "April 2026",
    title: "Cultural Heritage Day",
    description: "A day celebrating our rich Zango cultural heritage with traditional music, dance, food, and storytelling for all ages.",
    isNew: false,
    image: sarkinCeremony,
    imageAlt: "Cultural heritage celebration with traditional regalia and ceremony",
  },
];

const News = () => {
  return (
    <section id="news" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-secondary font-semibold text-sm uppercase tracking-wider">
            News & Announcements
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-3 mb-4">
            Stay Informed
          </h2>
          <div className="section-divider mb-6" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Keep up with the latest updates, events, and announcements from our community.
          </p>
        </div>

        {/* News Grid */}
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {newsItems.map((item, index) => (
            <Card
              key={index}
              className="group border-border bg-card hover-lift overflow-hidden cursor-pointer"
            >
              {item.image && (
                <div className="h-40 w-full overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.imageAlt}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
              )}
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between mb-2">
                  <Badge
                    variant="secondary"
                    className={`${
                      item.category === "Announcement"
                        ? "bg-primary/10 text-primary"
                        : item.category === "Event"
                        ? "bg-secondary/20 text-secondary"
                        : item.category === "Upcoming"
                        ? "bg-accent/10 text-accent"
                        : "bg-muted text-muted-foreground"
                    }`}
                  >
                    {item.category}
                  </Badge>
                  {item.isNew && (
                    <div className="flex items-center gap-1">
                      <Bell className="w-3 h-3 text-secondary animate-pulse" aria-hidden="true" />
                      <span className="text-xs font-medium text-secondary">New</span>
                    </div>
                  )}
                </div>
                <CardTitle className="font-heading text-lg text-foreground group-hover:text-primary transition-colors">
                  {item.title}
                </CardTitle>
                <div className="flex items-center gap-1 text-sm text-muted-foreground">
                  <Calendar className="w-4 h-4" aria-hidden="true" />
                  <span>{item.date}</span>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {item.description}
                </CardDescription>
                <div className="mt-4 flex items-center text-primary text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                  Read more
                  <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View All Events Link */}
        <div className="mt-12 text-center">
          <Link 
            to="/events"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-colors"
          >
            View All Events
            <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </Link>
        </div>

        {/* Subscribe Banner */}
        <div className="mt-16 max-w-2xl mx-auto">
          <div className="p-6 md:p-8 rounded-2xl bg-gradient-to-r from-primary/10 to-secondary/10 border border-border text-center">
            <Bell className="w-10 h-10 text-secondary mx-auto mb-4" aria-hidden="true" />
            <h3 className="font-heading text-xl font-semibold text-foreground mb-2">
              Never Miss an Update
            </h3>
            <p className="text-muted-foreground mb-4">
              Stay connected with the community. Join our mailing list for the latest news and events.
            </p>
            <button
              onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-colors"
            >
              Join Mailing List
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default News;
