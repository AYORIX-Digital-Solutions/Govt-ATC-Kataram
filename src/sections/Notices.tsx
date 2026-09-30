import { motion } from "framer-motion";
import {
  ArrowUpRight,
  FileText,
  RefreshCw,
} from "lucide-react";
import { useEffect, useState } from "react";

type Notice = {
  id?: string;
  date: string;
  category: string;
  title: string;
  description: string;
  link?: string;
};

function formatDate(dateString: string) {
  if (!dateString) return "";

  const date = new Date(dateString);

  if (Number.isNaN(date.getTime())) {
    return dateString;
  }

  return date.toLocaleDateString("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
}

function Notices() {
  const [notices, setNotices] = useState<Notice[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const fetchNotices = async () => {
    try {
      setLoading(true);
      setError(false);

      const response = await fetch(
        `/api/notices?cache=${Date.now()}`,
        {
          cache: "no-store",
        },
      );

      if (!response.ok) {
        throw new Error("Failed to fetch notices");
      }

      const data: Notice[] = await response.json();

      const sortedNotices = data
        .filter((notice) => notice.title?.trim())
        .sort((a, b) => {
          const dateDifference =
            new Date(b.date).getTime() -
            new Date(a.date).getTime();

          if (dateDifference !== 0) {
            return dateDifference;
          }

          return (
            new Date(b.id || "").getTime() -
            new Date(a.id || "").getTime()
          );
        });

      // Display only the latest notice
      setNotices(sortedNotices.slice(0, 1));
    } catch (err) {
      console.error("Notice fetch error:", err);
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchNotices();
  }, []);

  return (
    <section
      id="notices"
      className="notices-section"
      aria-labelledby="notices-heading"
    >
      <div className="notices-container">
        {/* Header */}
        <motion.div
          className="notices-header"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
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
              <span aria-hidden="true" />
              NOTICE BOARD
            </div>

            <h2 id="notices-heading">
              Latest updates
              <span> from the centre.</span>
            </h2>
          </div>

          <p>
            Important admissions, training, examination and
            institute-related updates will be published here.
          </p>
        </motion.div>

        {/* Loading */}
        {loading && (
          <div
            className="notices-state"
            role="status"
            aria-live="polite"
          >
            <RefreshCw
              size={20}
              className="notice-loading-icon"
              aria-hidden="true"
            />

            <p>Loading latest notices...</p>
          </div>
        )}

        {/* Error */}
        {!loading && error && (
          <div
            className="notices-state"
            role="alert"
          >
            <FileText
              size={22}
              aria-hidden="true"
            />

            <p>
              Notices could not be loaded right now.
              <br />
              Please check again later.
            </p>

            <button
              type="button"
              className="notice-retry"
              onClick={fetchNotices}
            >
              Try again
            </button>
          </div>
        )}

        {/* Empty */}
        {!loading &&
          !error &&
          notices.length === 0 && (
            <div className="notices-state">
              <FileText
                size={22}
                aria-hidden="true"
              />

              <p>
                Important notices and updates
                <br />
                will be published here.
              </p>
            </div>
          )}

        {/* Latest Notice */}
        {!loading &&
          !error &&
          notices.length > 0 && (
            <div
              className="notices-board"
              aria-live="polite"
            >
              {notices.map((notice) => (
                <motion.article
                  key={notice.id || notice.title}
                  className="notice-row"
                  initial={{
                    opacity: 0,
                    x: 20,
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                  }}
                  viewport={{
                    once: true,
                    amount: 0.15,
                  }}
                  transition={{
                    duration: 0.45,
                  }}
                >
                  {/* Date */}
                  <div className="notice-row-date">
                    <time dateTime={notice.date}>
                      {formatDate(notice.date)}
                    </time>
                  </div>

                  {/* Content */}
                  <div className="notice-row-content">
                    <div className="notice-row-meta">
                      <span>{notice.category}</span>

                      <strong>NEW</strong>
                    </div>

                    <h3>{notice.title}</h3>

                    {notice.description && (
                      <p>{notice.description}</p>
                    )}
                  </div>

                  {/* Action */}
                  <div className="notice-row-action">
                    {notice.link ? (
                      <a
                        href={notice.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`View ${notice.title}`}
                      >
                        <ArrowUpRight
                          size={18}
                          aria-hidden="true"
                        />
                      </a>
                    ) : (
                      <span aria-hidden="true">
                        <FileText size={17} />
                      </span>
                    )}
                  </div>
                </motion.article>
              ))}
            </div>
          )}

        {/* Footer Status */}
        {!loading &&
          !error &&
          notices.length > 0 && (
            <motion.div
              className="notices-status"
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
                duration: 0.5,
              }}
            >
              <span
                className="notices-status-dot"
                aria-hidden="true"
              />

              <p>
                Notice information is updated
                through the centre's official
                notice system.
              </p>
            </motion.div>
          )}
      </div>
    </section>
  );
}

export default Notices;