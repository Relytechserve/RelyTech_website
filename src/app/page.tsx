import Link from "next/link";
import {
  Cog6ToothIcon,
  CpuChipIcon,
  RocketLaunchIcon,
  CheckCircleIcon,
} from "@heroicons/react/24/outline";

const services = [
  {
    icon: Cog6ToothIcon,
    title: "Technology Consulting",
    description: "Strategic guidance for your technology roadmap and digital initiatives.",
  },
  {
    icon: CpuChipIcon,
    title: "Automation & AI",
    description: "Streamline operations with intelligent automation and AI-powered solutions.",
  },
  {
    icon: RocketLaunchIcon,
    title: "Digital Transformation",
    description: "Modernize your business for the digital-first era.",
  },
];

const whyChooseUs = [
  "Expertise in eCommerce and marketplace integration",
  "Enterprise-grade automation solutions",
  "Proven track record with SMEs and startups",
  "ROI-focused approach to technology investment",
  "End-to-end consulting and implementation",
];

const industries = [
  "eCommerce & Retail",
  "Manufacturing",
  "Healthcare",
  "Financial Services",
  "Startups & Scale-ups",
];

const testimonials = [
  {
    quote: "Rely Tech Serve transformed our operations with automation that saved us 20+ hours per week.",
    author: "Operations Director",
    company: "E-commerce Company",
  },
  {
    quote: "Strategic technology consulting that aligned perfectly with our growth objectives.",
    author: "CTO",
    company: "Enterprise Client",
  },
];

export default function HomePage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-navy-900 via-navy-800 to-primary-950">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] opacity-50" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight opacity-0 animate-fade-in">
              Technology Consulting,
              <span className="block text-primary-400 mt-2">Automation & Digital Transformation</span>
            </h1>
            <p className="mt-6 text-xl text-slate-300 leading-relaxed opacity-0 animate-fade-in animate-delay-200">
              Empower your business with strategic technology solutions. We help companies automate,
              scale, and transform for sustainable growth.
            </p>
            <div className="mt-10 flex flex-wrap gap-4 opacity-0 animate-fade-in animate-delay-300">
              <Link
                href="/contact"
                className="px-8 py-4 bg-primary-500 text-white font-semibold rounded-lg hover:bg-primary-400 transition-all shadow-lg shadow-primary-500/25"
              >
                Book Consultation
              </Link>
              <Link
                href="/contact"
                className="px-8 py-4 bg-white/10 text-white font-semibold rounded-lg border border-white/20 hover:bg-white/20 transition-all"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Summary */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-bold text-navy-900">About Rely Tech Serve</h2>
            <p className="mt-4 text-lg text-slate-600 leading-relaxed">
              We are a technology consulting firm focused on helping businesses leverage automation,
              AI, and digital transformation. With deep expertise in eCommerce, marketplace
              integration, and enterprise solutions, we deliver outcomes that drive growth and
              efficiency.
            </p>
            <Link
              href="/about"
              className="mt-6 inline-flex items-center text-primary-600 font-semibold hover:text-primary-700"
            >
              Learn more about us
              <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-navy-900 text-center">Our Services</h2>
          <p className="mt-4 text-lg text-slate-600 text-center max-w-2xl mx-auto">
            End-to-end technology solutions designed for your business outcomes.
          </p>
          <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, i) => (
              <div
                key={service.title}
                className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-slate-100"
              >
                <div className="w-12 h-12 rounded-lg bg-primary-100 flex items-center justify-center">
                  <service.icon className="w-6 h-6 text-primary-600" />
                </div>
                <h3 className="mt-5 text-xl font-semibold text-navy-900">{service.title}</h3>
                <p className="mt-3 text-slate-600">{service.description}</p>
                <Link
                  href="/services"
                  className="mt-4 inline-block text-primary-600 font-medium hover:text-primary-700"
                >
                  Learn more →
                </Link>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link
              href="/services"
              className="px-6 py-3 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-colors"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-navy-900">Why Choose Us</h2>
              <p className="mt-4 text-lg text-slate-600">
                We combine deep technical expertise with business acumen to deliver solutions that
                create real value.
              </p>
              <ul className="mt-8 space-y-4">
                {whyChooseUs.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircleIcon className="w-6 h-6 text-primary-500 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-12 lg:mt-0">
              <div className="bg-gradient-to-br from-primary-50 to-navy-900/5 p-10 rounded-2xl border border-primary-100">
                <h3 className="text-xl font-semibold text-navy-900">Industries We Serve</h3>
                <div className="mt-6 flex flex-wrap gap-3">
                  {industries.map((industry) => (
                    <span
                      key={industry}
                      className="px-4 py-2 bg-white rounded-lg text-slate-700 font-medium shadow-sm border border-slate-200"
                    >
                      {industry}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-navy-900 text-center">
            Trusted by Businesses
          </h2>
          <p className="mt-4 text-lg text-slate-600 text-center max-w-2xl mx-auto">
            See what our clients say about working with Rely Tech Serve.
          </p>
          <div className="mt-16 grid md:grid-cols-2 gap-8">
            {testimonials.map((t) => (
              <blockquote
                key={t.author}
                className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100"
              >
                <p className="text-lg text-slate-700 italic">&ldquo;{t.quote}&rdquo;</p>
                <footer className="mt-4">
                  <cite className="not-italic font-semibold text-navy-900">{t.author}</cite>
                  <span className="text-slate-500"> — {t.company}</span>
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-navy-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white">Ready to Transform Your Business?</h2>
          <p className="mt-4 text-xl text-slate-300">
            Book a free consultation and discover how we can help you automate, scale, and grow.
          </p>
          <div className="mt-10">
            <Link
              href="/contact"
              className="inline-block px-8 py-4 bg-primary-500 text-white font-semibold rounded-lg hover:bg-primary-400 transition-colors"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
