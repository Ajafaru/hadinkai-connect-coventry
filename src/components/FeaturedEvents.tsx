import { Calendar, MapPin, Clock, Star, ArrowRight } from "lucide-react";
import ramadanPoster from "@/assets/ramadan-iftar-poster.jpg";
import eidLeadersPanel from "@/assets/eid-leaders-panel.jpg";
import iftarDinnerServing from "@/assets/iftar-dinner-serving.jpg";
import iftarMealSharing from "@/assets/iftar-meal-sharing.jpg";
import prayerSession from "@/assets/prayer-session.jpg";
import ghanaIndependenceLordMayor from "@/assets/ghana-independence-lord-mayor.jpg";
import ghanaIndependenceGroup from "@/assets/ghana-independence-group.jpg";

const FeaturedEvents = () => {
  return (
    <section id="featured-events" className="py-24 bg-card">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-secondary font-semibold text-sm uppercase tracking-wider">
            Featured Events 2026
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-3 mb-4">
            Community Highlights
          </h2>
          <div className="section-divider mb-6" />
        </div>

        {/* ===== RAMADAN IFTAR 2026 ===== */}
        <div className="mb-20">
          <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-[hsl(160,40%,15%)] to-[hsl(200,50%,10%)] shadow-2xl">
            {/* Top decorative bar */}
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-secondary via-accent to-secondary" />
            
            <div className="grid lg:grid-cols-2 gap-0">
              {/* Left: Poster & Info */}
              <div className="p-8 md:p-12 flex flex-col justify-center">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary/20 text-secondary text-sm font-semibold mb-6 w-fit">
                  <Star className="w-4 h-4" />
                  Ramadan 2026
                </div>
                <h3 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
                  Annual Ramadan Iftar 2026
                </h3>
                <p className="text-white/80 text-lg mb-8 leading-relaxed">
                  Hadin Kai Community & Masarautar Zango Coventry invites you to our annual 
                  Ramadan Iftar gathering. Come together to break fast, share meals, and 
                  strengthen the bonds of brotherhood and sisterhood.
                </p>
                
                <div className="space-y-3 mb-8">
                  <div className="flex items-center gap-3 text-white/90">
                    <Calendar className="w-5 h-5 text-secondary" />
                    <span className="font-medium">7th March 2026</span>
                  </div>
                  <div className="flex items-center gap-3 text-white/90">
                    <Clock className="w-5 h-5 text-secondary" />
                    <span className="font-medium">4:00 PM</span>
                  </div>
                  <div className="flex items-center gap-3 text-white/90">
                    <MapPin className="w-5 h-5 text-secondary" />
                    <span className="font-medium">Hadin Kai Community Centre, Middle Ride, Coventry CV3 3GN</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-3">
                  <a
                    href="mailto:Hadinkai2024@gmail.com?subject=Ramadan%20Iftar%202026%20RSVP"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-secondary text-secondary-foreground font-semibold hover:bg-secondary/90 transition-colors"
                  >
                    RSVP Now
                    <ArrowRight className="w-4 h-4" />
                  </a>
                  <a
                    href="tel:07862061181"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-white/20 text-white font-semibold hover:bg-white/10 transition-colors"
                  >
                    Contact Mansur: 07862061181
                  </a>
                </div>
              </div>

              {/* Right: Poster image */}
              <div className="relative">
                <img
                  src={ramadanPoster}
                  alt="Ramadan Iftar 2026 official invitation poster by Hadin Kai Community"
                  className="w-full h-full object-cover min-h-[400px]"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Photo strip */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-1">
              {[
                { src: eidLeadersPanel, alt: "Leaders addressing the community during Eid celebration" },
                { src: iftarDinnerServing, alt: "Community members serving Iftar dinner" },
                { src: prayerSession, alt: "Community prayer session during Ramadan" },
                { src: iftarMealSharing, alt: "Members sharing Iftar meal together" },
              ].map((img, i) => (
                <div key={i} className="aspect-video overflow-hidden">
                  <img
                    src={img.src}
                    alt={img.alt}
                    loading="lazy"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ===== GHANA'S 79TH INDEPENDENCE ===== */}
        <div>
          <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-[hsl(45,60%,12%)] via-[hsl(20,40%,15%)] to-[hsl(120,30%,12%)] shadow-2xl">
            {/* Ghana flag colors bar */}
            <div className="flex h-2">
              <div className="flex-1 bg-[hsl(0,70%,45%)]" />
              <div className="flex-1 bg-[hsl(45,90%,55%)]" />
              <div className="flex-1 bg-[hsl(130,50%,30%)]" />
            </div>

            <div className="grid lg:grid-cols-2 gap-0">
              {/* Left: Hero photo */}
              <div className="relative">
                <img
                  src={ghanaIndependenceLordMayor}
                  alt="Hadin Kai community delegation with the Lord Mayor at Ghana's 79th Independence celebration in Coventry"
                  className="w-full h-full object-cover min-h-[400px]"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[hsl(45,60%,12%)]/80 lg:block hidden" />
              </div>

              {/* Right: Info */}
              <div className="p-8 md:p-12 flex flex-col justify-center">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[hsl(45,90%,55%)]/20 text-[hsl(45,90%,65%)] text-sm font-semibold mb-6 w-fit">
                  <Star className="w-4 h-4" />
                  Ghana @ 79
                </div>
                <h3 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
                  Hadin Kai @ Ghana's 79th Independence
                </h3>
                <p className="text-white/80 text-lg mb-6 leading-relaxed">
                  Our community proudly represented at the 79th Ghana Independence Day 
                  celebration in Coventry. A beautiful display of unity, cultural pride, 
                  and the enduring bond between our Zango heritage and the wider Ghanaian diaspora.
                </p>
                <p className="text-white/70 mb-8 leading-relaxed">
                  Community members adorned in traditional Kente and Northern attire joined 
                  dignitaries including the Lord Mayor of Coventry to celebrate this milestone. 
                  The event highlighted our commitment to cultural preservation and 
                  community integration in the United Kingdom.
                </p>

                <div className="flex items-center gap-3 text-white/90 mb-6">
                  <MapPin className="w-5 h-5 text-[hsl(45,90%,65%)]" />
                  <span className="font-medium">Coventry Council House</span>
                </div>
              </div>
            </div>

            {/* Ghana Independence photo strip */}
            <div className="grid grid-cols-2 gap-1">
              <div className="aspect-video overflow-hidden">
                <img
                  src={ghanaIndependenceGroup}
                  alt="Hadin Kai delegation members in traditional attire at Ghana Independence celebration"
                  loading="lazy"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="aspect-video overflow-hidden">
                <img
                  src={ghanaIndependenceLordMayor}
                  alt="Community members with Lord Mayor celebrating Ghana's Independence"
                  loading="lazy"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>

            {/* Bottom flag bar */}
            <div className="flex h-2">
              <div className="flex-1 bg-[hsl(0,70%,45%)]" />
              <div className="flex-1 bg-[hsl(45,90%,55%)]" />
              <div className="flex-1 bg-[hsl(130,50%,30%)]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedEvents;
