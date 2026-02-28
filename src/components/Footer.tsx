import Link from "next/link";

const footerLinks = {
  services: [
    "Cloud Engineering",
    "Full Stack Development",
    "Engineering Analytics",
    "Immersive Engineering",
    "Data Management",
    "Blockchain Development",
  ],
  important: [
    { href: "/about", label: "About Us" },
    { href: "/contact", label: "Contact" },
    { href: "/privacy", label: "Privacy Policy" },
    { href: "/terms", label: "Terms & Conditions" },
    { href: "/cookies", label: "Cookie Policy" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-navy-900 text-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="lg:col-span-1">
            <Link href="/" className="text-xl font-bold text-white">
              Rely Tech Serve
            </Link>
            <p className="mt-4 text-sm leading-relaxed max-w-xs">
              Technology consulting, automation, and digital transformation
              for forward-thinking businesses.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Our Services</h4>
            <ul className="space-y-2">
              {footerLinks.services.map((service) => (
                <li key={service}>
                  <Link href="/services" className="hover:text-white transition-colors">
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Important Link</h4>
            <ul className="space-y-3">
              {footerLinks.important.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Contact Info</h4>
            <p className="text-sm">
              Brookfield Court Selby Road, Garforth,
              <br />
              Leeds, United Kingdom, LS25 1NB
            </p>
            <p className="mt-3 text-sm">
              75, Green Street, Chorleywood, WD3 5QS
            </p>
            <p className="mt-3">
              <a
                href="mailto:info@relytechserve.com"
                className="hover:text-white transition-colors"
              >
                info@relytechserve.com
              </a>
            </p>
            <p className="mt-3">
              <a
                href="https://www.linkedin.com/company/relytechserve"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors inline-flex items-center gap-2"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
                LinkedIn
              </a>
            </p>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-navy-700 text-center">
          <p className="text-sm text-slate-500">
            © {new Date().getFullYear()} Rely Tech Serve. All Rights Reserved by Rely Tech Serve.
          </p>
          <div className="mt-4 flex justify-center gap-6 text-sm flex-wrap">
            <Link href="/privacy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-white transition-colors">
              Terms & Conditions
            </Link>
            <Link href="/cookies" className="hover:text-white transition-colors">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
