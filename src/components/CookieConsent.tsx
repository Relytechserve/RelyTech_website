"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

const COOKIE_CONSENT_KEY = "relytech_cookie_consent";

export default function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem(COOKIE_CONSENT_KEY);
    if (!consent) {
      setShowBanner(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem(COOKIE_CONSENT_KEY, "accepted");
    setShowBanner(false);
  };

  const handleDecline = () => {
    localStorage.setItem(COOKIE_CONSENT_KEY, "declined");
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-slate-200 shadow-lg"
      role="dialog"
      aria-labelledby="cookie-consent-title"
      aria-describedby="cookie-consent-desc"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex-1">
            <h2 id="cookie-consent-title" className="font-semibold text-navy-900">
              We use cookies
            </h2>
            <p id="cookie-consent-desc" className="mt-1 text-sm text-slate-600">
              We use cookies and similar technologies to improve your experience and analyse site
              usage. By clicking &quot;Accept&quot;, you consent to our use of cookies.{" "}
              <Link href="/cookies" className="text-primary-600 hover:underline">
                Cookie Policy
              </Link>
            </p>
          </div>
          <div className="flex gap-3 shrink-0">
            <button
              type="button"
              onClick={handleDecline}
              className="px-4 py-2 text-slate-600 font-medium hover:text-slate-800 transition-colors"
            >
              Decline
            </button>
            <button
              type="button"
              onClick={handleAccept}
              className="px-5 py-2 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-colors"
            >
              Accept
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
