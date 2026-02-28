"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Cog6ToothIcon,
  CpuChipIcon,
  ShoppingCartIcon,
  CodeBracketIcon,
  ArrowPathIcon,
  PuzzlePieceIcon,
  ChartBarSquareIcon,
} from "@heroicons/react/24/outline";

const services = [
  {
    icon: Cog6ToothIcon,
    title: "Technology Consulting",
    shortDesc: "Strategic guidance for your technology roadmap.",
    fullDesc:
      "We provide strategic technology consulting to help you make informed decisions about your digital investments. From technology audits to roadmap planning, we align technology with business objectives.",
  },
  {
    icon: CpuChipIcon,
    title: "Automation & AI Solutions",
    shortDesc: "Streamline operations with intelligent automation.",
    fullDesc:
      "Harness the power of automation and AI to reduce manual work, improve accuracy, and scale your operations. From workflow automation to AI-powered insights, we deliver solutions that save time and drive efficiency.",
  },
  {
    icon: ShoppingCartIcon,
    title: "eCommerce & Marketplace Integration",
    shortDesc: "Connect, optimize, and scale your eCommerce.",
    fullDesc:
      "We specialize in eCommerce platforms and marketplace integrations. Whether you need multi-channel selling, API integrations, or custom checkout flows, we help you grow your online presence.",
  },
  {
    icon: CodeBracketIcon,
    title: "Custom Software Development",
    shortDesc: "Tailored solutions for unique business needs.",
    fullDesc:
      "Build software that fits your exact requirements. Our custom development covers web apps, mobile solutions, integrations, and enterprise systems—all designed for performance and maintainability.",
  },
  {
    icon: ArrowPathIcon,
    title: "Digital Transformation",
    shortDesc: "Modernize your business for the digital era.",
    fullDesc:
      "Navigate the journey from legacy systems to modern, agile technology. We guide you through process redesign, technology adoption, and cultural change to achieve lasting digital transformation.",
  },
  {
    icon: PuzzlePieceIcon,
    title: "System Integration",
    shortDesc: "Connect your tools and data seamlessly.",
    fullDesc:
      "Integrate disparate systems to create a unified technology ecosystem. We connect CRMs, ERPs, eCommerce platforms, and custom applications for a seamless flow of data across your organization.",
  },
  {
    icon: ChartBarSquareIcon,
    title: "Data & Analytics",
    shortDesc: "Turn data into actionable insights.",
    fullDesc:
      "Make data-driven decisions with analytics, dashboards, and reporting solutions. We help you collect, process, and visualize data to uncover opportunities and optimize performance.",
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
            End-to-end technology solutions designed for your business outcomes.
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
