"use client";

import { useState } from "react";
import { EnvelopeIcon, BuildingOfficeIcon } from "@heroicons/react/24/outline";

export default function ContactPage() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    // Simulate form submission - replace with actual backend/database integration
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // For now, log to console and show success
    console.log("Contact form submission:", { ...formData, timestamp: new Date().toISOString() });
    setStatus("success");
    setFormData({ name: "", email: "", company: "", message: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-navy-900 to-primary-950 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-white">Contact Us</h1>
          <p className="mt-4 text-xl text-slate-300 max-w-2xl">
            Get in touch to discuss your technology needs or book a consultation.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-2xl font-bold text-navy-900">Send us a message</h2>
              <p className="mt-4 text-slate-600">
                Fill out the form and we&apos;ll get back to you within 24 hours.
              </p>

              <form onSubmit={handleSubmit} className="mt-8 space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-700">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="mt-1 block w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-700">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="mt-1 block w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  />
                </div>
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-slate-700">
                    Company
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="mt-1 block w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-700">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    value={formData.message}
                    onChange={handleChange}
                    className="mt-1 block w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  />
                </div>
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="w-full sm:w-auto px-8 py-4 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {status === "loading" ? "Sending..." : "Send Message"}
                </button>
              </form>

              {status === "success" && (
                <p className="mt-4 text-green-600 font-medium">
                  Thank you! Your message has been received. We&apos;ll be in touch soon.
                </p>
              )}
              {status === "error" && (
                <p className="mt-4 text-red-600 font-medium">
                  Something went wrong. Please try again or email us directly.
                </p>
              )}
            </div>

            <div>
              <h2 className="text-2xl font-bold text-navy-900">Contact Information</h2>
              <div className="mt-8 space-y-6">
                <div className="flex items-start gap-4">
                  <EnvelopeIcon className="w-6 h-6 text-primary-600 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-medium text-slate-800">Email</p>
                    <a
                      href="mailto:info@relytechserve.com"
                      className="text-primary-600 hover:text-primary-700"
                    >
                      info@relytechserve.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <BuildingOfficeIcon className="w-6 h-6 text-primary-600 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-medium text-slate-800">Company</p>
                    <p className="text-slate-600">Rely Tech Serve</p>
                  </div>
                </div>
              </div>

              <div className="mt-12 p-8 bg-slate-50 rounded-2xl">
                <h3 className="font-semibold text-navy-900">Book a Consultation</h3>
                <p className="mt-2 text-slate-600">
                  Schedule a free 30-minute call to discuss your technology needs and how we can
                  help. Use the form to request a callback or email us directly.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
