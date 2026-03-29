import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Calendar, MapPin, Clock, ArrowRight, Play } from "lucide-react";
import { useRef } from "react";

interface ContentSection {
  id: string;
  section_type: string;
  title: string;
  subtitle: string | null;
  body: string | null;
  content: Record<string, string>;
  media_urls: string[];
  display_order: number;
  published: boolean;
}

const DynamicSections = () => {
  const [sections, setSections] = useState<ContentSection[]>([]);

  useEffect(() => {
    const fetchSections = async () => {
      const { data } = await supabase
        .from("content_sections")
        .select("*")
        .eq("published", true)
        .order("display_order", { ascending: true });
      if (data) setSections(data as unknown as ContentSection[]);
    };
    fetchSections();

    // Realtime updates
    const channel = supabase
      .channel("content_sections_public")
      .on("postgres_changes", { event: "*", schema: "public", table: "content_sections" }, () => {
        fetchSections();
      })
      .subscribe();

    return () => { supabase.removeChannel(channel); };
  }, []);

  if (sections.length === 0) return null;

  return (
    <>
      {sections.map((section, index) => (
        <SectionRenderer key={section.id} section={section} index={index} />
      ))}
    </>
  );
};

const SectionRenderer = ({ section, index }: { section: ContentSection; index: number }) => {
  const isEven = index % 2 === 0;

  switch (section.section_type) {
    case "banner":
      return <BannerSection section={section} />;
    case "event":
      return <EventSection section={section} isEven={isEven} />;
    case "gallery":
      return <GallerySection section={section} />;
    case "blog_post":
      return <BlogSection section={section} isEven={isEven} />;
    case "announcement":
      return <AnnouncementSection section={section} />;
    default:
      return <BlogSection section={section} isEven={isEven} />;
  }
};

/* ─── Banner ────────────────────────────────────── */
const BannerSection = ({ section }: { section: ContentSection }) => {
  const bgImage = section.media_urls?.[0];
  return (
    <section
      className="relative py-20 md:py-28 bg-cover bg-center"
      style={bgImage ? { backgroundImage: `url(${bgImage})` } : {}}
    >
      <div className="absolute inset-0 bg-foreground/70" />
      <div className="container mx-auto px-4 relative z-10 text-center">
        {section.subtitle && (
          <span className="text-secondary font-semibold text-sm uppercase tracking-wider">
            {section.subtitle}
          </span>
        )}
        <h2 className="font-heading text-3xl md:text-5xl font-bold text-background mt-3 mb-4">
          {section.title}
        </h2>
        {section.body && (
          <p className="text-background/80 max-w-2xl mx-auto text-lg">{section.body}</p>
        )}
        {section.content?.link_url && (
          <a
            href={section.content.link_url}
            className="inline-flex items-center gap-2 mt-6 bg-primary text-primary-foreground px-6 py-3 rounded-full font-semibold hover:bg-primary/90 transition-colors"
          >
            {section.content.link_text || "Learn More"} <ArrowRight className="w-4 h-4" />
          </a>
        )}
      </div>
    </section>
  );
};

/* ─── Event ─────────────────────────────────────── */
const EventSection = ({ section, isEven }: { section: ContentSection; isEven: boolean }) => (
  <section className={`py-20 ${isEven ? "bg-card" : "bg-background"}`}>
    <div className="container mx-auto px-4">
      <div className={`grid md:grid-cols-2 gap-10 items-center ${!isEven ? "md:[direction:rtl] md:[&>*]:text-left md:[&>*]:[direction:ltr]" : ""}`}>
        {/* Media */}
        <div className="space-y-4">
          {section.media_urls.length > 0 && (
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <MediaDisplay url={section.media_urls[0]} title={section.title} />
            </div>
          )}
          {section.media_urls.length > 1 && (
            <div className="grid grid-cols-3 gap-3">
              {section.media_urls.slice(1, 4).map((url, i) => (
                <div key={i} className="rounded-xl overflow-hidden aspect-square shadow-md">
                  <MediaDisplay url={url} title={section.title} />
                </div>
              ))}
            </div>
          )}
        </div>
        {/* Content */}
        <div className="space-y-5">
          {section.subtitle && (
            <span className="text-secondary font-semibold text-sm uppercase tracking-wider">
              {section.subtitle}
            </span>
          )}
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
            {section.title}
          </h2>
          <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
            {section.content?.date && (
              <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4 text-primary" />{section.content.date}</span>
            )}
            {section.content?.time && (
              <span className="flex items-center gap-1.5"><Clock className="w-4 h-4 text-primary" />{section.content.time}</span>
            )}
            {section.content?.location && (
              <span className="flex items-center gap-1.5"><MapPin className="w-4 h-4 text-primary" />{section.content.location}</span>
            )}
          </div>
          {section.body && (
            <p className="text-muted-foreground leading-relaxed whitespace-pre-line">{section.body}</p>
          )}
          {section.content?.link_url && (
            <a
              href={section.content.link_url}
              className="inline-flex items-center gap-2 text-primary font-semibold hover:underline"
            >
              {section.content.link_text || "Learn More"} <ArrowRight className="w-4 h-4" />
            </a>
          )}
        </div>
      </div>
    </div>
  </section>
);

/* ─── Blog ──────────────────────────────────────── */
const BlogSection = ({ section, isEven }: { section: ContentSection; isEven: boolean }) => (
  <section className={`py-20 ${isEven ? "bg-card" : "bg-background"}`}>
    <div className="container mx-auto px-4">
      <div className={`grid md:grid-cols-2 gap-10 items-start ${!isEven ? "md:[direction:rtl] md:[&>*]:text-left md:[&>*]:[direction:ltr]" : ""}`}>
        {section.media_urls.length > 0 && (
          <div className="rounded-2xl overflow-hidden shadow-xl">
            <MediaDisplay url={section.media_urls[0]} title={section.title} />
          </div>
        )}
        <div className="space-y-5">
          {section.subtitle && (
            <span className="text-secondary font-semibold text-sm uppercase tracking-wider">
              {section.subtitle}
            </span>
          )}
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
            {section.title}
          </h2>
          {section.body && (
            <div className="text-muted-foreground leading-relaxed whitespace-pre-line">{section.body}</div>
          )}
          {section.content?.link_url && (
            <a
              href={section.content.link_url}
              className="inline-flex items-center gap-2 text-primary font-semibold hover:underline"
            >
              {section.content.link_text || "Read More"} <ArrowRight className="w-4 h-4" />
            </a>
          )}
        </div>
      </div>
    </div>
  </section>
);

/* ─── Gallery ───────────────────────────────────── */
const GallerySection = ({ section }: { section: ContentSection }) => (
  <section className="py-20 bg-card">
    <div className="container mx-auto px-4">
      <div className="text-center mb-10">
        {section.subtitle && (
          <span className="text-secondary font-semibold text-sm uppercase tracking-wider">
            {section.subtitle}
          </span>
        )}
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mt-3">
          {section.title}
        </h2>
        {section.body && (
          <p className="text-muted-foreground max-w-2xl mx-auto mt-4">{section.body}</p>
        )}
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {section.media_urls.map((url, i) => (
          <div key={i} className="aspect-square rounded-xl overflow-hidden shadow-md group cursor-pointer">
            <MediaDisplay url={url} title={`${section.title} ${i + 1}`} />
          </div>
        ))}
      </div>
    </div>
  </section>
);

/* ─── Announcement ──────────────────────────────── */
const AnnouncementSection = ({ section }: { section: ContentSection }) => (
  <section className="py-12 bg-primary/5 border-y border-primary/10">
    <div className="container mx-auto px-4 text-center">
      <h3 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-3">
        {section.title}
      </h3>
      {section.body && (
        <p className="text-muted-foreground max-w-2xl mx-auto">{section.body}</p>
      )}
      <div className="flex flex-wrap justify-center gap-4 mt-4 text-sm text-muted-foreground">
        {section.content?.date && (
          <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4 text-primary" />{section.content.date}</span>
        )}
        {section.content?.location && (
          <span className="flex items-center gap-1.5"><MapPin className="w-4 h-4 text-primary" />{section.content.location}</span>
        )}
      </div>
      {section.content?.link_url && (
        <a
          href={section.content.link_url}
          className="inline-flex items-center gap-2 mt-5 bg-primary text-primary-foreground px-5 py-2.5 rounded-full font-semibold hover:bg-primary/90 transition-colors"
        >
          {section.content.link_text || "Learn More"} <ArrowRight className="w-4 h-4" />
        </a>
      )}
    </div>
  </section>
);

/* ─── Media Helper ──────────────────────────────── */
const MediaDisplay = ({ url, title }: { url: string; title: string }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);
  const isVideo = url.match(/\.(mp4|webm|mov)/i);

  if (isVideo) {
    return (
      <div className="relative w-full h-full group">
        <video
          ref={videoRef}
          src={url}
          className="w-full h-full object-cover"
          muted
          playsInline
          onEnded={() => setPlaying(false)}
        />
        {!playing && (
          <button
            onClick={() => { videoRef.current?.play(); setPlaying(true); }}
            className="absolute inset-0 flex items-center justify-center bg-foreground/20 group-hover:bg-foreground/30 transition-colors"
          >
            <div className="w-14 h-14 rounded-full bg-primary flex items-center justify-center shadow-lg">
              <Play className="w-6 h-6 text-primary-foreground ml-1" fill="currentColor" />
            </div>
          </button>
        )}
      </div>
    );
  }

  return <img src={url} alt={title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />;
};

export default DynamicSections;
