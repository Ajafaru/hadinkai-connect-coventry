import { useState } from "react";
import { X } from "lucide-react";
import communityElders from "@/assets/community-elders.jpg";
import communityMeeting from "@/assets/community-meeting.jpg";
import communityLordMayor from "@/assets/community-lord-mayor.jpg";
import youthStudy from "@/assets/youth-study.jpg";
import youthGathering from "@/assets/youth-gathering.jpg";
import sarkinThrone from "@/assets/sarkin-zango-throne.jpg";

const galleryImages = [
  {
    src: communityLordMayor,
    alt: "Hadin Kai Community meeting with the Lord Mayor",
    caption: "Community Leaders with the Lord Mayor",
  },
  {
    src: communityElders,
    alt: "Community elders gathering",
    caption: "Our Respected Elders",
  },
  {
    src: sarkinThrone,
    alt: "Sarkin Zango at a community event",
    caption: "His Highness at Community Event",
  },
  {
    src: communityMeeting,
    alt: "Community meeting in progress",
    caption: "Community Meeting",
  },
  {
    src: youthStudy,
    alt: "Youth educational programme",
    caption: "Youth Education Programme",
  },
  {
    src: youthGathering,
    alt: "Youth gathering and activities",
    caption: "Youth Activities",
  },
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<typeof galleryImages[0] | null>(null);

  return (
    <section id="gallery" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-secondary font-semibold text-sm uppercase tracking-wider">
            Photo Gallery
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-3 mb-4">
            Our Community in Pictures
          </h2>
          <div className="section-divider mb-6" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Moments of unity, celebration, and progress captured through the years.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              onClick={() => setSelectedImage(image)}
              className={`group relative overflow-hidden rounded-xl cursor-pointer hover-lift ${
                index === 0 ? "md:col-span-2 md:row-span-2" : ""
              }`}
            >
              <div className={`aspect-square ${index === 0 ? "md:aspect-auto md:h-full" : ""}`}>
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <p className="text-primary-foreground font-medium text-sm md:text-base">
                    {image.caption}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setSelectedImage(null)}
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 p-2 text-white/80 hover:text-white transition-colors"
            aria-label="Close gallery"
          >
            <X className="w-8 h-8" />
          </button>
          <div className="max-w-4xl max-h-[90vh] relative" onClick={(e) => e.stopPropagation()}>
            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="max-w-full max-h-[85vh] object-contain rounded-lg"
            />
            <p className="text-white text-center mt-4 text-lg font-medium">
              {selectedImage.caption}
            </p>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;
