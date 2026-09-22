"use client";

import React, { useState } from "react";
import { useFormSubmit } from "@/lib/useFormSubmit";

export type ProductInquiryFormProps = {
  productName: string;
  category: string;
};

export default function ProductInquiryForm({
  productName,
  category,
}: ProductInquiryFormProps) {
  const [formData, setFormData] = useState({
    fullName: "",
    companyName: "",
    email: "",
    phone: "",
    country: "",
    subject: `Inquiry about ${productName}`,
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const { submitForm, isSubmitting } = useFormSubmit();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.companyName || !formData.email) {
      alert("Please fill in all required fields.");
      return;
    }
    const result = await submitForm(formData);
    if (result.success) {
      setSubmitted(true);
    } else {
      alert("Something went wrong. Please try again later.");
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <section className="bg-white py-16">
      <div className="max-w-[850px] mx-auto px-4 sm:px-6">
        <div className="text-center mb-10">
          <h2 className="text-[#1A1A2E] text-2xl sm:text-3xl font-bold">
            Get More Information
          </h2>
          <div className="w-[60px] h-[3px] bg-[#e7212b] mx-auto mt-3" />
        </div>

        {submitted ? (
          <div className="bg-[#F8F9FA] border border-[#E8E8F0] rounded-xl p-8 text-center shadow-sm">
            <div className="w-12 h-12 rounded-full bg-green-500/10 flex items-center justify-center mx-auto mb-4">
              <span className="text-green-500 font-bold text-xl">✓</span>
            </div>
            <h3 className="text-[#1A1A2E] font-bold text-lg mb-2">
              Inquiry Sent Successfully!
            </h3>
            <p className="text-[#555770]">
              Thank you! We will contact you shortly.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              
              {/* Full Name */}
              <div className="flex flex-col">
                <label className="text-[13px] font-semibold text-[#555770] mb-1.5">
                  Full Name *
                </label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                  placeholder="John Doe"
                  className="border border-[#E8E8F0] focus:border-[#e7212b] outline-none rounded-[6px] px-4 py-3 text-sm text-[#1A1A2E] bg-white transition-colors duration-200"
                />
              </div>

              {/* Company Name */}
              <div className="flex flex-col">
                <label className="text-[13px] font-semibold text-[#555770] mb-1.5">
                  Company Name *
                </label>
                <input
                  type="text"
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleChange}
                  required
                  placeholder="Acme Corporation"
                  className="border border-[#E8E8F0] focus:border-[#e7212b] outline-none rounded-[6px] px-4 py-3 text-sm text-[#1A1A2E] bg-white transition-colors duration-200"
                />
              </div>

              {/* Email */}
              <div className="flex flex-col">
                <label className="text-[13px] font-semibold text-[#555770] mb-1.5">
                  Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="john.doe@company.com"
                  className="border border-[#E8E8F0] focus:border-[#e7212b] outline-none rounded-[6px] px-4 py-3 text-sm text-[#1A1A2E] bg-white transition-colors duration-200"
                />
              </div>

              {/* Phone */}
              <div className="flex flex-col">
                <label className="text-[13px] font-semibold text-[#555770] mb-1.5">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+1 (555) 000-0000"
                  className="border border-[#E8E8F0] focus:border-[#e7212b] outline-none rounded-[6px] px-4 py-3 text-sm text-[#1A1A2E] bg-white transition-colors duration-200"
                />
              </div>

              {/* Country */}
              <div className="flex flex-col">
                <label className="text-[13px] font-semibold text-[#555770] mb-1.5">
                  Country
                </label>
                <input
                  type="text"
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                  placeholder="United States"
                  className="border border-[#E8E8F0] focus:border-[#e7212b] outline-none rounded-[6px] px-4 py-3 text-sm text-[#1A1A2E] bg-white transition-colors duration-200"
                />
              </div>

              {/* Subject */}
              <div className="flex flex-col">
                <label className="text-[13px] font-semibold text-[#555770] mb-1.5">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="border border-[#E8E8F0] focus:border-[#e7212b] outline-none rounded-[6px] px-4 py-3 text-sm text-[#1A1A2E] bg-white transition-colors duration-200"
                />
              </div>

            </div>

            {/* Message */}
            <div className="flex flex-col">
              <label className="text-[13px] font-semibold text-[#555770] mb-1.5">
                Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                placeholder="Describe your request or requirements here..."
                className="border border-[#E8E8F0] focus:border-[#e7212b] outline-none rounded-[6px] px-4 py-3 text-sm text-[#1A1A2E] bg-white transition-colors duration-200 resize-y"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-[#e7212b] hover:bg-[#aa0b1b] text-white font-bold py-3.5 px-6 rounded-[6px] transition-all duration-200 text-sm shadow-md hover:shadow-[#e7212b]/15 active:scale-[0.99] cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? "Sending..." : "Send Inquiry"} &rarr;
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
