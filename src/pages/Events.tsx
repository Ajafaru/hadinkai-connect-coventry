import { Calendar, MapPin, Clock, ArrowRight, Bell } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import youthSession from "@/assets/youth-session.jpg";
import communityMeeting from "@/assets/community-meeting.jpg";

const upcomingEvents = [
  {
    id: 1,
    title: "Eid ul-Fitr Community Celebration 2026",
    date: "March 30, 2026",
    time: "10:00 AM - 6:00 PM",
    location: "Coventry Community Centre",
    description: "Join us for the blessed Eid ul-Fitr celebration with prayers, traditional food, and community fellowship. All families welcome.",
    category: "Religious",
    isUpcoming: true,
  },
  {
    id: 2,
    title: "Youth Leadership Workshop",
    date: "February 15, 2026",
    time: "2:00 PM - 5:00 PM",
    location: "Hadin Kai Community Hall",
    description: "A special workshop for young community members focusing on leadership skills, career development, and cultural identity.",
    category: "Education",
    isUpcoming: true,
    image: youthSession,
    imageAlt: "Young community members in a leadership workshop session",
  },
  {
    id: 3,
    title: "Annual General Meeting 2026",
    date: "January 25, 2026",
    time: "3:00 PM - 6:00 PM",
    location: "Coventry Central Hall",
    description: "All community members are invited to attend our AGM. We will review achievements and set goals for the year ahead.",
    category: "Meeting",
    isUpcoming: true,
    image: communityMeeting,
    imageAlt: "Community members gathered for the annual general meeting",
  },
  {
    id: 4,
    title: "Cultural Heritage Day",
    date: "April 20, 2026",
    time: "11:00 AM - 7:00 PM",
    location: "Memorial Park, Coventry",
    description: "A day celebrating our rich Zango cultural heritage with traditional music, dance, food, and storytelling for all ages.",
    category: "Cultural",
    isUpcoming: true,
  },
  {
    id: 5,
    title: "Ramadan Iftar Gathering",
    date: "March 2026 (Dates TBC)",
    time: "Sunset",
    location: "Various Venues",
    description: "Join us for communal Iftar gatherings during the blessed month of Ramadan. Details to be announced.",
    category: "Religious",
    isUpcoming: true,
  },
  {
    id: 6,
    title: "Community Sports Day",
    date: "May 10, 2026",
    time: "10:00 AM - 4:00 PM",
    location: "War Memorial Park, Coventry",
    description: "A fun-filled day of sports activities for all ages including football, races, and family games.",
    category: "Social",
    isUpcoming: true,
  },
];

const pastEvents = [
  {
    id: 101,
    title: "Annual General Meeting 2024",
    date: "December 2024",
    description: "Successfully held with over 200 community members in attendance.",
    category: "Meeting",
  },
  {
    id: 102,
    title: "Eid Milad-un-Nabi Celebration",
    date: "November 2024",
    description: "A blessed gathering commemorating the birth of Prophet Muhammad (PBUH).",
    category: "Religious",
  },
];

const Events = () => {
  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Religious":
        return "bg-primary/10 text-primary";
      case "Education":
        return "bg-secondary/20 text-secondary";
      case "Cultural":
        return "bg-accent/10 text-accent";
      case "Meeting":
        return "bg-muted text-muted-foreground";
      case "Social":
        return "bg-green-100 text-green-800";
      default:
        return "bg-muted text-muted-foreground";
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-br from-primary/10 to-secondary/10">
          <div className="container mx-auto px-4 text-center">
            <span className="text-secondary font-semibold text-sm uppercase tracking-wider">
              Events & Calendar
            </span>
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground mt-3 mb-4">
              Upcoming Events
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Stay connected with our community through our events. Join us for celebrations, 
              educational programs, and social gatherings.
            </p>
          </div>
        </section>

        {/* Upcoming Events */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-8">
              2026 Events Calendar
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {upcomingEvents.map((event) => (
                <Card key={event.id} className="border-border bg-card hover-lift overflow-hidden">
                  {event.image && (
                    <div className="h-40 w-full overflow-hidden">
                      <img
                        src={event.image}
                        alt={event.imageAlt}
                        className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                        loading="lazy"
                      />
                    </div>
                  )}
                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between mb-2">
                      <Badge className={getCategoryColor(event.category)}>
                        {event.category}
                      </Badge>
                      <Bell className="w-4 h-4 text-secondary" />
                    </div>
                    <CardTitle className="font-heading text-lg text-foreground">
                      {event.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="w-4 h-4" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Clock className="w-4 h-4" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <MapPin className="w-4 h-4" />
                      <span>{event.location}</span>
                    </div>
                    <CardDescription className="text-muted-foreground pt-2">
                      {event.description}
                    </CardDescription>
                    <Button variant="outline" className="w-full mt-4 group">
                      Register Interest
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Past Events Archive */}
        <section className="py-16 bg-card">
          <div className="container mx-auto px-4">
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-8">
              Past Events Archive
            </h2>
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl">
              {pastEvents.map((event) => (
                <div key={event.id} className="p-6 rounded-xl bg-background border border-border">
                  <div className="flex items-center gap-2 mb-2">
                    <Badge variant="secondary" className={getCategoryColor(event.category)}>
                      {event.category}
                    </Badge>
                    <span className="text-sm text-muted-foreground">{event.date}</span>
                  </div>
                  <h3 className="font-heading text-lg font-semibold text-foreground mb-2">
                    {event.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">{event.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Subscribe CTA */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto p-8 rounded-2xl bg-gradient-to-r from-primary/10 to-secondary/10 border border-border text-center">
              <Bell className="w-10 h-10 text-secondary mx-auto mb-4" />
              <h3 className="font-heading text-xl font-semibold text-foreground mb-2">
                Never Miss an Event
              </h3>
              <p className="text-muted-foreground mb-4">
                Contact us to join our mailing list and receive notifications about upcoming events.
              </p>
              <a 
                href="mailto:Hadinkai2024@gmail.com?subject=Event%20Notifications"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-colors"
              >
                Subscribe to Events
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Events;
