import { motion } from "framer-motion";
import {
  Cpu,
  MonitorCog,
  Bot,
  Settings2,
  BatteryCharging,
  Monitor,
  ArrowUpRight,
} from "lucide-react";

const facilities = [
  {
    number: "01",
    icon: Cpu,
    title: "CNC Machining Workshop",
    text: "Practical training in CNC turning and machining concepts, machine operation, CNC programming and precision manufacturing.",
  },
  {
    number: "02",
    icon: MonitorCog,
    title: "CAD / Mechanical Design Laboratory",
    text: "Training in engineering drawing, CAD applications, 2D and 3D modelling, mechanical component design and virtual verification.",
  },
  {
    number: "03",
    icon: Bot,
    title: "Robotics & Digital Manufacturing",
    text: "Hands-on learning in industrial robotics, automated production, digital manufacturing and robot programming concepts.",
  },
  {
    number: "04",
    icon: Settings2,
    title: "Automation Laboratory",
    text: "Practical exposure to process control, sensors, actuators, automation systems and industrial control concepts.",
  },
  {
    number: "05",
    icon: BatteryCharging,
    title: "Electric Vehicle Laboratory",
    text: "Training in EV components, battery systems, electric motors, charging systems, maintenance and diagnostics.",
  },
  {
    number: "06",
    icon: Monitor,
    title: "Computer Laboratory",
    text: "Computer-based technical training, CAD and design applications, digital learning and technical software applications.",
  },
];

function Facilities() {
  return (
    <section id="facilities" className="facilities-section">
      <div className="facilities-container">

        {/* Header */}
        <motion.div
          className="facilities-header"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.65 }}
        >
          <div>
            <div className="section-eyebrow">
              <span />
              FACILITIES & LABORATORIES
            </div>

            <h2>
              Learn with modern
              <span> tools and technology.</span>
            </h2>
          </div>

          <p>
            Government ATC Kataram provides practical learning
            environments across advanced manufacturing, design,
            automation, robotics, EV technology and digital training.
          </p>
        </motion.div>

        {/* Facilities Grid */}
        <div className="facilities-grid">
          {facilities.map((facility, index) => {
            const Icon = facility.icon;

            return (
              <motion.article
                key={facility.number}
                className="facility-card"
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
                  amount: 0.15,
                }}
                transition={{
                  duration: 0.55,
                  delay: index * 0.07,
                }}
                whileHover={{
                  y: -5,
                }}
              >
                <div className="facility-top">
                  <span className="facility-number">
                    {facility.number}
                  </span>

                  <div className="facility-icon">
                    <Icon size={20} />
                  </div>
                </div>

                <h3>{facility.title}</h3>

                <p>{facility.text}</p>

                <div className="facility-line" />
              </motion.article>
            );
          })}
        </div>

        {/* Bottom statement */}
        <motion.div
          className="facilities-bottom"
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.6,
          }}
        >
          <p>
            Practical training areas are designed to support
            hands-on learning and exposure to modern technical
            equipment and applications.
          </p>

          <a
            href="#gallery"
            className="facilities-link"
          >
            View Campus
            <ArrowUpRight size={16} />
          </a>
        </motion.div>

      </div>
    </section>
  );
}

export default Facilities;