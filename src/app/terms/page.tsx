import Link from "next/link";

export const metadata = {
  title: "Terms & Conditions | Rely Tech Serve",
  description: "Terms and conditions of use for the Rely Tech Serve website and services.",
};

export default function TermsPage() {
  return (
    <div>
      <section className="bg-gradient-to-br from-navy-900 to-primary-950 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-white">Terms & Conditions</h1>
          <p className="mt-4 text-xl text-slate-300 max-w-2xl">
            Last updated: {new Date().toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" })}
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-slate prose-lg max-w-none">
          <h2>1. Introduction</h2>
          <p>
            Welcome to Rely Tech Serve (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;). These Terms and Conditions govern your use
            of our website at relytechserve.com and our technology consulting services. By accessing
            or using our website and services, you agree to be bound by these terms.
          </p>

          <h2>2. Services</h2>
          <p>
            Rely Tech Serve provides technology consulting, automation, AI solutions, digital
            transformation, cloud engineering, full stack development, and related services. The
            scope, deliverables, and terms of each engagement are set out in separate agreements
            or statements of work.
          </p>

          <h2>3. Use of Website</h2>
          <p>You agree to use this website only for lawful purposes and in accordance with these
            terms. You must not:</p>
          <ul>
            <li>Use the website in any way that violates applicable laws or regulations</li>
            <li>Transmit any harmful, offensive, or unlawful content</li>
            <li>Attempt to gain unauthorized access to our systems or networks</li>
            <li>Interfere with or disrupt the website or servers</li>
            <li>Use automated systems to scrape or collect data without our consent</li>
          </ul>

          <h2>4. Intellectual Property</h2>
          <p>
            All content on this website, including text, graphics, logos, images, and software, is
            the property of Rely Tech Serve or its licensors and is protected by copyright and
            other intellectual property laws. You may not reproduce, distribute, or create
            derivative works without our written permission.
          </p>

          <h2>5. Contact Form and Communications</h2>
          <p>
            When you submit a contact form or communicate with us, you consent to us storing and
            processing your information in accordance with our{" "}
            <Link href="/privacy" className="text-primary-600 hover:underline">Privacy Policy</Link>.
            We will use your contact details to respond to your enquiries and provide our services.
          </p>

          <h2>6. Limitation of Liability</h2>
          <p>
            To the fullest extent permitted by law, Rely Tech Serve shall not be liable for any
            indirect, incidental, special, consequential, or punitive damages arising from your
            use of this website or our services. Our liability for any claim shall not exceed the
            fees paid by you for the relevant services.
          </p>

          <h2>7. Disclaimer</h2>
          <p>
            The information on this website is provided for general information purposes only. We
            make no warranties, express or implied, regarding the accuracy, completeness, or
            suitability of the information. Professional advice should be sought for specific
            business decisions.
          </p>

          <h2>8. Links to Third-Party Sites</h2>
          <p>
            Our website may contain links to third-party websites. We are not responsible for the
            content or practices of those sites. Your use of third-party sites is at your own risk.
          </p>

          <h2>9. Changes</h2>
          <p>
            We may update these Terms and Conditions from time to time. The &quot;Last updated&quot; date
            at the top indicates when changes were last made. Continued use of the website after
            changes constitutes acceptance of the updated terms.
          </p>

          <h2>10. Governing Law</h2>
          <p>
            These terms are governed by the laws of England and Wales. Any disputes shall be
            subject to the exclusive jurisdiction of the courts of England and Wales.
          </p>

          <h2>11. Contact</h2>
          <p>
            For questions about these Terms and Conditions, please contact us at{" "}
            <a href="mailto:info@relytechserve.com" className="text-primary-600 hover:underline">
              info@relytechserve.com
            </a>
            , or write to us at Brookfield Court Selby Road, Garforth, Leeds, United Kingdom, LS25
            1NB.
          </p>
        </div>
      </section>
    </div>
  );
}
