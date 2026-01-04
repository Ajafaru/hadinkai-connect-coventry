import { Crown, Award, Users } from "lucide-react";
import leaderImage from "@/assets/sarkin-zango-portrait.jpg";
import sarkinThrone from "@/assets/sarkin-zango-throne.jpg";
import eldersGathering from "@/assets/elders-gathering.jpg";

const Leadership = () => {
  return (
    <section id="leadership" className="py-24 bg-card">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-secondary font-semibold text-sm uppercase tracking-wider">
            Leadership & Structure
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-3 mb-4">
            Our Leadership
          </h2>
          <div className="section-divider mb-6" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Guided by wisdom, tradition, and a vision for progress.
          </p>
        </div>

        {/* Leader Profile */}
        <div className="max-w-5xl mx-auto mb-16">
          <div className="relative bg-gradient-to-br from-primary/5 to-secondary/5 rounded-3xl p-8 md:p-12 border border-border overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-secondary/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl" />
            
            <div className="relative flex flex-col lg:flex-row items-center gap-8">
              {/* Photo */}
            <div className="flex-shrink-0">
              <div className="w-56 h-72 md:w-64 md:h-80 rounded-2xl overflow-hidden shadow-card border-4 border-secondary/30">
                <img 
                  src={leaderImage} 
                  alt="His Highness, Alhaji Ali Umar Abass - Sarkin Zango Coventry in traditional regalia" 
                  className="w-full h-full object-cover bg-muted/40"
                />
              </div>
            </div>

              {/* Info */}
              <div className="text-center lg:text-left">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/20 mb-4">
                  <Award className="w-4 h-4 text-secondary" />
                  <span className="text-sm font-medium text-secondary">Community Leader</span>
                </div>
                <h3 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-2">
                  His Highness, Alhaji Ali Umar Abass
                </h3>
                <p className="text-xl text-primary font-semibold mb-4">
                  Sarkin Zango Coventry
                </p>
                <p className="text-muted-foreground leading-relaxed max-w-xl">
                  A distinguished leader and custodian of our cultural heritage, His Highness 
                  Alhaji Ali Umar Abass has dedicated his life to serving the Zango community 
                  in Coventry. Under his wise guidance, Hadin Kai Community has flourished, 
                  becoming a beacon of unity, cultural preservation, and community development 
                  in the diaspora.
                </p>
                <p className="text-muted-foreground leading-relaxed max-w-xl mt-4">
                  His Highness continues to work tirelessly to strengthen bonds between community 
                  members, foster youth empowerment, and maintain strong connections with our 
                  homeland while embracing the opportunities of life in the United Kingdom.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Governance Structure */}
        <div className="grid md:grid-cols-3 gap-6">
          <div className="overflow-hidden rounded-xl bg-background border border-border text-center hover-lift">
            <div className="h-40 w-full overflow-hidden bg-muted/40 flex items-center justify-center">
              <img
                src={sarkinThrone}
                alt="Traditional council leadership seated in ceremonial regalia"
                className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                loading="lazy"
              />
            </div>
            <div className="p-6">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                <Crown className="w-8 h-8 text-primary" />
              </div>
              <h4 className="font-heading text-lg font-semibold text-foreground mb-2">
                Traditional Council
              </h4>
              <p className="text-muted-foreground text-sm">
                The Sarkin Zango and senior title holders who provide cultural 
                guidance and maintain traditional protocols.
              </p>
            </div>
          </div>

          <div className="overflow-hidden rounded-xl bg-background border border-border text-center hover-lift">
            <div className="h-40 w-full overflow-hidden bg-muted/40 flex items-center justify-center">
              <img
                src={eldersGathering}
                alt="Community elders gathered in traditional attire"
                className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                loading="lazy"
              />
            </div>
            <div className="p-6">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-secondary/10 flex items-center justify-center">
                <Users className="w-8 h-8 text-secondary" />
              </div>
              <h4 className="font-heading text-lg font-semibold text-foreground mb-2">
                Community Elders
              </h4>
              <p className="text-muted-foreground text-sm">
                Respected members who advise on community matters, mediate disputes, 
                and ensure traditions are upheld.
              </p>
            </div>
          </div>

          <div className="overflow-hidden rounded-xl bg-background border border-border text-center hover-lift">
            <div className="h-40 w-full overflow-hidden bg-muted/40 flex items-center justify-center">
              <img
                src={eldersGathering}
                alt="Executive committee gathered with community elders"
                className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                loading="lazy"
              />
            </div>
            <div className="p-6">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-accent/10 flex items-center justify-center">
                <Award className="w-8 h-8 text-accent" />
              </div>
              <h4 className="font-heading text-lg font-semibold text-foreground mb-2">
                Executive Committee
              </h4>
              <p className="text-muted-foreground text-sm">
                Elected representatives who handle day-to-day administration, 
                organize events, and manage community resources.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Leadership;
