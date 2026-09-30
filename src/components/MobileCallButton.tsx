import { Phone } from "lucide-react";

function MobileCallButton() {
  return (
    <a
      href="tel:9703113881"
      className="mobile-call-button"
      aria-label="Call Government ATC Kataram"
    >
      <Phone size={18} strokeWidth={2} />

      <span>Call Institute</span>
    </a>
  );
}

export default MobileCallButton;