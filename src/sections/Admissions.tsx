import { motion } from "framer-motion";
import {
  FileCheck2,
  Globe2,
  ClipboardList,
  UserCheck,
  ArrowUpRight,
} from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Globe2,
    title: "Check the notification",
    text: "Follow the latest official Telangana ITI/ATC admission notification for current dates and eligibility rules.",
  },
  {
    number: "02",
    icon: ClipboardList,
    title: "Register & apply",
    text: "Complete the prescribed online admission process and provide the required educational and personal details.",
  },
  {
    number: "03",
    icon: FileCheck2,
    title: "Selection & allotment",
    text: "Select your preferred ATC and trade and participate in the applicable selection or allotment process.",
  },
  {
    number: "04",
    icon: UserCheck,
    title: "Report & verify",
    text: "Report to the allotted institute and complete document verification and admission formalities.",
  },
];

function Admissions() {
  return (
    <section id="admissions" className="admissions-section">
      <div className="admissions-container">

        <motion.div
          className="admissions-header"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.65 }}
        >
          <div>
            <div className="section-eyebrow">
              <span />
              ADMISSIONS
            </div>

            <h2>
              Start your journey
              <span> with the right information.</span>
            </h2>
          </div>

          <p>
            Admission to Government ATC Kataram is conducted according
            to the applicable Telangana ITI/ATC admission process and
            prescribed eligibility rules.
          </p>
        </motion.div>

        <div className="admissions-steps">
          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <motion.div
                key={step.number}
                className="admission-step"
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.55,
                  delay: index * 0.08,
                }}
              >
                <div className="admission-step-top">
                  <span className="admission-number">
                    {step.number}
                  </span>

                  <div className="admission-icon">
                    <Icon size={19} />
                  </div>
                </div>

                <h3>{step.title}</h3>

                <p>{step.text}</p>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          className="admissions-note"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div>
            <span>IMPORTANT</span>

            <p>
              For the exact current academic year's dates, fees,
              reservation rules and admission website, students should
              follow the latest official notification.
            </p>
          </div>

          <a
            href="#contact"
            className="admissions-link"
          >
            Contact the Centre
            <ArrowUpRight size={16} />
          </a>
        </motion.div>

      </div>
    </section>
  );
}

export default Admissions;