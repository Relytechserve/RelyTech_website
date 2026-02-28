import Link from "next/link";
import {
  BuildingOffice2Icon,
  RocketLaunchIcon,
  ShoppingBagIcon,
  BuildingLibraryIcon,
} from "@heroicons/react/24/outline";

const solutions = [
  {
    icon: BuildingOffice2Icon,
    title: "SMEs",
    description:
      "Scalable technology solutions that fit your budget. Automate processes, integrate systems, and grow without the complexity of enterprise tools.",
    outcomes: ["Cost-effective automation", "Quick implementation", "ROI-focused delivery"],
  },
  {
    icon: BuildingLibraryIcon,
    title: "Enterprise",
    description:
      "Enterprise-grade solutions for complex environments. Integration, security, and scalability built in from day one.",
    outcomes: ["Enterprise security", "System integration", "Governance & compliance"],
  },
  {
    icon: ShoppingBagIcon,
    title: "eCommerce Businesses",
    description:
      "Optimize your online sales with marketplace integrations, automation, and data-driven insights.",
    outcomes: ["Multi-channel selling", "Order & inventory automation", "Analytics & insights"],
  },
  {
    icon: RocketLaunchIcon,
    title: "Startups",
    description:
      "Move fast without sacrificing quality. We help startups build the right foundation for growth.",
    outcomes: ["MVP development", "Scalable architecture", "Speed to market"],
  },
];

export const metadata = {
  title: "Solutions | Rely Tech Serve",
  description:
    "Technology solutions for SMEs, enterprises, eCommerce businesses, and startups. Focus on ROI and business outcomes.",
};

export default function SolutionsPage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-navy-900 to-primary-950 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-white">Solutions</h1>
          <p className="mt-4 text-xl text-slate-300 max-w-2xl">
            Tailored technology solutions for your business—with a focus on outcomes and ROI.
          </p>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {solutions.map((solution) => (
              <div
                key={solution.title}
                className="p-8 rounded-2xl border border-slate-200 hover:border-primary-200 hover:shadow-lg transition-all bg-white"
              >
                <div className="w-14 h-14 rounded-xl bg-primary-100 flex items-center justify-center">
                  <solution.icon className="w-7 h-7 text-primary-600" />
                </div>
                <h2 className="mt-5 text-2xl font-bold text-navy-900">{solution.title}</h2>
                <p className="mt-4 text-slate-600 leading-relaxed">{solution.description}</p>
                <ul className="mt-6 space-y-2">
                  {solution.outcomes.map((outcome) => (
                    <li key={outcome} className="flex items-center gap-2 text-slate-700">
                      <span className="w-2 h-2 rounded-full bg-primary-500" />
                      {outcome}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-20 bg-slate-50 rounded-2xl p-12 text-center">
            <h2 className="text-2xl font-bold text-navy-900">
              Ready to unlock business outcomes?
            </h2>
            <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
              Let&apos;s discuss how our solutions can deliver ROI for your business.
            </p>
            <Link
              href="/contact"
              className="mt-8 inline-block px-8 py-4 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-colors"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
