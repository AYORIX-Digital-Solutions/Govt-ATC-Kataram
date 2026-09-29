import { motion } from "framer-motion";

import {
  ArrowUpRight,
  Cpu,
  GraduationCap,
  Settings2,
} from "lucide-react";

const highlights = [
  {
    icon: Cpu,
    title: "Advanced Technologies",
    text: "Training in modern technologies used across today's manufacturing and technical industries.",
  },
  {
    icon: Settings2,
    title: "Practical Learning",
    text: "Hands-on exposure to machines, tools, workshops and technology-driven training environments.",
  },
  {
    icon: GraduationCap,
    title: "Industry-Oriented Skills",
    text: "Technical knowledge and workplace skills designed around evolving industrial requirements.",
  },
];

function About() {
  return (
    <section id="about" className="about-section">
      <div className="about-container">

        {/* Section heading */}
        <motion.div
          className="about-heading"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.65 }}
        >
          <div className="section-eyebrow">
            <span />
            ABOUT THE CENTRE
          </div>

          <h2>
            A place to learn,
            <span> practise and grow.</span>
          </h2>
        </motion.div>

        {/* Main content */}
        <div className="about-main">

          <motion.div
            className="about-intro"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.7 }}
          >
            <p className="about-lead">
              The Advanced Technology Centre (ATC) is a
              skill-development and training institute focused
              on providing students with industry-oriented
              technical skills and practical training.
            </p>

            <p>
              The institute focuses on modern manufacturing and
              emerging technologies such as CNC machining,
              CAD/design, robotics, automation, digital
              manufacturing and electric vehicles.
            </p>

            <p>
              The objective is to prepare students with the
              technical knowledge, practical skills and workplace
              discipline required by modern industries.
            </p>

            <motion.button
  className="hero-btn hero-btn-primary"
  whileTap={{ scale: 0.98 }}
  onClick={() =>
    document.querySelector("#trades")?.scrollIntoView({
      behavior: "smooth",
    })
  }
>
  Explore technical courses
  <ArrowUpRight size={17} />
</motion.button>
          </motion.div>

          {/* Highlights */}
          <div className="about-highlights">
            {highlights.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
                  className="about-highlight"
                  initial={{
                    opacity: 0,
                    y: 25,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                    amount: 0.2,
                  }}
                  transition={{
                    duration: 0.55,
                    delay: index * 0.1,
                  }}
                  whileHover={{
                    y: -4,
                  }}
                >
                  <div className="about-highlight-top">
                    <div className="about-icon">
                      <Icon size={19} />
                    </div>

                    <span>
                      0{index + 1}
                    </span>
                  </div>

                  <h3>{item.title}</h3>

                  <p>{item.text}</p>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Bottom statement */}
        <motion.div
          className="about-statement"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="about-statement-line" />

          <p>
            The ATC aims to bridge the gap between technical
            education and industrial requirements through
            hands-on training and modern technology.
          </p>
        </motion.div>

      </div>
    </section>
  );
}

export default About;