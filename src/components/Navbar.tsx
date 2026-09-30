import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRight,
  ChevronDown,
  Menu,
  X,
} from "lucide-react";

const navItems = [
  { label: "Home", href: "#top" },
  { label: "About", href: "#about" },
  { label: "Courses", href: "#trades" },
  { label: "Admissions", href: "#admissions" },
  { label: "Facilities", href: "#facilities" },
  { label: "Notices", href: "#notices" },
  { label: "Gallery", href: "#gallery" },
];

function Navbar() {
  const [open, setOpen] = useState(false);

  const scrollTo = (href: string) => {
    setOpen(false);

    window.setTimeout(() => {
      const target = document.getElementById(
        href.replace("#", ""),
      );

      if (!target) {
        return;
      }

      const navbar = document.querySelector(
        ".main-navbar",
      ) as HTMLElement | null;

      const navbarHeight = navbar?.offsetHeight ?? 0;

      const targetPosition =
        target.getBoundingClientRect().top +
        window.scrollY -
        navbarHeight -
        16;

      window.scrollTo({
        top: Math.max(0, targetPosition),
        behavior: "smooth",
      });
    }, 50);
  };

  return (
    <div className="site-navbar">
      {/* Government utility strip */}
      <div className="gov-strip">
        <div className="nav-container gov-strip-inner">
          <span>Government Advanced Technology Centre</span>

          <div className="gov-strip-right">
            <span>Skill Development</span>
            <span className="gov-dot" />
            <span>Industry-Oriented Training</span>
          </div>
        </div>
      </div>

      <motion.header
        className="main-navbar"
        initial={{ y: -24, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          duration: 0.65,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        <div className="nav-container nav-inner">
          {/* Brand */}
          <motion.button
            className="brand"
            onClick={() => scrollTo("#top")}
            whileTap={{ scale: 0.97 }}
            aria-label="Go to home"
          >
            <motion.div
              className="brand-logo"
              initial={{ opacity: 0, scale: 0.88 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                delay: 0.15,
                duration: 0.5,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <img
                src="/images/logo.webp"
                alt="Government ATC Kataram"
              />
            </motion.div>

            <div className="brand-copy">
              <span className="brand-small">
                GOVERNMENT
              </span>

              <span className="brand-title">
                ATC KATARAM
              </span>

              <span className="brand-location">
                Kataram, Telangana
              </span>
            </div>
          </motion.button>

          {/* Desktop navigation */}
          <nav className="desktop-nav">
            {navItems.map((item, index) => (
              <motion.button
                key={item.href}
                className="nav-link"
                onClick={() => scrollTo(item.href)}
                initial={{
                  opacity: 0,
                  y: -8,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay: 0.25 + index * 0.055,
                  duration: 0.4,
                }}
              >
                <span>{item.label}</span>
              </motion.button>
            ))}

            <motion.button
              className="nav-cta"
              onClick={() => scrollTo("#trades")}
              initial={{
                opacity: 0,
                x: 10,
              }}
              animate={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                delay: 0.55,
                duration: 0.5,
              }}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.97 }}
            >
              <span>Explore Courses</span>
              <ArrowRight size={16} />
            </motion.button>
          </nav>

          {/* Mobile menu button */}
          <motion.button
            className="mobile-menu-btn"
            onClick={() =>
              setOpen((value) => !value)
            }
            whileTap={{ scale: 0.92 }}
            aria-label={
              open
                ? "Close navigation"
                : "Open navigation"
            }
            aria-expanded={open}
          >
            {open ? (
              <X size={22} />
            ) : (
              <Menu size={22} />
            )}
          </motion.button>
        </div>

        {/* Mobile navigation */}
        <AnimatePresence>
          {open && (
            <motion.div
              className="mobile-menu"
              initial={{
                height: 0,
                opacity: 0,
              }}
              animate={{
                height: "auto",
                opacity: 1,
              }}
              exit={{
                height: 0,
                opacity: 0,
              }}
              transition={{
                duration: 0.35,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <div className="mobile-menu-inner">
                {navItems.map(
                  (item, index) => (
                    <motion.button
                      key={item.href}
                      className="mobile-nav-link"
                      onClick={() =>
                        scrollTo(item.href)
                      }
                      initial={{
                        opacity: 0,
                        x: -15,
                      }}
                      animate={{
                        opacity: 1,
                        x: 0,
                      }}
                      transition={{
                        delay: index * 0.045,
                      }}
                    >
                      <span>{item.label}</span>
                      <ChevronDown
                        size={16}
                      />
                    </motion.button>
                  ),
                )}

                <motion.button
                  className="mobile-nav-cta"
                  onClick={() =>
                    scrollTo("#trades")
                  }
                  whileTap={{
                    scale: 0.98,
                  }}
                >
                  Explore Courses
                  <ArrowRight size={17} />
                </motion.button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
    </div>
  );
}

export default Navbar;