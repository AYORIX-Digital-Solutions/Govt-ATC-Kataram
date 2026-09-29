import { motion } from "framer-motion";
import {
  ArrowUpRight,
  MapPin,
  Phone,
  ArrowUp,
} from "lucide-react";

const quickLinks = [
  { label: "About", href: "#about" },
  { label: "Courses", href: "#trades" },
  { label: "Admissions", href: "#admissions" },
  { label: "Facilities", href: "#facilities" },
  { label: "Notices", href: "#notices" },
  { label: "Gallery", href: "#gallery" },
];

export default function Footer() {
  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="site-footer">
      <div className="footer-main">
        <div className="footer-container">

          {/* BRAND */}
          <motion.div
            className="footer-brand"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="footer-brand-mark">
              <img
                src="/images/logo.webp"
                alt="Government ATC Kataram"
              />
            </div>

            <div className="footer-brand-name">
              <span>GOVERNMENT</span>
              <strong>ATC KATARAM</strong>
              <small>Jayashankar Bhupalpally, Telangana</small>
            </div>

            <p>
              Advanced technical skill training focused on practical learning,
              modern technologies and industry-oriented skills.
            </p>
          </motion.div>

          {/* QUICK LINKS */}
          <motion.div
            className="footer-links"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <span className="footer-label">QUICK LINKS</span>

            <nav>
              {quickLinks.map((link, index) => (
                <a key={link.href} href={link.href}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  {link.label}
                  <ArrowUpRight size={13} />
                </a>
              ))}
            </nav>
          </motion.div>

          {/* CONTACT */}
          <motion.div
            className="footer-contact"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="footer-label">CONTACT</span>

            <a href="tel:9703113881" className="footer-contact-item">
              <Phone size={16} />
              <div>
                <small>PHONE</small>
                <strong>97031 13881</strong>
              </div>
            </a>

            <a href="#contact" className="footer-contact-item">
              <MapPin size={16} />
              <div>
                <small>ADDRESS</small>
                <strong>
                  KATARAM, JAYASHANKAR BHUPALPALLY,
                  <br />
                  Telangana – 505503
                </strong>
              </div>
            </a>
          </motion.div>

        </div>
      </div>

      {/* LOWER BAR */}
      <div className="footer-bottom">
        <div className="footer-bottom-container">

          <span>
            © {new Date().getFullYear()} Government ATC Kataram.
            All rights reserved.
          </span>

          <span className="footer-government">
            GOVERNMENT ADVANCED TECHNOLOGY CENTRE
          </span>

          <motion.button
            className="footer-top"
            onClick={scrollTop}
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Back to top"
          >
            <ArrowUp size={16} />
          </motion.button>

        </div>
      </div>
    </footer>
  );
}


