import { useEffect, useState, useRef } from "react";
import { X, Play, Pause, Volume2, VolumeX, ChevronLeft, ChevronRight } from "lucide-react";
import communityElders from "@/assets/community-elders.jpg";
import communityMeeting from "@/assets/community-meeting.jpg";
import communityLordMayor from "@/assets/community-lord-mayor.jpg";
import youthStudy from "@/assets/youth-study.jpg";
import youthGathering from "@/assets/youth-gathering.jpg";
import sarkinThrone from "@/assets/sarkin-zango-throne.jpg";
import youthSession from "@/assets/youth-session.jpg";
import eldersGathering from "@/assets/elders-gathering.jpg";
import sarkinCeremony from "@/assets/sarkin-ceremony.jpg";
import sarkinWithElder from "@/assets/sarkin-with-elder.jpg";
import sarkinWithLeader from "@/assets/sarkin-with-leader.jpg";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";

type MediaItem = {
  type: "image" | "video";
  src: string;
  alt: string;
  caption: string;
};

const galleryMedia: MediaItem[] = [
  {
    type: "image",
    src: communityLordMayor,
    alt: "Hadin Kai Community meeting with the Lord Mayor of Coventry",
    caption: "Community Leaders with the Lord Mayor",
  },
  {
    type: "video",
    src: "/videos/community-event-1.mp4",
    alt: "Community celebration event video",
    caption: "Community Celebration Highlights",
  },
  {
    type: "image",
    src: sarkinCeremony,
    alt: "His Highness Sarkin Zango Coventry at a ceremonial event",
    caption: "His Highness at Ceremonial Event",
  },
  {
    type: "image",
    src: communityElders,
    alt: "Respected community elders gathering for discussion",
    caption: "Our Respected Elders",
  },
  {
    type: "video",
    src: "/videos/community-event-2.mp4",
    alt: "Cultural event video from community gathering",
    caption: "Cultural Event Moments",
  },
  {
    type: "image",
    src: eldersGathering,
    alt: "Community elders at formal gathering with traditional attire",
    caption: "Elders at Formal Gathering",
  },
  {
    type: "image",
    src: sarkinWithElder,
    alt: "Sarkin Zango Coventry with community elder",
    caption: "Leadership Fellowship",
  },
  {
    type: "image",
    src: sarkinWithLeader,
    alt: "Sarkin Zango with community leader in traditional dress",
    caption: "Traditional Leadership",
  },
  {
    type: "image",
    src: sarkinThrone,
    alt: "Sarkin Zango at community event in full regalia",
    caption: "His Highness at Community Event",
  },
  {
    type: "image",
    src: communityMeeting,
    alt: "Community meeting in progress with members discussing",
    caption: "Community Meeting",
  },
  {
    type: "image",
    src: youthStudy,
    alt: "Youth educational programme with young students learning",
    caption: "Youth Education Programme",
  },
  {
    type: "image",
    src: youthSession,
    alt: "Youth study session with books and learning materials",
    caption: "Youth Study Session",
  },
  {
    type: "image",
    src: youthGathering,
    alt: "Youth gathering and community activities",
    caption: "Youth Activities",
  },
];

const Gallery = () => {
  const [selectedMedia, setSelectedMedia] = useState<MediaItem | null>(null);
  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  const [carouselApi, setCarouselApi] = useState<CarouselApi | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);
  const lightboxVideoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (!carouselApi) return;

    const interval = window.setInterval(() => {
      carouselApi.scrollNext();
    }, 5000);

    return () => window.clearInterval(interval);
  }, [carouselApi]);

  const openLightbox = (media: MediaItem, index: number) => {
    setSelectedMedia(media);
    setSelectedIndex(index);
    setIsPlaying(false);
  };

  const closeLightbox = () => {
    setSelectedMedia(null);
    setIsPlaying(false);
  };

  const navigateLightbox = (direction: "prev" | "next") => {
    const newIndex = direction === "prev" 
      ? (selectedIndex - 1 + galleryMedia.length) % galleryMedia.length
      : (selectedIndex + 1) % galleryMedia.length;
    setSelectedIndex(newIndex);
    setSelectedMedia(galleryMedia[newIndex]);
    setIsPlaying(false);
  };

  const togglePlay = () => {
    if (lightboxVideoRef.current) {
      if (isPlaying) {
        lightboxVideoRef.current.pause();
      } else {
        lightboxVideoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (lightboxVideoRef.current) {
      lightboxVideoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <section id="gallery" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-secondary font-semibold text-sm uppercase tracking-wider">
            Photo & Video Gallery
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-3 mb-4">
            Our Community in Pictures
          </h2>
          <div className="section-divider mb-6" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Moments of unity, celebration, and progress captured through the years.
          </p>
        </div>

        {/* Featured Carousel */}
        <Carousel
          setApi={setCarouselApi}
          opts={{ loop: true, align: "start" }}
          className="relative mb-12"
        >
          <CarouselContent>
            {galleryMedia.slice(0, 6).map((media, index) => (
              <CarouselItem key={index} className="pl-0">
                <button
                  type="button"
                  onClick={() => openLightbox(media, index)}
                  className="group relative w-full overflow-hidden rounded-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                  aria-label={`View ${media.caption}`}
                >
                  <div className="aspect-[16/9] md:aspect-[3/2] lg:aspect-[5/2]">
                    {media.type === "image" ? (
                      <img
                        src={media.src}
                        alt={media.alt}
                        loading="lazy"
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    ) : (
                      <video
                        ref={index === 0 ? videoRef : undefined}
                        src={media.src}
                        muted
                        loop
                        playsInline
                        className="w-full h-full object-cover"
                        onMouseEnter={(e) => e.currentTarget.play()}
                        onMouseLeave={(e) => {
                          e.currentTarget.pause();
                          e.currentTarget.currentTime = 0;
                        }}
                      />
                    )}
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/30 to-transparent">
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      {media.type === "video" && (
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/90 text-secondary-foreground text-sm mb-2">
                          <Play className="w-3 h-3" />
                          Video
                        </div>
                      )}
                      <p className="text-primary-foreground font-semibold text-base md:text-lg">
                        {media.caption}
                      </p>
                    </div>
                  </div>
                </button>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="-left-6" aria-label="Previous slide" />
          <CarouselNext className="-right-6" aria-label="Next slide" />
        </Carousel>

        {/* Thumbnail Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {galleryMedia.map((media, index) => (
            <button
              key={index}
              onClick={() => openLightbox(media, index)}
              className="group relative aspect-square rounded-xl overflow-hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              aria-label={`View ${media.caption}`}
            >
              {media.type === "image" ? (
                <img
                  src={media.src}
                  alt={media.alt}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
              ) : (
                <>
                  <video
                    src={media.src}
                    muted
                    playsInline
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-10 h-10 rounded-full bg-secondary/90 flex items-center justify-center">
                      <Play className="w-5 h-5 text-secondary-foreground" />
                    </div>
                  </div>
                </>
              )}
              <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/40 transition-colors" />
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedMedia && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 animate-fade-in"
          onClick={closeLightbox}
          role="dialog"
          aria-modal="true"
          aria-label="Media lightbox"
        >
          {/* Close button */}
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 p-2 text-white/80 hover:text-white transition-colors z-10"
            aria-label="Close gallery"
          >
            <X className="w-8 h-8" />
          </button>

          {/* Navigation arrows */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              navigateLightbox("prev");
            }}
            className="absolute left-4 top-1/2 -translate-y-1/2 p-2 text-white/80 hover:text-white transition-colors z-10"
            aria-label="Previous media"
          >
            <ChevronLeft className="w-10 h-10" />
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              navigateLightbox("next");
            }}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-2 text-white/80 hover:text-white transition-colors z-10"
            aria-label="Next media"
          >
            <ChevronRight className="w-10 h-10" />
          </button>

          {/* Media content */}
          <div className="max-w-5xl max-h-[90vh] relative" onClick={(e) => e.stopPropagation()}>
            {selectedMedia.type === "image" ? (
              <img
                src={selectedMedia.src}
                alt={selectedMedia.alt}
                className="max-w-full max-h-[85vh] object-contain rounded-lg"
              />
            ) : (
              <div className="relative">
                <video
                  ref={lightboxVideoRef}
                  src={selectedMedia.src}
                  muted={isMuted}
                  playsInline
                  className="max-w-full max-h-[85vh] object-contain rounded-lg"
                  onClick={(e) => {
                    e.stopPropagation();
                    togglePlay();
                  }}
                />
                {/* Video controls */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-4 px-4 py-2 rounded-full bg-black/60 backdrop-blur-sm">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      togglePlay();
                    }}
                    className="text-white hover:text-secondary transition-colors"
                    aria-label={isPlaying ? "Pause video" : "Play video"}
                  >
                    {isPlaying ? <Pause className="w-6 h-6" /> : <Play className="w-6 h-6" />}
                  </button>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleMute();
                    }}
                    className="text-white hover:text-secondary transition-colors"
                    aria-label={isMuted ? "Unmute video" : "Mute video"}
                  >
                    {isMuted ? <VolumeX className="w-6 h-6" /> : <Volume2 className="w-6 h-6" />}
                  </button>
                </div>
              </div>
            )}
            <p className="text-white text-center mt-4 text-lg font-medium">
              {selectedMedia.caption}
            </p>
            <p className="text-white/60 text-center text-sm mt-1">
              {selectedIndex + 1} of {galleryMedia.length}
            </p>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;
