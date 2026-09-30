import { motion } from "framer-motion";
import { ArrowUpRight, Quote } from "lucide-react";

const message =
  "Our aim is to provide students with quality technical education, practical training and exposure to modern technologies that are relevant to today's industries.";

export default function PrincipalMessage() {
  return (
    <section
      className="principal-section"
      id="principal"
      aria-labelledby="principal-heading"
    >
      <div className="principal-container">
        <motion.div
          className="principal-image-wrap"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <div className="principal-image-frame">
            <img
              src="/images/principal.jpeg"
              alt="G. Srinivas, Principal of Government ATC Kataram"
              loading="lazy"
              decoding="async"
            />
          </div>

          <div className="principal-image-caption">
            <span>G. SRINIVAS</span>
            <strong>Principal</strong>
          </div>
        </motion.div>

        <motion.div
          className="principal-content"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: 0.7,
            delay: 0.1,
            ease: "easeOut",
          }}
        >
          <div className="section-eyebrow">
            <span
              className="eyebrow-line"
              aria-hidden="true"
            />
            PRINCIPAL'S MESSAGE
          </div>

          <div className="principal-heading">
            <Quote
              size={32}
              strokeWidth={1.4}
              aria-hidden="true"
            />

            <h2 id="principal-heading">
              Building skills
              <span>for a better future.</span>
            </h2>
          </div>

          <div className="principal-text">
            <p className="principal-lead">
              Welcome to Government Advanced Technology Centre, Kataram.
            </p>

            <p>{message}</p>

            <p>
              At the centre, we encourage students to learn through practical
              experience and develop the technical knowledge, discipline and
              skills required for their future careers. Our training areas
              include advanced manufacturing, CNC machining, mechanical design,
              robotics, automation and electric vehicle technologies.
            </p>

            <p>
              We believe that skill development plays an important role in
              creating confident and industry-ready young professionals.
              Through dedicated training and hands-on learning, we strive to
              support every student in building a strong foundation for their
              future.
            </p>
          </div>

          <div className="principal-signature">
            <div>
              <strong>G. Srinivas</strong>
              <span>Principal</span>
              <span>Government ATC Kataram</span>
            </div>

            <motion.a
              href="#contact"
              className="principal-contact-btn"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              Contact the Centre
              <ArrowUpRight
                size={16}
                aria-hidden="true"
              />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}