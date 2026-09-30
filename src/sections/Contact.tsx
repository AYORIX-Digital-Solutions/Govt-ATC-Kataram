import { motion } from "framer-motion";
import {
  ArrowUpRight,
  MapPin,
  Phone,
  Navigation,
  Building2,
} from "lucide-react";

const mapUrl =
  "https://www.google.com/maps/place/18%C2%B037'33.9%22N+79%C2%B056'32.3%22E/@18.6260819,79.9397327,17z";

const embedUrl =
  "https://www.google.com/maps?q=18.6260819,79.9423076&z=16&output=embed";

export default function Contact() {
  return (
    <section
      className="contact-section"
      id="contact"
      aria-labelledby="contact-heading"
    >
      <div className="contact-container">
        {/* HEADER */}
        <motion.div
          className="contact-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.7 }}
        >
          <div className="section-eyebrow">
            <span
              className="eyebrow-line"
              aria-hidden="true"
            />
            FIND THE CENTRE
          </div>

          <h2 id="contact-heading">
            Visit Government
            <span>ATC Kataram.</span>
          </h2>

          <p>
            Located near the Old Vegetable Market in Kataram,
            Jayashankar Bhupalpally, Telangana.
          </p>
        </motion.div>

        {/* MAIN LOCATION EXPERIENCE */}
        <motion.div
          className="location-experience"
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.8 }}
        >
          {/* MAP */}
          <div className="location-map">
            <iframe
              src={embedUrl}
              title="Government ATC Kataram location on Google Maps"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />

            <div className="map-overlay-label">
              <span
                className="map-live-dot"
                aria-hidden="true"
              />
              GOVERNMENT ATC KATARAM
            </div>

            <motion.div
              className="map-location-marker"
              animate={{
                scale: [1, 1.08, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              aria-hidden="true"
            >
              <MapPin size={21} />
            </motion.div>
          </div>

          {/* DETAILS */}
          <div className="location-details">
            <div className="location-number">
              <span>LOCATION</span>
              <strong>01</strong>
            </div>

            <div className="location-title">
              <Building2
                size={22}
                aria-hidden="true"
              />

              <div>
                <span>INSTITUTE</span>
                <h3>Government ATC Kataram</h3>
              </div>
            </div>

            <div className="location-address">
              <MapPin
                size={18}
                aria-hidden="true"
              />

              <p>
                Near the Old Vegetable Market,
                <br />
                KATARAM, JAYASHANKAR BHUPALPALLY,
                <br />
                Telangana – 505503
              </p>
            </div>

            <div
              className="location-divider"
              aria-hidden="true"
            />

            <div className="location-contact">
              <a
                href="tel:9703113881"
                className="contact-detail"
                aria-label="Call Government ATC Kataram at 97031 13881"
              >
                <div
                  className="detail-icon"
                  aria-hidden="true"
                >
                  <Phone size={16} />
                </div>

                <div>
                  <span>PHONE</span>
                  <strong>97031 13881</strong>
                </div>
              </a>

              <a
                href={mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="directions-button"
                aria-label="Open Government ATC Kataram in Google Maps"
              >
                <span>
                  <Navigation
                    size={15}
                    aria-hidden="true"
                  />
                  Open in Google Maps
                </span>

                <ArrowUpRight
                  size={17}
                  aria-hidden="true"
                />
              </a>
            </div>
          </div>
        </motion.div>

        {/* BOTTOM INFO */}
        <motion.div
          className="location-info-strip"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          <div>
            <span>INSTITUTE</span>
            <strong>Government ATC Kataram</strong>
          </div>

          <div>
            <span>DISTRICT</span>
            <strong>Jayashankar Bhupalpally</strong>
          </div>

          <div>
            <span>STATE</span>
            <strong>Telangana</strong>
          </div>

          <div>
            <span>PIN CODE</span>
            <strong>505503</strong>
          </div>
        </motion.div>
      </div>
    </section>
  );
}