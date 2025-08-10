import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function scrollToElementById(id: string) {
  const element = document.getElementById(id);
  if (!element) return false;
  element.scrollIntoView({ behavior: "smooth", block: "start" });
  return true;
}

export default function ScrollManager() {
  const location = useLocation();
  const { pathname, hash } = location;

  useEffect(() => {
    // If there is a hash, try to scroll to it with a few retries in case content hasn't rendered yet
    if (hash) {
      const targetId = decodeURIComponent(hash.replace(/^#/, ""));
      let attempts = 0;
      const maxAttempts = 20; // ~1s if interval is 50ms
      const interval = window.setInterval(() => {
        attempts += 1;
        const ok = scrollToElementById(targetId);
        if (ok || attempts >= maxAttempts) {
          window.clearInterval(interval);
        }
      }, 50);
      return () => window.clearInterval(interval);
    }

    // No hash: scroll to top on pathname change
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname, hash]);

  return null;
}


