import Link from "next/link";

export const metadata = {
  title: "Privacy Policy | Rely Tech Serve",
  description: "Privacy policy for Rely Tech Serve - how we collect, use, and protect your personal data.",
};

export default function PrivacyPage() {
  return (
    <div>
      <section className="bg-gradient-to-br from-navy-900 to-primary-950 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-white">Privacy Policy</h1>
          <p className="mt-4 text-xl text-slate-300 max-w-2xl">
            Last updated: {new Date().toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" })}
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-slate prose-lg max-w-none">
          <h2>1. Introduction</h2>
          <p>
            Rely Tech Serve (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) is committed to protecting your privacy. This
            Privacy Policy explains how we collect, use, disclose, and safeguard your personal
            data when you visit our website relytechserve.com or use our services. We comply with
            the UK General Data Protection Regulation (UK GDPR) and the Data Protection Act 2018.
          </p>

          <h2>2. Data Controller</h2>
          <p>
            Rely Tech Serve is the data controller for the personal data we process. Our contact
            details: info@relytechserve.com, Brookfield Court Selby Road, Garforth, Leeds, United
            Kingdom, LS25 1NB.
          </p>

          <h2>3. Information We Collect</h2>
          <p>We may collect the following types of information:</p>
          <ul>
            <li>
              <strong>Contact form data:</strong> Name, email address, company name, and message
              when you submit our contact form
            </li>
            <li>
              <strong>Technical data:</strong> IP address, browser type, device type, pages
              visited, and referral source (via cookies and analytics)
            </li>
            <li>
              <strong>Communications:</strong> Records of correspondence when you contact us
            </li>
          </ul>

          <h2>4. How We Use Your Information</h2>
          <p>We use your information to:</p>
          <ul>
            <li>Respond to your enquiries and provide our services</li>
            <li>Send relevant marketing communications (with your consent)</li>
            <li>Analyse website usage to improve our site and services</li>
            <li>Comply with legal obligations</li>
            <li>Protect against fraud and misuse</li>
          </ul>

          <h2>5. Legal Basis for Processing</h2>
          <p>
            We process your data based on: (a) your consent (e.g. contact form, marketing); (b)
            performance of a contract; (c) our legitimate interests (e.g. website analytics,
            security); and (d) legal obligations.
          </p>

          <h2>6. Cookies and Analytics</h2>
          <p>
            We use cookies and similar technologies. For full details, please see our{" "}
            <Link href="/cookies" className="text-primary-600 hover:underline">Cookie Policy</Link>.
            We use Google Analytics to understand how visitors use our website.
          </p>

          <h2>7. Data Sharing</h2>
          <p>
            We may share your data with: (a) service providers (e.g. Formspree for contact forms,
            Google for analytics) who process data on our behalf; (b) professional advisers where
            required; and (c) law enforcement when legally required. We do not sell your personal
            data.
          </p>

          <h2>8. Data Retention</h2>
          <p>
            We retain contact form submissions and communications for as long as necessary to
            fulfil the purpose or as required by law. Analytics data is typically retained for 26
            months. You may request deletion of your data at any time.
          </p>

          <h2>9. Your Rights</h2>
          <p>Under UK GDPR, you have the right to:</p>
          <ul>
            <li>Access your personal data</li>
            <li>Rectify inaccurate data</li>
            <li>Erase your data (in certain circumstances)</li>
            <li>Restrict or object to processing</li>
            <li>Data portability</li>
            <li>Withdraw consent at any time</li>
            <li>Lodge a complaint with the ICO (ico.org.uk)</li>
          </ul>
          <p>
            To exercise these rights, contact us at{" "}
            <a href="mailto:info@relytechserve.com" className="text-primary-600 hover:underline">
              info@relytechserve.com
            </a>
            .
          </p>

          <h2>10. Security</h2>
          <p>
            We implement appropriate technical and organisational measures to protect your data
            against unauthorized access, loss, or misuse. However, no transmission over the
            internet is completely secure.
          </p>

          <h2>11. International Transfers</h2>
          <p>
            Some of our service providers (e.g. Google, Formspree) may process data outside the
            UK. We ensure appropriate safeguards (e.g. adequacy decisions, standard contractual
            clauses) are in place.
          </p>

          <h2>12. Changes</h2>
          <p>
            We may update this Privacy Policy from time to time. The &quot;Last updated&quot; date indicates
            when changes were last made. We encourage you to review this page periodically.
          </p>

          <h2>13. Contact</h2>
          <p>
            For privacy-related enquiries, contact us at{" "}
            <a href="mailto:info@relytechserve.com" className="text-primary-600 hover:underline">
              info@relytechserve.com
            </a>
            .
          </p>
        </div>
      </section>
    </div>
  );
}
