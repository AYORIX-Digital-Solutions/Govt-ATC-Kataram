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
    <section className="contact-section" id="contact">
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
            <span className="eyebrow-line" />
            FIND THE CENTRE
          </div>

          <h2>
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
              title="Government ATC Kataram location"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />

            <div className="map-overlay-label">
              <span className="map-live-dot" />
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
              <Building2 size={22} />
              <div>
                <span>INSTITUTE</span>
                <h3>Government ATC Kataram</h3>
              </div>
            </div>

            <div className="location-address">
              <MapPin size={18} />

              <p>
                Near the Old Vegetable Market,
                <br />
                KATARAM, JAYASHANKAR BHUPALPALLY,
                <br />
                Telangana – 505503
              </p>
            </div>

            <div className="location-divider" />

            <div className="location-contact">

              <a href="tel:9703113881" className="contact-detail">
                <div className="detail-icon">
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
                rel="noreferrer"
                className="directions-button"
              >
                <span>
                  <Navigation size={15} />
                  Open in Google Maps
                </span>

                <ArrowUpRight size={17} />
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