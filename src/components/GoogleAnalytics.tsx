"use client";

import Script from "next/script";
import { usePathname } from "next/navigation";
import { useEffect, Suspense } from "react";

const GA_MEASUREMENT_ID = "G-PW2H8496C5";

function RouteChangeTracker() {
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window !== "undefined" && "gtag" in window) {
      (window as { gtag: (a: string, b: string, c?: object) => void }).gtag(
        "config",
        GA_MEASUREMENT_ID,
        { page_path: pathname }
      );
    }
  }, [pathname]);

  return null;
}

export default function GoogleAnalytics() {
  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_MEASUREMENT_ID}');
        `}
      </Script>
      <Suspense fallback={null}>
        <RouteChangeTracker />
      </Suspense>
    </>
  );
}
