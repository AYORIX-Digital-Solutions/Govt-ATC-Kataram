import { motion } from "framer-motion";
import {
  ArrowDown,
  ArrowRight,
  MapPin,
  ShieldCheck,
  Wrench,
} from "lucide-react";

function Hero() {
  const scrollToCourses = () => {
    document.querySelector("#trades")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  const scrollToAbout = () => {
    document.querySelector("#about")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <section id="top" className="hero-section">

      {/* Decorative background lines */}
      <div className="hero-grid-lines" aria-hidden="true">
        <span />
        <span />
        <span />
      </div>

      <div className="hero-container">

        <div className="hero-layout">

          {/* LEFT CONTENT */}
          <motion.div
            className="hero-content"
            initial="hidden"
            animate="show"
            variants={{
              hidden: {},
              show: {
                transition: {
                  staggerChildren: 0.09,
                  delayChildren: 0.12,
                },
              },
            }}
          >
            <motion.div
              className="hero-eyebrow"
              variants={{
                hidden: { opacity: 0, x: -18 },
                show: {
                  opacity: 1,
                  x: 0,
                  transition: {
                    duration: 0.55,
                    ease: [0.22, 1, 0.36, 1],
                  },
                },
              }}
            >
              <span className="eyebrow-line" />
              <span>ADVANCED TECHNOLOGY CENTRE</span>
            </motion.div>

            <motion.h1
              variants={{
                hidden: { opacity: 0, y: 25 },
                show: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 0.75,
                    ease: [0.22, 1, 0.36, 1],
                  },
                },
              }}
            >
               Learn advanced
              <span> technologies. Build your future.</span>
            </motion.h1>

            <motion.p
              className="hero-description"
              variants={{
                hidden: { opacity: 0, y: 18 },
                show: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 0.6,
                  },
                },
              }}
            >
              Government ATC Kataram provides practical,
              industry-oriented technical training in advanced
              manufacturing, automation, robotics, mechanical
              design and electric vehicle technologies.
            </motion.p>

            <motion.div
              className="hero-actions"
              variants={{
                hidden: { opacity: 0, y: 15 },
                show: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 0.55,
                  },
                },
              }}
            >
              <motion.button
                className="hero-primary-btn"
                onClick={scrollToCourses}
                whileHover={{
                  y: -3,
                  boxShadow: "0 14px 30px rgba(25, 47, 79, 0.18)",
                }}
                whileTap={{ scale: 0.97 }}
              >
                Explore Courses
                <ArrowRight size={17} />
              </motion.button>

              <motion.button
                className="hero-secondary-btn"
                onClick={scrollToAbout}
                whileHover={{ x: 4 }}
                whileTap={{ scale: 0.98 }}
              >
                About the Centre
                <ArrowRight size={16} />
              </motion.button>
            </motion.div>

            {/* Quick information */}
            <motion.div
              className="hero-meta"
              variants={{
                hidden: { opacity: 0 },
                show: {
                  opacity: 1,
                  transition: {
                    duration: 0.6,
                  },
                },
              }}
            >
              <div className="hero-meta-item">
                <ShieldCheck size={17} />
                <span>NSQF-aligned training</span>
              </div>

              <div className="hero-meta-divider" />

              <div className="hero-meta-item">
                <Wrench size={17} />
                <span>Hands-on practical learning</span>
              </div>
            </motion.div>
          </motion.div>

          {/* RIGHT IMAGE */}
          <motion.div
            className="hero-visual"
            initial={{
              opacity: 0,
              y: 28,
              scale: 0.985,
            }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            transition={{
              duration: 0.85,
              delay: 0.18,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <div className="hero-image-frame">

              <motion.img
                src="/images/hero.webp"
                alt="Government ATC Kataram"
                initial={{ scale: 1.08 }}
                animate={{ scale: 1 }}
                transition={{
                  duration: 1.2,
                  delay: 0.2,
                  ease: [0.22, 1, 0.36, 1],
                }}
              />

              <div className="hero-image-overlay" />

              {/* Location card */}
              <motion.div
                className="hero-location-card"
                initial={{
                  opacity: 0,
                  y: 18,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay: 0.75,
                  duration: 0.55,
                }}
              >
                <div className="location-icon">
                  <MapPin size={17} />
                </div>

                <div>
                  <span>LOCATED AT</span>
                  <strong>Kataram, Telangana</strong>
                </div>
              </motion.div>

              {/* Image index */}
              <motion.div
                className="hero-image-index"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.9 }}
              >
                <span>01</span>
                <i />
                <span>ATC</span>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Bottom information rail */}
        <motion.div
          className="hero-info-rail"
          initial={{
            opacity: 0,
            y: 18,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 0.65,
            duration: 0.6,
          }}
        >
          <div className="hero-info-cell">
            <span>LOCATION</span>
            <strong>Kataram</strong>
          </div>

          <div className="hero-info-cell">
            <span>MINIMUM QUALIFICATION</span>
            <strong>10th Pass</strong>
          </div>

          <div className="hero-info-cell">
            <span>COURSE DURATION</span>
            <strong>1 – 2 Years</strong>
          </div>

          <motion.button
            className="hero-scroll"
            onClick={scrollToCourses}
            whileHover={{ y: 3 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Scroll to courses"
          >
            <ArrowDown size={18} />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;