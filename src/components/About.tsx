import { Shield, Heart, Users, Globe } from "lucide-react";

const values = [
  {
    icon: Shield,
    title: "Respect",
    description: "Honouring our traditions and treating every community member with dignity.",
  },
  {
    icon: Heart,
    title: "Peace",
    description: "Fostering harmony within our community and with our neighbours.",
  },
  {
    icon: Users,
    title: "Cultural Heritage",
    description: "Preserving and celebrating our rich Zango cultural traditions.",
  },
  {
    icon: Globe,
    title: "Community Support",
    description: "Standing together to uplift and empower every member.",
  },
];

const About = () => {
  return (
    <section id="about" className="py-24 bg-card">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-secondary font-semibold text-sm uppercase tracking-wider">About Us</span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-3 mb-4">
            Who We Are
          </h2>
          <div className="section-divider mb-6" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Building bridges between tradition and progress, uniting our community for a brighter future.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Image/Visual */}
          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 overflow-hidden relative">
              <div className="absolute inset-0 pattern-cultural opacity-30" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-primary/20 flex items-center justify-center">
                    <Users className="w-12 h-12 text-primary" />
                  </div>
                  <h3 className="font-heading text-2xl font-bold text-foreground mb-2">Hadin Kai</h3>
                  <p className="text-muted-foreground italic">"Strength in Unity"</p>
                </div>
              </div>
            </div>
            {/* Decorative accent */}
            <div className="absolute -bottom-4 -right-4 w-32 h-32 rounded-2xl bg-secondary/20 -z-10" />
          </div>

          {/* Text Content */}
          <div className="space-y-6">
            <h3 className="font-heading text-2xl md:text-3xl font-semibold text-foreground">
              Our Story & Mission
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Hadin Kai Community – Coventry was established to unite members of the Zango diaspora 
              living in Coventry and the surrounding areas. Under the distinguished leadership of 
              His Highness, Alhaji Ali Umar Abass – Sarkin Zango Coventry, we have grown into a 
              thriving community dedicated to preserving our cultural heritage while embracing progress.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Our mission is threefold: to promote <strong className="text-foreground">unity</strong> among 
              community members, to foster <strong className="text-foreground">cultural development</strong> that 
              connects generations, and to drive <strong className="text-foreground">youth empowerment</strong> initiatives 
              that prepare our young people for success in a globalized world.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              We also maintain strong ties with our homeland and actively participate in 
              <strong className="text-foreground"> diaspora collaboration</strong> efforts that benefit 
              communities both here in the UK and back home.
            </p>
          </div>
        </div>

        {/* Values Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <div
              key={value.title}
              className="group p-6 rounded-xl bg-background hover-lift border border-border"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <value.icon className="w-7 h-7 text-primary" />
              </div>
              <h4 className="font-heading text-xl font-semibold text-foreground mb-2">
                {value.title}
              </h4>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
