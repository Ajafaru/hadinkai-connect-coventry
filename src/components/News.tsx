import { Calendar, Bell, ArrowRight } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const newsItems = [
  {
    category: "Announcement",
    date: "December 2024",
    title: "Annual General Meeting 2024",
    description: "All community members are invited to attend our Annual General Meeting. We will review the year's achievements and plan for 2025.",
    isNew: true,
  },
  {
    category: "Event",
    date: "November 2024",
    title: "Eid Milad-un-Nabi Celebration",
    description: "Join us for a blessed gathering to commemorate the birth of Prophet Muhammad (PBUH). Special prayers and community feast included.",
    isNew: true,
  },
  {
    category: "Notice",
    date: "October 2024",
    title: "Youth Development Workshop Series",
    description: "A new series of workshops focused on career development, leadership skills, and cultural awareness for young community members.",
    isNew: false,
  },
  {
    category: "Community",
    date: "September 2024",
    title: "Charity Drive for Flood Victims",
    description: "Our community successfully raised funds to support flood victims in Nigeria. Thank you to all who contributed generously.",
    isNew: false,
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
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between mb-2">
                  <Badge
                    variant="secondary"
                    className={`${
                      item.category === "Announcement"
                        ? "bg-primary/10 text-primary"
                        : item.category === "Event"
                        ? "bg-secondary/20 text-secondary"
                        : item.category === "Notice"
                        ? "bg-accent/10 text-accent"
                        : "bg-muted text-muted-foreground"
                    }`}
                  >
                    {item.category}
                  </Badge>
                  {item.isNew && (
                    <div className="flex items-center gap-1">
                      <Bell className="w-3 h-3 text-secondary animate-pulse" />
                      <span className="text-xs font-medium text-secondary">New</span>
                    </div>
                  )}
                </div>
                <CardTitle className="font-heading text-lg text-foreground group-hover:text-primary transition-colors">
                  {item.title}
                </CardTitle>
                <div className="flex items-center gap-1 text-sm text-muted-foreground">
                  <Calendar className="w-4 h-4" />
                  <span>{item.date}</span>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {item.description}
                </CardDescription>
                <div className="mt-4 flex items-center text-primary text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                  Read more
                  <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Subscribe Banner */}
        <div className="mt-16 max-w-2xl mx-auto">
          <div className="p-6 md:p-8 rounded-2xl bg-gradient-to-r from-primary/10 to-secondary/10 border border-border text-center">
            <Bell className="w-10 h-10 text-secondary mx-auto mb-4" />
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
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default News;
