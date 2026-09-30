import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const logoParts = [
  {
    className: "logo-part logo-part-top",
    initial: { opacity: 0, x: -35, y: -28, scale: 0.92 },
    animate: { opacity: 1, x: 0, y: 0, scale: 1 },
    delay: 0.05,
  },
  {
    className: "logo-part logo-part-right",
    initial: { opacity: 0, x: 35, y: -12, scale: 0.92 },
    animate: { opacity: 1, x: 0, y: 0, scale: 1 },
    delay: 0.14,
  },
  {
    className: "logo-part logo-part-left",
    initial: { opacity: 0, x: -38, y: 18, scale: 0.92 },
    animate: { opacity: 1, x: 0, y: 0, scale: 1 },
    delay: 0.23,
  },
  {
    className: "logo-part logo-part-bottom",
    initial: { opacity: 0, x: 28, y: 30, scale: 0.92 },
    animate: { opacity: 1, x: 0, y: 0, scale: 1 },
    delay: 0.32,
  },
];

function LoadingScreen() {
  const [progress, setProgress] = useState(0);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    const start = performance.now();
    const duration = 2000;

    let frame = 0;

    const animate = (time: number) => {
      const elapsed = time - start;
      const rawProgress = Math.min(elapsed / duration, 1);

      const easedProgress =
        1 - Math.pow(1 - rawProgress, 3);

      setProgress(Math.round(easedProgress * 100));

      if (rawProgress < 1) {
        frame = requestAnimationFrame(animate);
      }
    };

    frame = requestAnimationFrame(animate);

    const exitTimer = window.setTimeout(() => {
      setIsExiting(true);
    }, 1780);

    return () => {
      cancelAnimationFrame(frame);
      window.clearTimeout(exitTimer);
    };
  }, []);

  return (
    <motion.div
      className="premium-loader"
      initial={{ opacity: 1 }}
      animate={{
        opacity: isExiting ? 0 : 1,
      }}
      transition={{
        duration: 0.32,
        ease: [0.76, 0, 0.24, 1],
      }}
    >
      <div className="premium-loader-inner">

        {/* LOGO ASSEMBLY */}
        <div className="assembled-logo">

          {logoParts.map((part) => (
            <motion.div
              key={part.className}
              className={part.className}
              initial={part.initial}
              animate={part.animate}
              transition={{
                duration: 0.62,
                delay: part.delay,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <img
                src="/images/logo.webp"
                alt=""
                draggable={false}
              />
            </motion.div>
          ))}

          {/* Final complete logo lock */}
          <motion.div
            className="logo-final"
            initial={{
              opacity: 0,
              scale: 1.025,
              filter: "blur(3px)",
            }}
            animate={{
              opacity: 1,
              scale: 1,
              filter: "blur(0px)",
            }}
            transition={{
              duration: 0.28,
              delay: 0.72,
              ease: "easeOut",
            }}
          >
            <img
              src="/images/logo.webp"
              alt="Government ATC Kataram"
              draggable={false}
            />
          </motion.div>
        </div>

        {/* LOADING LINE */}
        <div className="premium-loader-progress">
          <div className="premium-loader-track">
            <motion.div
              className="premium-loader-fill"
              initial={{ scaleX: 0 }}
              animate={{
                scaleX: progress / 100,
              }}
              transition={{
                duration: 0.07,
                ease: "linear",
              }}
            />
          </div>

          <div className="premium-loader-meta">
            <span>GOVT ATC KATARAM</span>
            <span>{progress}%</span>
          </div>
        </div>
      </div>

      {/* Subtle cinematic sweep */}
      <motion.div
        className="premium-loader-sweep"
        initial={{ x: "-120%" }}
        animate={{ x: "120%" }}
        transition={{
          duration: 1.45,
          ease: [0.65, 0, 0.35, 1],
        }}
      />
    </motion.div>
  );
}

export default LoadingScreen;