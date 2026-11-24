"use client";

import React, { useState } from "react";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  CheckCircle2,
  Building2,
  ExternalLink,
} from "lucide-react";
import { SITE_EMAIL } from "@/lib/site";
import { useFormSubmit } from "@/lib/useFormSubmit";
import { Button } from "@/components/v3";

const offices = [
  {
    country: "Kuwait",
    title: "Headquarters & Engineering Base",
    address:
      "Munira Tower, Office No. 30, 9th Floor – Building No. 6702, Block 7 – Makkah Street, Fahaheel, Kuwait",
    phones: ["+965 97243755", "+965 66347267"],
    email: SITE_EMAIL,
    hours: "Sun – Thu: 8:00 AM – 5:00 PM",
    mapEmbed:
      "https://www.google.com/maps?q=29.1137,48.1295&z=14&output=embed",
  },
  {
    country: "United Arab Emirates",
    title: "Dubai Regional Hub",
    address:
      "Amna Naseer Building, Al Marar Area, 20th Street #529, Plot #302, Office #201-19, Deira, Dubai",
    phones: ["+971 569553747", "+971 567793973"],
    email: SITE_EMAIL,
    hours: "Mon – Fri: 8:30 AM – 5:30 PM",
    mapEmbed:
      "https://www.google.com/maps?q=25.2882,55.3247&z=14&output=embed",
  },
];

export default function V3ContactPage() {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const { submitForm, isSubmitting } = useFormSubmit();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.fullName || !form.email || !form.message) {
      alert("Please fill in all required fields.");
      return;
    }
    const result = await submitForm({
      ...form,
      _subject: "New Inquiry from Texas Technical Services Website",
    });
    if (result.success) {
      setSubmitted(true);
    } else {
      alert("Something went wrong. Please try again later.");
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
      {/* ── Left: Frosted Glass Form Card ── */}
      <div className="lg:col-span-7 bg-[#DCDCD9] border border-[#C8C8C5] rounded-[30px] p-6 sm:p-8 md:p-10 shadow-[0_20px_45px_rgba(0,0,0,0.06)] relative overflow-hidden">
        <div className="relative z-10">
          <div className="mb-8">
            <span className="text-[12px] font-mono uppercase tracking-wider text-[#6b191b] font-bold">
              Direct Inquiry
            </span>
            <h2 className="font-heading text-[24px] sm:text-[28px] font-bold text-[#1a1c20] mt-1">
              Send Us a Message
            </h2>
            <p className="text-[14px] text-[#4b5563] mt-2 leading-relaxed">
              Have a project requirement or need technical assistance? Fill out
              the form below and an engineer will respond within 24 hours.
            </p>
          </div>

          {submitted ? (
            <div className="rounded-[20px] bg-[#6b191b]/[0.06] border border-[#6b191b]/20 p-8 text-center animate-in fade-in zoom-in-95 duration-300">
              <div className="w-14 h-14 rounded-full bg-[#6b191b] text-white flex items-center justify-center mx-auto mb-4 shadow-lg shadow-[#6b191b]/20">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="font-heading text-[20px] font-bold text-[#1a1c20] mb-2">
                Thank You!
              </h3>
              <p className="text-[14px] text-[#4b5563] max-w-md mx-auto leading-relaxed">
                Your message has been received. Our engineering team in Kuwait
                and Dubai will review your specifications and contact you
                promptly.
              </p>
              <button
                type="button"
                onClick={() => {
                  setSubmitted(false);
                  setForm({
                    fullName: "",
                    email: "",
                    phone: "",
                    subject: "",
                    message: "",
                  });
                }}
                className="mt-6 px-6 py-2.5 rounded-full bg-[#1a1c20] text-white text-[13px] font-semibold hover:bg-[#6b191b] transition-colors"
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label
                    htmlFor="fullName"
                    className="block text-[12px] font-mono uppercase tracking-wider text-[#4b5563] font-semibold mb-2"
                  >
                    Full Name <span className="text-[#6b191b]">*</span>
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    required
                    value={form.fullName}
                    onChange={handleChange}
                    placeholder="e.g. Eng. Ahmed Al-Sabah"
                    className="w-full px-4 py-3 rounded-[14px] bg-white border border-[#C8C8C5] text-[#1a1c20] text-[14px] placeholder-[#9ca3af] focus:outline-none focus:ring-2 focus:ring-[#6b191b] focus:bg-white transition-all"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-[12px] font-mono uppercase tracking-wider text-[#4b5563] font-semibold mb-2"
                  >
                    Work Email <span className="text-[#6b191b]">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    placeholder="name@company.com"
                    className="w-full px-4 py-3 rounded-[14px] bg-white border border-[#C8C8C5] text-[#1a1c20] text-[14px] placeholder-[#9ca3af] focus:outline-none focus:ring-2 focus:ring-[#6b191b] focus:bg-white transition-all"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-[12px] font-mono uppercase tracking-wider text-[#4b5563] font-semibold mb-2"
                  >
                    Phone / Mobile
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="+965 / +971"
                    className="w-full px-4 py-3 rounded-[14px] bg-white border border-[#C8C8C5] text-[#1a1c20] text-[14px] placeholder-[#9ca3af] focus:outline-none focus:ring-2 focus:ring-[#6b191b] focus:bg-white transition-all"
                  />
                </div>
                <div>
                  <label
                    htmlFor="subject"
                    className="block text-[12px] font-mono uppercase tracking-wider text-[#4b5563] font-semibold mb-2"
                  >
                    Subject / Discipline
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    placeholder="e.g. Fiscal Metering Package"
                    className="w-full px-4 py-3 rounded-[14px] bg-white border border-[#C8C8C5] text-[#1a1c20] text-[14px] placeholder-[#9ca3af] focus:outline-none focus:ring-2 focus:ring-[#6b191b] focus:bg-white transition-all"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-[12px] font-mono uppercase tracking-wider text-[#4b5563] font-semibold mb-2"
                >
                  Project Details / Scope{" "}
                  <span className="text-[#6b191b]">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Describe your instrumentation, flow metering, automation, or NDT inspection requirements..."
                  className="w-full px-4 py-3 rounded-[14px] bg-white border border-[#C8C8C5] text-[#1a1c20] text-[14px] placeholder-[#9ca3af] focus:outline-none focus:ring-2 focus:ring-[#6b191b] focus:bg-white transition-all resize-y"
                />
              </div>

              <div className="pt-2">
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto"
                >
                  <Send className="w-4 h-4 mr-2" />
                  {isSubmitting ? "Transmitting..." : "Send Technical Inquiry"}
                </Button>
              </div>
            </form>
          )}
        </div>
      </div>

      {/* ── Right: Office Locations & Maps ── */}
      <div className="lg:col-span-5 space-y-6">
        {offices.map((office, idx) => (
          <div
            key={idx}
            className="rounded-[30px] bg-[#DCDCD9] p-6 sm:p-7 border border-[#C8C8C5] shadow-[0_15px_30px_rgba(0,0,0,0.04)]"
          >
            <div className="flex items-center gap-2 mb-3">
              <Building2 className="w-4 h-4 text-[#6b191b]" />
              <span className="text-[11px] font-mono uppercase tracking-wider text-[#6b191b] font-bold">
                {office.country}
              </span>
            </div>
            <h3 className="font-heading text-[18px] font-bold text-[#1a1c20] mb-3">
              {office.title}
            </h3>

            <div className="space-y-3 text-[13px] text-[#4b5563]">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#6b191b] shrink-0 mt-0.5" />
                <span className="leading-relaxed">{office.address}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-[#6b191b] shrink-0" />
                <span>{office.hours}</span>
              </div>
              <div className="flex flex-wrap gap-x-4 gap-y-1 pt-1">
                {office.phones.map((phone, pIdx) => (
                  <a
                    key={pIdx}
                    href={`tel:${phone.replace(/\s+/g, "")}`}
                    className="inline-flex items-center gap-1.5 font-mono text-[12px] font-semibold text-[#1a1c20] hover:text-[#6b191b] transition-colors"
                  >
                    <Phone className="w-3.5 h-3.5 text-[#6b191b]" />
                    {phone}
                  </a>
                ))}
              </div>
            </div>

            {/* Google Map Embed */}
            <div className="mt-5 rounded-[18px] overflow-hidden border border-black/[0.06] aspect-[16/9] w-full bg-[#ece9e6]">
              <iframe
                title={`${office.country} Office Location`}
                src={office.mapEmbed}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
