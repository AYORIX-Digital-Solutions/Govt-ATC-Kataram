import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { useEffect } from "react";

type GalleryLightboxProps = {
  images: string[];
  activeIndex: number | null;
  onClose: () => void;
  onPrevious: () => void;
  onNext: () => void;
};

function GalleryLightbox({
  images,
  activeIndex,
  onClose,
  onPrevious,
  onNext,
}: GalleryLightboxProps) {
  useEffect(() => {
    if (activeIndex === null) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }

      if (event.key === "ArrowLeft") {
        onPrevious();
      }

      if (event.key === "ArrowRight") {
        onNext();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [activeIndex, onClose, onPrevious, onNext]);

  if (activeIndex === null || !images[activeIndex]) {
    return null;
  }

  return (
    <AnimatePresence>
      <motion.div
        className="gallery-lightbox"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        role="dialog"
        aria-modal="true"
        aria-label="Gallery image viewer"
      >
        <button
          type="button"
          className="gallery-lightbox-close"
          onClick={onClose}
          aria-label="Close image viewer"
        >
          <X size={22} />
        </button>

        <button
          type="button"
          className="gallery-lightbox-arrow gallery-lightbox-prev"
          onClick={(event) => {
            event.stopPropagation();
            onPrevious();
          }}
          aria-label="Previous image"
        >
          <ChevronLeft size={28} />
        </button>

        <motion.div
          className="gallery-lightbox-image-wrap"
          initial={{ scale: 0.96, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{
            duration: 0.3,
            ease: [0.22, 1, 0.36, 1],
          }}
          onClick={(event) => event.stopPropagation()}
        >
          <img
            src={images[activeIndex]}
            alt={`ATC Kataram gallery image ${activeIndex + 1}`}
            className="gallery-lightbox-image"
          />

          <div className="gallery-lightbox-counter">
            {activeIndex + 1} / {images.length}
          </div>
        </motion.div>

        <button
          type="button"
          className="gallery-lightbox-arrow gallery-lightbox-next"
          onClick={(event) => {
            event.stopPropagation();
            onNext();
          }}
          aria-label="Next image"
        >
          <ChevronRight size={28} />
        </button>
      </motion.div>
    </AnimatePresence>
  );
}

export default GalleryLightbox;