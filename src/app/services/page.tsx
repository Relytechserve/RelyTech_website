"use client";

import { useState } from "react";
import Link from "next/link";
import {
  CloudArrowUpIcon,
  ViewfinderCircleIcon,
  CodeBracketIcon,
  CircleStackIcon,
  ChartBarIcon,
  CubeIcon,
} from "@heroicons/react/24/outline";

const services = [
  {
    icon: CloudArrowUpIcon,
    title: "Cloud Engineering",
    shortDesc: "Organisations realise and develop their full potential to compete.",
    fullDesc:
      "Rely Tech helps organisations realise and develop their full potential to compete in the digital age. Our cloud engineering solutions enable scalable, secure, and efficient infrastructure that drives business growth.",
  },
  {
    icon: ViewfinderCircleIcon,
    title: "Immersive Engineering",
    shortDesc: "Immersive, interactive & imaginative experiences.",
    fullDesc:
      "Welcome to the new game changers in today's connected world - Immersive, Interactive & imaginative experiences. We create cutting-edge AR, VR, and 3D solutions that transform how users interact with digital content.",
  },
  {
    icon: CodeBracketIcon,
    title: "Full Stack Development",
    shortDesc: "Strong technology expertise in full stack development.",
    fullDesc:
      "Rely Tech has strong technology expertise and combined knowledge of working in full stack development. From frontend to backend, we deliver end-to-end solutions that are performant, scalable, and maintainable.",
  },
  {
    icon: CircleStackIcon,
    title: "Data Management",
    shortDesc: "Immersive, interactive & imaginative data solutions.",
    fullDesc:
      "We help businesses harness the power of their data with robust data management solutions. From data architecture to pipelines and analytics, we ensure your data flows efficiently and drives informed decisions.",
  },
  {
    icon: ChartBarIcon,
    title: "Engineering Analytics",
    shortDesc: "Big data insights and business analytics.",
    fullDesc:
      "Rely Tech's big data insights and business analytics have helped companies increase competitiveness. We turn raw data into actionable insights that drive strategy and operational excellence.",
  },
  {
    icon: CubeIcon,
    title: "Blockchain Development",
    shortDesc: "Secure and transparent business operations.",
    fullDesc:
      "Leveraging blockchain technology for secure and transparent business operations. We build smart contracts, DApps, and blockchain integrations that add trust and efficiency to your processes.",
  },
];

export default function ServicesPage() {
  const [expanded, setExpanded] = useState<number | null>(null);

  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-navy-900 to-primary-950 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-white">Our Services</h1>
          <p className="mt-4 text-xl text-slate-300 max-w-2xl">
            Comprehensive technology solutions for your business. Cloud, Full Stack, Analytics,
            Immersive Engineering, Data Management & Blockchain.
          </p>
        </div>
      </section>

      {/* Service Cards */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-6">
            {services.map((service, i) => (
              <div
                key={service.title}
                className={`rounded-2xl border overflow-hidden transition-all ${
                  expanded === i
                    ? "border-primary-200 bg-primary-50/50 shadow-md"
                    : "border-slate-200 hover:border-primary-100"
                }`}
              >
                <button
                  type="button"
                  className="w-full text-left p-8 flex flex-col sm:flex-row sm:items-center gap-4"
                  onClick={() => setExpanded(expanded === i ? null : i)}
                >
                  <div className="w-14 h-14 rounded-xl bg-primary-100 flex items-center justify-center flex-shrink-0">
                    <service.icon className="w-7 h-7 text-primary-600" />
                  </div>
                  <div className="flex-1">
                    <h2 className="text-xl font-bold text-navy-900">{service.title}</h2>
                    <p className="mt-1 text-slate-600">{service.shortDesc}</p>
                  </div>
                  <span
                    className={`transform transition-transform flex-shrink-0 ${
                      expanded === i ? "rotate-180" : ""
                    }`}
                  >
                    <svg
                      className="w-6 h-6 text-primary-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </span>
                </button>
                {expanded === i && (
                  <div className="px-8 pb-8 pt-0 animate-fade-in">
                    <p className="text-slate-700 leading-relaxed">{service.fullDesc}</p>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Link
              href="/contact"
              className="inline-block px-8 py-4 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-colors"
            >
              Discuss Your Needs
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
