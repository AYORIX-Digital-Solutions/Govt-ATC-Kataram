import { motion } from "framer-motion";
import {
  BadgeCheck,
  Clock3,
  GraduationCap,
} from "lucide-react";

const courses = [
  {
    number: "01",
    title: "Artisan Using Advanced Tool",
    duration: "1 Year",
    qualification: "10th Pass",
    description:
      "Students are trained in advanced engineering tools, manufacturing practices, precision work and modern production methods.",
  },
  {
    number: "02",
    title:
      "Industrial Robotics and Digital Manufacturing Technician",
    duration: "1 Year",
    qualification: "10th Pass",
    description:
      "This course focuses on industrial robotics, digital manufacturing, automated production systems and modern manufacturing technologies.",
  },
  {
    number: "03",
    title: "Manufacturing Process Control and Automation",
    duration: "1 Year",
    qualification: "10th Pass",
    description:
      "Students learn about automation, process control, industrial equipment and automated manufacturing systems.",
  },
  {
    number: "04",
    title: "Advanced CNC Machining Technician",
    duration: "2 Years",
    qualification: "10th Pass",
    description:
      "Students receive practical training in CNC machines, machining operations, CNC programming, production processes and precision manufacturing.",
  },
  {
    number: "05",
    title:
      "Basic Designer and Virtual Verifier (Mechanical)",
    duration: "2 Years",
    qualification: "10th Pass",
    description:
      "This course focuses on mechanical design, CAD-based design, virtual verification and engineering drawing/design applications.",
  },
  {
    number: "06",
    title: "Mechanic Electric Vehicle",
    duration: "2 Years",
    qualification: "10th Pass",
    description:
      "Students are trained in electric vehicle systems, EV components, electrical systems, battery technology, diagnosis and maintenance.",
  },
];

function Courses() {
  return (
    <section
      id="trades"
      className="courses-section"
    >
      <div className="courses-container">
        {/* Header */}
        <motion.div
          className="courses-header"
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
            amount: 0.25,
          }}
          transition={{
            duration: 0.65,
          }}
        >
          <div>
            <div className="section-eyebrow">
              <span />
              COURSES &amp; TRADES
            </div>

            <h2>
              Technical training
              <span>
                {" "}
                for a changing world.
              </span>
            </h2>
          </div>

          <p>
            Explore the technical trades offered at Government
            ATC Kataram, designed around practical learning and
            modern industrial technologies.
          </p>
        </motion.div>

        {/* Course list */}
        <div className="courses-list">
          {courses.map((course, index) => (
            <motion.article
              key={course.number}
              className={`course-row ${
                index === 0
                  ? "course-featured"
                  : ""
              }`}
              initial={{
                opacity: 0,
                y: 22,
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
                delay: index * 0.06,
              }}
              whileHover={{
                x: 5,
              }}
            >
              {/* Number */}
              <div
                className="course-number"
                aria-hidden="true"
              >
                {course.number}
              </div>

              {/* Main content */}
              <div className="course-main">
                <h3>{course.title}</h3>

                <p>{course.description}</p>

                <div className="course-details">
                  <span>
                    <Clock3
                      size={14}
                      aria-hidden="true"
                    />
                    {course.duration}
                  </span>

                  <span>
                    <GraduationCap
                      size={14}
                      aria-hidden="true"
                    />
                    {course.qualification}
                  </span>
                </div>
              </div>

              {/* Side */}
              <div
                className="course-side"
                aria-hidden="true"
              >
                <BadgeCheck size={18} />
              </div>
            </motion.article>
          ))}
        </div>

        {/* Eligibility note */}
        <motion.div
          className="courses-note"
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.6,
          }}
        >
          <span>ELIGIBILITY</span>

          <p>
            The listed courses generally require a minimum
            qualification of 10th pass. Admission is subject to
            applicable rules and the latest official
            notification.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export default Courses;