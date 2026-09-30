"use client";

import { useState } from "react";
import { MapPin, Building, PhoneCall, ShieldCheck, CheckCircle2 } from "lucide-react";

const CATEGORIES = [
  "Flow Measurement",
  "Industrial Automation",
  "Inspection & Testing",
  "Skid Fabrication",
];

export default function V3RfqStage() {
  const [activeTab, setActiveTab] = useState("Flow Measurement");
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    org: "",
    phone: "",
    scope: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="relative w-full py-24 bg-surface overflow-hidden" id="rfq-stage">
      <div className="max-w-[1320px] mx-auto px-6 lg:px-12">
        <div className="bg-surface-container-lowest/95 backdrop-blur-2xl rounded-3xl p-8 lg:p-14 shadow-2xl flex flex-col gap-12 border border-secondary-fixed/50">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Contact & Office Details */}
            <div className="lg:col-span-5 flex flex-col gap-4">
              <span className="font-label-md text-label-md uppercase tracking-wider text-primary-container font-semibold">
                Get In Touch
              </span>
              <h2 className="font-headline-lg text-headline-lg text-on-surface font-bold tracking-tight">
                How can we solve your flow measurement challenge?
              </h2>
              <p className="font-body-md text-body-md text-secondary">
                From custody metering to full plant automation — our ISO 9001, ISO 14001, ISO 45001, UASL &amp; Accurate certified team has delivered 400+ projects across oil &amp; gas, power, and manufacturing since 2008.
              </p>

              <div className="space-y-4 pt-4">
                {/* Kuwait HQ */}
                <div className="p-4 rounded-xl bg-surface-container-low flex items-start gap-4 border border-secondary-fixed/40">
                  <MapPin className="w-6 h-6 text-primary-container mt-0.5 shrink-0" />
                  <div>
                    <h4 className="font-label-lg text-label-lg font-bold text-on-surface">
                      Kuwait Headquarters &amp; Workshop
                    </h4>
                    <p className="font-body-sm text-body-sm text-secondary">
                      East Ahmadi Industrial Area, Block 6, Plot 14, Kuwait
                    </p>
                    <p className="font-caption text-caption text-text-muted mt-1">
                      Phone: +965 2398 4410 • Email: info@texastechserv.com
                    </p>
                  </div>
                </div>

                {/* Dubai Hub */}
                <div className="p-4 rounded-xl bg-surface-container-low flex items-start gap-4 border border-secondary-fixed/40">
                  <Building className="w-6 h-6 text-primary-container mt-0.5 shrink-0" />
                  <div>
                    <h4 className="font-label-lg text-label-lg font-bold text-on-surface">
                      Dubai Regional Operations Hub
                    </h4>
                    <p className="font-body-sm text-body-sm text-secondary">
                      JAFZA One, Tower A, Jebel Ali Free Zone, Dubai, UAE
                    </p>
                    <p className="font-caption text-caption text-text-muted mt-1">
                      Phone: +971 4 881 2290 • Email: uae@texastechserv.com
                    </p>
                  </div>
                </div>

                {/* 24/7 Hotline */}
                <div className="p-4 rounded-xl bg-surface-container-high flex items-center justify-between border border-secondary-fixed/50">
                  <div className="flex items-center gap-3">
                    <PhoneCall className="w-6 h-6 text-primary-container shrink-0" />
                    <div>
                      <h5 className="font-label-md text-label-md font-bold text-on-surface">
                        24/7 Field Support Hotline
                      </h5>
                      <p className="font-caption text-caption text-secondary">
                        Technical consultation &amp; emergency dispatch
                      </p>
                    </div>
                  </div>
                  <span className="font-label-md text-label-md font-bold text-primary-container">
                    +965 9912 8840
                  </span>
                </div>
              </div>
            </div>

            {/* Right Interactive RFQ Form */}
            <div className="lg:col-span-7 bg-surface-container-low p-6 lg:p-8 rounded-2xl flex flex-col gap-6 border border-secondary-fixed/50">
              <h3 className="font-headline-sm text-headline-sm text-on-surface font-bold">
                Request Quotation or Engineering Consultation
              </h3>

              {/* Category Tabs Selector */}
              <div className="flex flex-wrap gap-2">
                {CATEGORIES.map((cat) => (
                  <button
                    key={cat}
                    type="button"
                    onClick={() => setActiveTab(cat)}
                    className={`px-4 py-2 rounded-lg font-label-md text-label-md font-semibold transition-all ${
                      activeTab === cat
                        ? "bg-primary-container text-white shadow-md shadow-primary-container/20"
                        : "bg-surface-container-lowest text-on-surface hover:bg-surface-container border border-secondary-fixed/40"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>

              {submitted ? (
                <div className="p-8 rounded-xl bg-surface-container-lowest text-center flex flex-col items-center gap-3 border border-secondary-fixed/50">
                  <CheckCircle2 className="w-12 h-12 text-primary-container animate-bounce" />
                  <h4 className="font-headline-sm text-headline-sm text-on-surface font-bold">
                    Inquiry Received
                  </h4>
                  <p className="font-body-md text-body-md text-secondary max-w-md">
                    Thank you. A Texas Technical Services engineering lead for{" "}
                    <strong className="text-primary-container">{activeTab}</strong> will contact your team within 4 business hours.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: "", email: "", org: "", phone: "", scope: "" });
                    }}
                    className="mt-4 px-6 py-2.5 rounded-lg bg-primary-container text-white font-label-lg text-label-lg hover:bg-accent-hover transition-colors"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form className="space-y-4" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-label-md text-label-md font-medium text-secondary mb-1">
                        Full Name *
                      </label>
                      <input
                        className="w-full px-4 py-3 rounded-lg bg-surface-container-lowest text-on-surface font-body-sm text-body-sm border border-secondary-fixed focus:outline-none focus:border-primary-container focus:ring-2 focus:ring-primary-container/15 transition-all"
                        placeholder="Eng. Fahad Al-Mutawa"
                        required
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      />
                    </div>
                    <div>
                      <label className="block font-label-md text-label-md font-medium text-secondary mb-1">
                        Corporate Email *
                      </label>
                      <input
                        className="w-full px-4 py-3 rounded-lg bg-surface-container-lowest text-on-surface font-body-sm text-body-sm border border-secondary-fixed focus:outline-none focus:border-primary-container focus:ring-2 focus:ring-primary-container/15 transition-all"
                        placeholder="name@company.com"
                        required
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-label-md text-label-md font-medium text-secondary mb-1">
                        Organization / Plant
                      </label>
                      <input
                        className="w-full px-4 py-3 rounded-lg bg-surface-container-lowest text-on-surface font-body-sm text-body-sm border border-secondary-fixed focus:outline-none focus:border-primary-container focus:ring-2 focus:ring-primary-container/15 transition-all"
                        placeholder="Kuwait Oil Company / Subiya"
                        type="text"
                        value={formData.org}
                        onChange={(e) => setFormData({ ...formData, org: e.target.value })}
                      />
                    </div>
                    <div>
                      <label className="block font-label-md text-label-md font-medium text-secondary mb-1">
                        Telephone / Direct Line
                      </label>
                      <input
                        className="w-full px-4 py-3 rounded-lg bg-surface-container-lowest text-on-surface font-body-sm text-body-sm border border-secondary-fixed focus:outline-none focus:border-primary-container focus:ring-2 focus:ring-primary-container/15 transition-all"
                        placeholder="+965 / +971"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block font-label-md text-label-md font-medium text-secondary mb-1">
                      Project Scope &amp; Technical Requirements
                    </label>
                    <textarea
                      className="w-full px-4 py-3 rounded-lg bg-surface-container-lowest text-on-surface font-body-sm text-body-sm border border-secondary-fixed focus:outline-none focus:border-primary-container focus:ring-2 focus:ring-primary-container/15 transition-all"
                      placeholder="Specify line sizes, fluid media (gas/liquid/sour), design pressure class, prover requirements, or automation specs..."
                      rows={3}
                      value={formData.scope}
                      onChange={(e) => setFormData({ ...formData, scope: e.target.value })}
                    />
                  </div>

                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-2">
                    <span className="font-caption text-caption text-secondary flex items-center gap-1.5">
                      <ShieldCheck className="w-4 h-4 text-primary-container" />
                      <span>Non-Disclosure &amp; Technical Confidentiality Guaranteed</span>
                    </span>
                    <button
                      className="px-8 py-3.5 rounded-lg bg-primary-container text-white font-label-lg text-label-lg hover:bg-accent-hover transition-colors shadow-md shadow-primary-container/20 font-bold"
                      type="submit"
                    >
                      Submit Technical Inquiry
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
