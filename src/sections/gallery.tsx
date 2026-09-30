import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import GalleryLightbox from "../components/GalleryLightbox";
import "../styles/gallery-lightbox.css";

const galleryImages = [
  {
    src: "/images/image 1.jpeg",
    label: "ATC Kataram",
    location: "Government ATC Kataram",
  },
  {
    src: "/images/image 2.jpeg",
    label: "Independence Day",
    location: "Government ATC Kataram",
  },
  {
    src: "/images/image 3.jpeg",
    label: "IT Minister Visit",
    location: "Government ATC Kataram",
  },
  {
    src: "/images/image 4.jpeg",
    label: "Students & Faculty",
    location: "Government ATC Kataram",
  },
  {
    src: "/images/image 5.jpeg",
    label: "Prajapalana Pragathi Pranalika",
    location: "Government ATC Kataram",
  },
  {
    src: "/images/image 6.jpeg",
    label: "Technology Demonstration",
    location: "Government ATC Kataram",
  },
  {
    src: "/images/image 7.jpeg",
    label: "Instructor-led Training",
    location: "Government ATC Kataram",
  },
  {
    src: "/images/image 8.jpeg",
    label: "Interactive Classroom",
    location: "Government ATC Kataram",
  },
  {
    src: "/images/image 9.jpeg",
    label: "Digital Classroom",
    location: "Government ATC Kataram",
  },
];

function Gallery() {
  const storyRef = useRef<HTMLDivElement | null>(null);

  const [activeIndex, setActiveIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(
    null,
  );

  useEffect(() => {
    const story = storyRef.current;

    if (!story) return;

    let ticking = false;

    const updateGallery = () => {
      const rect = story.getBoundingClientRect();
      const scrollableDistance =
        story.offsetHeight - window.innerHeight;

      if (scrollableDistance <= 0) {
        setActiveIndex(0);
        setProgress(0);
        ticking = false;
        return;
      }

      const passed = Math.min(
        Math.max(-rect.top, 0),
        scrollableDistance,
      );

      const normalizedProgress =
        passed / scrollableDistance;

      const stage = Math.min(
        galleryImages.length - 1,
        Math.floor(
          normalizedProgress * galleryImages.length,
        ),
      );

      setActiveIndex(stage);
      setProgress(normalizedProgress);

      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateGallery);
        ticking = true;
      }
    };

    const handleResize = () => {
      updateGallery();
    };

    updateGallery();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener(
        "scroll",
        handleScroll,
      );

      window.removeEventListener(
        "resize",
        handleResize,
      );
    };
  }, []);

  const activeImage = galleryImages[activeIndex];

  const openLightbox = () => {
    setLightboxIndex(activeIndex);
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
  };

  const showPreviousImage = () => {
    setLightboxIndex((current) => {
      if (current === null) return null;

      return current === 0
        ? galleryImages.length - 1
        : current - 1;
    });
  };

  const showNextImage = () => {
    setLightboxIndex((current) => {
      if (current === null) return null;

      return current === galleryImages.length - 1
        ? 0
        : current + 1;
    });
  };

  return (
    <>
      <section
        className="atc-gallery"
        id="gallery"
        aria-labelledby="gallery-heading"
      >
        {/* HEADER */}
        <div className="atc-gallery-header">
          <div>
            <div className="atc-gallery-eyebrow">
              <span aria-hidden="true" />
              INSTITUTE GALLERY
            </div>

            <h2 id="gallery-heading">
              A closer look at
              <br />
              <em>ATC Kataram.</em>
            </h2>
          </div>

          <p>
            Explore the institute, training environment
            and practical learning spaces through a
            guided visual journey.
          </p>
        </div>

        {/* SCROLL STORY */}
        <div
          ref={storyRef}
          className="atc-gallery-story"
        >
          {/* NINE REAL SCROLL STAGES */}
          <div
            className="atc-gallery-scroll-stages"
            aria-hidden="true"
          >
            {galleryImages.map((image, index) => (
              <div
                key={image.src}
                className={`atc-gallery-stage-step ${
                  index === activeIndex
                    ? "is-active"
                    : ""
                }`}
              />
            ))}
          </div>

          {/* STICKY VISUAL EXPERIENCE */}
          <div className="atc-gallery-sticky">
            <div className="atc-gallery-stage">
              {/* TOP PROGRESS */}
              <div
                className="atc-gallery-progress"
                aria-hidden="true"
              >
                <motion.div
                  className="atc-gallery-progress-fill"
                  animate={{
                    scaleX: progress,
                  }}
                  transition={{
                    duration: 0.2,
                    ease: "linear",
                  }}
                />
              </div>

              {/* IMAGE FRAME */}
              <div className="atc-gallery-photo-wrap">
                <motion.div
                  key={activeImage.src}
                  className="atc-gallery-image-layer"
                  initial={{
                    opacity: 0,
                    scale: 1.018,
                    y: 12,
                  }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                    y: 0,
                  }}
                  transition={{
                    duration: 0.5,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  onClick={openLightbox}
                  role="button"
                  tabIndex={0}
                  aria-label={`Open ${activeImage.label} image in full screen`}
                  onKeyDown={(event) => {
                    if (
                      event.key === "Enter" ||
                      event.key === " "
                    ) {
                      event.preventDefault();
                      openLightbox();
                    }
                  }}
                >
                  <img
                    className="atc-gallery-photo"
                    src={activeImage.src}
                    alt={`${activeImage.label} - Government ATC Kataram`}
                    draggable={false}
                  />

                  <div
                    className="atc-gallery-image-overlay"
                    aria-hidden="true"
                  />

                  <div
                    className="atc-gallery-counter"
                    aria-hidden="true"
                  >
                    <strong>
                      {String(activeIndex + 1).padStart(
                        2,
                        "0",
                      )}
                    </strong>

                    <i />

                    <span>
                      {String(
                        galleryImages.length,
                      ).padStart(2, "0")}
                    </span>
                  </div>

                  <div className="atc-gallery-image-label">
                    <span>{activeImage.label}</span>
                  </div>
                </motion.div>
              </div>

              {/* LOCATION / CONTEXT */}
              <motion.div
                className="atc-gallery-location"
                key={`${activeImage.src}-location`}
                initial={{
                  opacity: 0,
                  y: 8,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.4,
                  delay: 0.06,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <div
                  className="atc-gallery-location-icon"
                  aria-hidden="true"
                >
                  <MapPin
                    size={16}
                    strokeWidth={1.7}
                  />
                </div>

                <div>
                  <span>
                    {activeImage.location}
                  </span>

                  <p>
                    Near the Old Vegetable Market,
                    Kataram, Jayashankar
                    Bhupalpally, Telangana
                  </p>
                </div>
              </motion.div>

              {/* SCROLL INDICATOR */}
              <div
                className="atc-gallery-scroll-note"
                aria-hidden="true"
              >
                <span className="atc-gallery-scroll-line" />

                <span>
                  {activeIndex ===
                  galleryImages.length - 1
                    ? "CONTINUE"
                    : "SCROLL TO EXPLORE"}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* GALLERY LIGHTBOX */}
      <GalleryLightbox
        images={galleryImages.map(
          (image) => image.src,
        )}
        activeIndex={lightboxIndex}
        onClose={closeLightbox}
        onPrevious={showPreviousImage}
        onNext={showNextImage}
      />
    </>
  );
}

export default Gallery;