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
        : <XCircle    size={20} style={{ color: "#ef4444", flexShrink: 0, marginTop: 1 }} />
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

function ContactPage() {
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    location: '',
    phone: '',
    message: ''
  });
  
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
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
    } else {
      setToast({ type: "error", message: "Something went wrong. Please try again later." });
    }
  };

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
                  <p className="text-xl md:text-2xl text-gray-900">+91 83296 01548</p>
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
              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  type="text"
                  name="firstname"
                  placeholder="First Name*"
                  required
                  value={formData.firstname}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded px-4 py-4 focus:outline-none focus:ring-1 focus:ring-[#00A3FF] focus:border-[#00A3FF] transition-colors"
                />
                
                <input
                  type="text"
                  name="lastname"
                  placeholder="Last Name*"
                  required
                  value={formData.lastname}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded px-4 py-4 focus:outline-none focus:ring-1 focus:ring-[#00A3FF] focus:border-[#00A3FF] transition-colors"
                />
                
                <input 
                  type="email"
                  name="email"
                  placeholder="Email*"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded px-4 py-4 focus:outline-none focus:ring-1 focus:ring-[#00A3FF] focus:border-[#00A3FF] transition-colors"
                />
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="location"
                    placeholder="Location"
                    value={formData.location}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded px-4 py-4 focus:outline-none focus:ring-1 focus:ring-[#00A3FF] focus:border-[#00A3FF] transition-colors"
                  />
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone*"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded px-4 py-4 focus:outline-none focus:ring-1 focus:ring-[#00A3FF] focus:border-[#00A3FF] transition-colors"
                  />
                </div>
                
                <textarea
                  name="message"
                  placeholder="Message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded px-4 py-4 focus:outline-none focus:ring-1 focus:ring-[#00A3FF] focus:border-[#00A3FF] transition-colors resize-y"
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
