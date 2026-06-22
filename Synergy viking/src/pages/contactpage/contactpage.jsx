import React, { useState, useEffect } from 'react';
import { submitContactForm } from './api/contact.js';
import { CheckCircle, XCircle, X } from "lucide-react";

// ─── Toast Component ──────────────────────────────────────────────────────────
function Toast({ type, message, onClose }) {
  useEffect(() => {
    const t = setTimeout(onClose, 4000);
    return () => clearTimeout(t);
  }, [onClose]);

  const isSuccess = type === "success";

  return (
    <div style={{
      position: "fixed",
      top: 24,
      right: 24,
      zIndex: 9999,
      display: "flex",
      alignItems: "flex-start",
      gap: 12,
      background: isSuccess ? "#f0fdf4" : "#fef2f2",
      border: `1px solid ${isSuccess ? "#bbf7d0" : "#fecaca"}`,
      borderLeft: `4px solid ${isSuccess ? "#22c55e" : "#ef4444"}`,
      borderRadius: 10,
      padding: "14px 16px",
      minWidth: 280,
      maxWidth: 360,
      boxShadow: "0 8px 30px rgba(0,0,0,0.12)",
      animation: "toastSlideIn 0.25s ease",
    }}>
      <style>{`
        @keyframes toastSlideIn {
          from { opacity: 0; transform: translateX(40px); }
          to   { opacity: 1; transform: translateX(0); }
        }
      `}</style>

      {isSuccess
        ? <CheckCircle size={20} style={{ color: "#22c55e", flexShrink: 0, marginTop: 1 }} />
        : <XCircle size={20} style={{ color: "#ef4444", flexShrink: 0, marginTop: 1 }} />
      }

      <div style={{ flex: 1 }}>
        <p style={{ margin: 0, fontWeight: 700, fontSize: 14, color: isSuccess ? "#15803d" : "#b91c1c", fontFamily: "Inter, sans-serif" }}>
          {isSuccess ? "Message sent!" : "Submission failed"}
        </p>
        <p style={{ margin: "2px 0 0", fontSize: 13, color: isSuccess ? "#166534" : "#991b1b", fontFamily: "Inter, sans-serif" }}>
          {message}
        </p>
      </div>

      <button onClick={onClose} style={{ background: "none", border: "none", cursor: "pointer", padding: 0, color: "#9ca3af", flexShrink: 0 }}>
        <X size={16} />
      </button>
    </div>
  );
}

// ─── Validation helpers ────────────────────────────────────────────────────
// Accepts international formats like: +91 98765 43210, +971 50 123 4567,
// (555) 123-4567, 555-123-4567, etc. Requires 7–15 digits total.
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_REGEX = /^\+?[\d\s\-().]{7,20}$/;

function isValidPhone(value) {
  if (!PHONE_REGEX.test(value)) return false;
  const digitCount = value.replace(/\D/g, '').length;
  return digitCount >= 7 && digitCount <= 15;
}

function validateForm(data) {
  const errors = {};

  if (!data.firstname.trim()) errors.firstname = 'First name is required.';
  if (!data.lastname.trim()) errors.lastname = 'Last name is required.';

  if (!data.email.trim()) {
    errors.email = 'Email is required.';
  } else if (!EMAIL_REGEX.test(data.email.trim())) {
    errors.email = 'Enter a valid email address.';
  }

  if (!data.phone.trim()) {
    errors.phone = 'Phone number is required.';
  } else if (!isValidPhone(data.phone.trim())) {
    errors.phone = 'Enter a valid phone number (with country code if outside India).';
  }

  return errors;
}

// ─── Reusable field wrapper ─────────────────────────────────────────────────
function FieldError({ message }) {
  if (!message) return null;
  return <p className="mt-1 text-sm text-red-500">{message}</p>;
}

function ContactPage() {
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    location: '',
    phone: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));

    // Clear that field's error as soon as the user starts fixing it
    if (errors[name]) {
      setErrors(prev => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationErrors = validateForm(formData);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setToast({ type: "error", message: "Please fix the highlighted fields and try again." });
      return;
    }

    setLoading(true);
    const result = await submitContactForm(formData);
    setLoading(false);

    if (result.ok) {
      setToast({ type: "success", message: "Our team will get back to you shortly." });
      setFormData({
        firstname: '',
        lastname: '',
        email: '',
        location: '',
        phone: '',
        message: ''
      });
      setErrors({});
    } else {
      setToast({ type: "error", message: "Something went wrong. Please try again later." });
    }
  };

  const inputClass = (field) =>
    `w-full border rounded px-4 py-4 focus:outline-none focus:ring-1 transition-colors ${errors[field]
      ? 'border-red-500 focus:ring-red-500 focus:border-red-500'
      : 'border-gray-300 focus:ring-[#00A3FF] focus:border-[#00A3FF]'
    }`;

  return (
    <>
      {toast && (
        <Toast
          type={toast.type}
          message={toast.message}
          onClose={() => setToast(null)}
        />
      )}
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="relative w-full bg-[#00151C] pt-4 pb-16 px-5 sm:px-6 md:px-8 lg:pt-[7px] lg:pb-[120px] lg:px-10">
          {/* Label */}
          <div className="flex items-center gap-3 md:gap-[17px] mb-6 md:mb-8">
            <div className="w-2.5 h-2.5 md:w-3 md:h-3 bg-[#00B1F1]" />
            <span className="text-sm md:text-lg leading-[21px] tracking-[-0.28px] uppercase text-white font-geist-mono font-normal">
              Contact
            </span>
          </div>

          {/* Heading */}
          <h2 className="max-w-full lg:-mt-[50px] xl:-mt-[50px] lg:max-w-[1051px] lg:ml-[205px] text-[28px] sm:text-3xl md:text-4xl lg:text-5xl xl:text-[60px] leading-tight md:leading-[1.2] lg:leading-[72px] tracking-[-1px] sm:tracking-[-1.5px] md:tracking-[-2px] xl:tracking-[-2.2px] text-white font-normal font-ptserif">
            Talk with us and get a quote
          </h2>
        </section>

        {/* Main Content Section */}
        <section className="max-w-7xl mx-auto px-6 md:px-16 lg:px-24 py-16 md:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">

            {/* Left Column: Contact Details */}
            <div>
              <h2 className="text-3xl md:text-4xl font-medium text-gray-900 mb-12">
                Contact details
              </h2>

              <div className="space-y-8">
                <div>
                  <p className="text-sm text-gray-500 uppercase mb-1">EMAIL & SUPPORT</p>
                  <p className="text-xl md:text-2xl text-gray-900">Synergy@support.com</p>
                </div>

                <div>
                  <p className="text-sm text-gray-500 uppercase mb-1">PHONE</p>
                  <p className="text-xl md:text-2xl text-gray-900"></p>
                </div>

                <div>
                  <p className="text-sm text-gray-500 uppercase mb-1">ADDRESS</p>
                  <p className="text-xl md:text-2xl text-gray-900 leading-snug">
                    26 29th St - Al Qusais<br />
                    Industrial Area - Al Qusais<br />
                    Industrial Area 1 - Dubai, UAE
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column: Contact Form */}
            <div>
              <form onSubmit={handleSubmit} noValidate className="space-y-4">
                <div>
                  <input
                    type="text"
                    name="firstname"
                    placeholder="First Name*"
                    value={formData.firstname}
                    onChange={handleChange}
                    className={inputClass('firstname')}
                  />
                  <FieldError message={errors.firstname} />
                </div>

                <div>
                  <input
                    type="text"
                    name="lastname"
                    placeholder="Last Name*"
                    value={formData.lastname}
                    onChange={handleChange}
                    className={inputClass('lastname')}
                  />
                  <FieldError message={errors.lastname} />
                </div>

                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email*"
                    value={formData.email}
                    onChange={handleChange}
                    className={inputClass('email')}
                  />
                  <FieldError message={errors.email} />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-start">
                  <div>
                    <input
                      type="text"
                      name="location"
                      placeholder="Location"
                      value={formData.location}
                      onChange={handleChange}
                      className={inputClass('location')}
                    />
                  </div>
                  <div>
                    <input
                      type="tel"
                      name="phone"
                      placeholder="Phone*"
                      value={formData.phone}
                      onChange={handleChange}
                      className={inputClass('phone')}
                    />
                    <FieldError message={errors.phone} />
                  </div>
                </div>

                <textarea
                  name="message"
                  placeholder="Message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  className={`${inputClass('message')} resize-y`}
                ></textarea>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-[#1A1A1A] hover:bg-black text-white py-4 rounded-full mt-4 transition-colors font-medium text-lg flex justify-center items-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {loading ? (
                    <>
                      <style>{`
                        .spinner {
                          width: 18px;
                          height: 18px;
                          border: 2px solid rgba(255,255,255,0.4);
                          border-top-color: #fff;
                          border-radius: 50%;
                          animation: spin 0.7s linear infinite;
                        }
                        @keyframes spin { to { transform: rotate(360deg); } }
                      `}</style>
                      <span className="spinner" /> Sending...
                    </>
                  ) : (
                    'Contact with us'
                  )}
                </button>
              </form>
            </div>

          </div>
        </section>
      </div>
    </>
  );
}

export default ContactPage;