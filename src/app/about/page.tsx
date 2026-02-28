import Link from "next/link";
import {
  LightBulbIcon,
  EyeIcon,
  BriefcaseIcon,
  SparklesIcon,
} from "@heroicons/react/24/outline";

export const metadata = {
  title: "About Us | Rely Tech Serve",
  description:
    "Learn about Rely Tech Serve's mission, vision, and expertise in eCommerce, automation, and enterprise solutions.",
};

export default function AboutPage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-navy-900 to-primary-950 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-white">About Us</h1>
          <p className="mt-4 text-xl text-slate-300 max-w-2xl">
            Technology consulting driven by expertise and outcomes.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <div className="w-12 h-12 rounded-lg bg-primary-100 flex items-center justify-center">
                <LightBulbIcon className="w-6 h-6 text-primary-600" />
              </div>
              <h2 className="mt-5 text-2xl font-bold text-navy-900">Our Mission</h2>
              <p className="mt-4 text-lg text-slate-600 leading-relaxed">
                To empower businesses with technology solutions that drive efficiency, growth, and
                competitive advantage. We believe in making automation and digital transformation
                accessible, practical, and measurable.
              </p>
            </div>
            <div>
              <div className="w-12 h-12 rounded-lg bg-primary-100 flex items-center justify-center">
                <EyeIcon className="w-6 h-6 text-primary-600" />
              </div>
              <h2 className="mt-5 text-2xl font-bold text-navy-900">Our Vision</h2>
              <p className="mt-4 text-lg text-slate-600 leading-relaxed">
                To be the trusted partner for businesses seeking to leverage technology for
                sustainable growth. We envision a future where every company—from startup to
                enterprise—can harness automation and AI to focus on what matters most.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership & Experience */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-navy-900">Experience & Leadership</h2>
          <p className="mt-4 text-lg text-slate-600 max-w-3xl">
            Our team brings deep industry experience in technology consulting, eCommerce,
            automation, and enterprise solutions. We combine technical excellence with business
            acumen to deliver results that matter.
          </p>
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "eCommerce & Marketplace Integration",
              "Automation & AI Solutions",
              "Enterprise Consulting",
              "Custom Software Development",
              "Digital Transformation",
              "System Integration",
            ].map((item) => (
              <div
                key={item}
                className="flex items-center gap-3 bg-white p-4 rounded-lg border border-slate-200"
              >
                <BriefcaseIcon className="w-5 h-5 text-primary-600 flex-shrink-0" />
                <span className="font-medium text-slate-800">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Credibility */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-primary-50 to-navy-900/5 p-12 rounded-2xl border border-primary-100">
            <div className="flex items-start gap-4">
              <SparklesIcon className="w-12 h-12 text-primary-600 flex-shrink-0" />
              <div>
                <h2 className="text-2xl font-bold text-navy-900">
                  Professional Credibility
                </h2>
                <p className="mt-4 text-slate-700 leading-relaxed">
                  Rely Tech Serve is built on a foundation of trust and excellence. We work with
                  SMEs, startups, and enterprise clients to deliver technology solutions that align
                  with business goals and deliver measurable ROI. Our approach is collaborative,
                  transparent, and outcome-focused.
                </p>
                <Link
                  href="/contact"
                  className="mt-6 inline-flex items-center text-primary-600 font-semibold hover:text-primary-700"
                >
                  Start a conversation
                  <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
