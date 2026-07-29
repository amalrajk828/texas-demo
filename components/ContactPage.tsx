"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  MapPin,
  Phone,
  Mail,
  ArrowRight,
  Send,
  Clock,
  Building2,
  CheckCircle,
} from "lucide-react";
import { SITE_EMAIL } from "@/lib/site";

const offices = [
  {
    label: "Kuwait",
    address:
      "Munira Tower, Office No. 30, 9th Floor – Building No. 6702, Block 7 – Makkah Street, Fahaheel, Kuwait",
    phones: ["+965 97243755", "+965 66347267"],
    mapEmbed:
      "https://www.google.com/maps?q=29.1137,48.1295&z=14&output=embed",
  },
  {
    label: "Dubai",
    address:
      "Amna Naseer Building, Al Marar Area, 20th Street #529, Plot #302, Office #201-19, Deira, Dubai",
    phones: ["+971 569553747", "+971 567793973"],
    mapEmbed:
      "https://www.google.com/maps?q=25.2882,55.3247&z=14&output=embed",
  },
];

export default function ContactPage() {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.fullName || !form.email || !form.message) {
      alert("Please fill in all required fields.");
      return;
    }
    setSubmitted(true);
  };

  return (
    <div className="bg-white">
      {/* ═══ HERO ═══════════════════════════════════════════════════ */}
      <section className="relative bg-[#000000] blueprint-grid blueprint-dot-grid overflow-hidden pt-32 pb-20 lg:pb-28">
        {/* Grid texture */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              "repeating-linear-gradient(0deg,transparent,transparent 39px,rgba(255,255,255,0.03) 40px),repeating-linear-gradient(90deg,transparent,transparent 39px,rgba(255,255,255,0.03) 40px)",
          }}
        />
        {/* Red glow top-right */}
        <div
          className="absolute top-0 right-0 w-[700px] h-[500px] pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at top right, rgba(231,33,43,0.14) 0%, transparent 65%)",
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 mb-8 text-[12px] text-white/30">
            <Link href="/" className="hover:text-white/60 transition-colors">
              Home
            </Link>
            <span>/</span>
            <span className="text-white/60">Contact Us</span>
          </div>

          <div className="max-w-3xl">
            <div className="flex items-center gap-2.5 mb-5">
              <span className="w-5 h-px bg-[#e7212b]" />
              <span className="text-[#e7212b] text-[11px] font-semibold tracking-[3px] uppercase">
                Get in Touch
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-[3.4rem] font-bold text-white leading-[1.12] mb-6">
              Let&apos;s Talk About
              <br />
              <em className="not-italic text-[#e7212b]">Your Project</em>
            </h1>

            <p className="text-white/50 text-base sm:text-[17px] leading-relaxed mb-8 max-w-xl">
              Whether you need flow measurement solutions, industrial automation,
              or inspection services — our team across Kuwait and Dubai is ready
              to help.
            </p>

            <div className="flex flex-wrap gap-6 text-white/40 text-sm">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#e7212b]" />
                <span>+965 66347267</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#e7212b]" />
                <span>{SITE_EMAIL}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ CONTACT INFO + FORM ═══════════════════════════════════ */}
      <section className="py-16 lg:py-24 bg-white" id="contact-form">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Left — info cards */}
            <div className="space-y-8">
              <div>
                <span className="text-[11px] font-bold tracking-[0.28em] uppercase text-[#e7212b]">
                  Contact Info
                </span>
                <h2 className="mt-3 text-3xl lg:text-4xl font-bold text-[#181D4E] leading-tight">
                  Reach Out to Us
                </h2>
                <p className="mt-4 text-gray-500 text-[15px] leading-[1.75]">
                  Reach out to us directly or visit one of our offices.
                  We&apos;re always happy to discuss your project requirements.
                </p>
              </div>

              <div className="space-y-5">
                {/* Email */}
                <a
                  href={`mailto:${SITE_EMAIL}`}
                  className="flex items-start gap-4 p-5 rounded-xl border border-gray-100 hover:border-[#e7212b]/30 transition-colors group"
                >
                  <div className="w-12 h-12 rounded-full bg-[#e7212b]/10 flex items-center justify-center shrink-0 group-hover:bg-[#e7212b]/20 transition-colors">
                    <Mail className="w-5 h-5 text-[#e7212b]" />
                  </div>
                  <div>
                    <p className="text-[13px] font-semibold text-gray-400 mb-1">
                      Email Us
                    </p>
                    <p className="text-[#181D4E] font-medium">{SITE_EMAIL}</p>
                  </div>
                </a>

                {/* Phone - Kuwait */}
                <div className="flex items-start gap-4 p-5 rounded-xl border border-gray-100 hover:border-[#e7212b]/30 transition-colors group">
                  <div className="w-12 h-12 rounded-full bg-[#e7212b]/10 flex items-center justify-center shrink-0 group-hover:bg-[#e7212b]/20 transition-colors">
                    <Phone className="w-5 h-5 text-[#e7212b]" />
                  </div>
                  <div>
                    <p className="text-[13px] font-semibold text-gray-400 mb-1">
                      Kuwait
                    </p>
                    <a
                      href="tel:+96597243755"
                      className="block text-[#181D4E] font-medium hover:text-[#e7212b] transition-colors"
                    >
                      +965 97243755
                    </a>
                    <a
                      href="tel:+96566347267"
                      className="block text-[#181D4E] font-medium hover:text-[#e7212b] transition-colors"
                    >
                      +965 66347267
                    </a>
                  </div>
                </div>

                {/* Phone - Dubai */}
                <div className="flex items-start gap-4 p-5 rounded-xl border border-gray-100 hover:border-[#e7212b]/30 transition-colors group">
                  <div className="w-12 h-12 rounded-full bg-[#e7212b]/10 flex items-center justify-center shrink-0 group-hover:bg-[#e7212b]/20 transition-colors">
                    <Building2 className="w-5 h-5 text-[#e7212b]" />
                  </div>
                  <div>
                    <p className="text-[13px] font-semibold text-gray-400 mb-1">
                      Dubai
                    </p>
                    <a
                      href="tel:+971569553747"
                      className="block text-[#181D4E] font-medium hover:text-[#e7212b] transition-colors"
                    >
                      +971 569553747
                    </a>
                  </div>
                </div>

                {/* Working Hours */}
                <div className="flex items-start gap-4 p-5 rounded-xl border border-gray-100">
                  <div className="w-12 h-12 rounded-full bg-[#e7212b]/10 flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5 text-[#e7212b]" />
                  </div>
                  <div>
                    <p className="text-[13px] font-semibold text-gray-400 mb-1">
                      Working Hours
                    </p>
                    <p className="text-[#181D4E] font-medium">
                      Sat – Thu: 8:00 AM – 5:00 PM
                    </p>
                    <p className="text-gray-400 text-sm mt-0.5">
                      Friday: Closed
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right — form */}
            <div className="bg-[#F8F9FA] rounded-2xl p-8 lg:p-10 border border-gray-100">
              <h3 className="text-[#181D4E] text-xl font-bold mb-2">
                Send Us a Message
              </h3>
              <p className="text-gray-400 text-sm mb-8">
                Fill out the form below and we&apos;ll get back to you within 24
                hours.
              </p>

              {submitted ? (
                <div className="bg-white border border-green-100 rounded-xl p-8 text-center shadow-sm">
                  <div className="w-14 h-14 rounded-full bg-green-500/10 flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-7 h-7 text-green-500" />
                  </div>
                  <h4 className="text-[#181D4E] font-bold text-lg mb-2">
                    Message Sent Successfully!
                  </h4>
                  <p className="text-gray-500 text-sm">
                    Thank you for reaching out. Our team will contact you
                    shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Full Name */}
                    <div className="flex flex-col">
                      <label className="text-[13px] font-semibold text-gray-500 mb-1.5">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="fullName"
                        value={form.fullName}
                        onChange={handleChange}
                        required
                        placeholder="John Doe"
                        className="border border-gray-200 focus:border-[#e7212b] outline-none rounded-lg px-4 py-3 text-sm text-[#1A1A2E] bg-white transition-colors duration-200"
                      />
                    </div>

                    {/* Email */}
                    <div className="flex flex-col">
                      <label className="text-[13px] font-semibold text-gray-500 mb-1.5">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        required
                        placeholder="john.doe@company.com"
                        className="border border-gray-200 focus:border-[#e7212b] outline-none rounded-lg px-4 py-3 text-sm text-[#1A1A2E] bg-white transition-colors duration-200"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Phone */}
                    <div className="flex flex-col">
                      <label className="text-[13px] font-semibold text-gray-500 mb-1.5">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="+1 (555) 000-0000"
                        className="border border-gray-200 focus:border-[#e7212b] outline-none rounded-lg px-4 py-3 text-sm text-[#1A1A2E] bg-white transition-colors duration-200"
                      />
                    </div>

                    {/* Subject */}
                    <div className="flex flex-col">
                      <label className="text-[13px] font-semibold text-gray-500 mb-1.5">
                        Subject
                      </label>
                      <input
                        type="text"
                        name="subject"
                        value={form.subject}
                        onChange={handleChange}
                        placeholder="How can we help?"
                        className="border border-gray-200 focus:border-[#e7212b] outline-none rounded-lg px-4 py-3 text-sm text-[#1A1A2E] bg-white transition-colors duration-200"
                      />
                    </div>
                  </div>

                  {/* Message */}
                  <div className="flex flex-col">
                    <label className="text-[13px] font-semibold text-gray-500 mb-1.5">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      placeholder="Tell us about your project or requirements..."
                      className="border border-gray-200 focus:border-[#e7212b] outline-none rounded-lg px-4 py-3 text-sm text-[#1A1A2E] bg-white transition-colors duration-200 resize-y"
                    />
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    className="w-full bg-[#e7212b] hover:bg-[#aa0b1b] text-white font-semibold py-3.5 px-6 rounded-lg transition-all duration-200 text-sm shadow-md shadow-[#e7212b]/15 active:scale-[0.99] cursor-pointer inline-flex items-center justify-center gap-2"
                  >
                    Send Message <Send className="w-4 h-4" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ═══ OFFICE LOCATIONS + MAPS ═══════════════════════════════ */}
      <section className="py-16 lg:py-24 bg-[#F8F9FA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <span className="text-[11px] font-bold tracking-[0.28em] uppercase text-[#e7212b]">
              Our Offices
            </span>
            <h2 className="mt-3 text-3xl lg:text-4xl font-bold text-[#181D4E]">
              Visit Us in Person
            </h2>
            <p className="mt-4 text-gray-500 text-[15px] max-w-lg mx-auto">
              With offices in Kuwait and Dubai, we serve clients across the GCC
              region.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {offices.map((office) => (
              <div
                key={office.label}
                className="bg-white rounded-2xl overflow-hidden border border-gray-100 hover:border-[#e7212b]/30 transition-colors"
              >
                {/* Map */}
                <div className="relative aspect-[16/10] bg-gray-100">
                  <iframe
                    src={office.mapEmbed}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={false}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="absolute inset-0 w-full h-full"
                    title={`Texas Technical Services ${office.label} office location`}
                  />
                </div>

                {/* Info */}
                <div className="p-6 lg:p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-[#e7212b]/10 flex items-center justify-center">
                      <MapPin className="w-5 h-5 text-[#e7212b]" />
                    </div>
                    <h3 className="text-[#181D4E] text-lg font-bold">
                      {office.label} Office
                    </h3>
                  </div>

                  <p className="text-gray-500 text-sm leading-relaxed mb-5">
                    {office.address}
                  </p>

                  <div className="space-y-2">
                    {office.phones.map((phone) => (
                      <a
                        key={phone}
                        href={`tel:${phone.replace(/\s/g, "")}`}
                        className="flex items-center gap-2 text-sm text-[#181D4E] hover:text-[#e7212b] transition-colors"
                      >
                        <Phone className="w-3.5 h-3.5 text-[#e7212b]" />
                        {phone}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ CTA BANNER ═══════════════════════════════════════════ */}
      <section
        className="py-20"
        style={{ background: "var(--color-brand-navy)" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span
              className="w-8 h-px"
              style={{
                background:
                  "color-mix(in srgb, var(--color-brand-red) 40%, transparent)",
              }}
            />
            <span
              className="text-[11px] font-semibold tracking-[2.5px] uppercase"
              style={{ color: "var(--color-brand-red)" }}
            >
              Let&apos;s Work Together
            </span>
            <span
              className="w-8 h-px"
              style={{
                background:
                  "color-mix(in srgb, var(--color-brand-red) 40%, transparent)",
              }}
            />
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3">
            Ready to Start Your Project?
          </h2>
          <p className="text-white/50 text-[15px] mb-8 max-w-md mx-auto">
            Talk to our team about your requirements. Our offices in Kuwait and
            Dubai are ready to help.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href={`mailto:${SITE_EMAIL}`}
              className="inline-flex items-center gap-2 bg-[#e7212b] hover:bg-[#aa0b1b] text-white font-semibold px-8 py-3.5 rounded-lg transition-colors duration-200 text-[14px]"
            >
              Email Us <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="tel:+96566347267"
              className="inline-flex items-center gap-2 border border-white/15 hover:border-white/35 text-white/60 hover:text-white px-8 py-3.5 rounded-lg transition-all duration-200 text-[14px]"
            >
              Call Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
