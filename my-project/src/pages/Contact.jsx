import React, { useEffect, useState } from "react";
import { Mail, MapPin, Phone, Send, Github, Linkedin, Instagram, Twitter } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-out-cubic",
    });
  }, []);

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {
      name: "",
      email: "",
      message: "",
    };

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!validateEmail(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }

    if (newErrors.name || newErrors.email || newErrors.message) {
      setErrors(newErrors);
      return;
    }

    console.log("Form submitted:", formData);
    setSubmitted(true);
    setFormData({ name: "", email: "", message: "" });

    setTimeout(() => setSubmitted(false), 5000);
  };

  const contactInfo = [
    { icon: Mail, label: "Email", value: "hello@ecofuture.io" },
    { icon: Phone, label: "Phone", value: "+1 (555) 123-4567" },
    { icon: MapPin, label: "Location", value: "San Francisco, CA" },
  ];

  const socialLinks = [
    { icon: Github, href: "#", label: "GitHub", color: "hover:text-gray-400" },
    { icon: Linkedin, href: "#", label: "LinkedIn", color: "hover:text-blue-400" },
    { icon: Instagram, href: "#", label: "Instagram", color: "hover:text-pink-400" },
    { icon: Twitter, href: "#", label: "Twitter", color: "hover:text-sky-400" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-900 to-slate-800 pt-16">
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16" data-aos="fade-up">
            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent mb-6">
              Join the Green Movement
            </h1>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Be part of the change — reach out, collaborate, or share ideas.
              Together, we can build a sustainable future.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div data-aos="fade-right">
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-3xl p-8 border border-emerald-500/20">
                <h2 className="text-3xl font-bold text-emerald-400 mb-6">Get in Touch</h2>

                {submitted && (
                  <div
                    className="mb-6 bg-emerald-500/20 border border-emerald-500/50 rounded-xl p-4"
                    data-aos="fade-in"
                  >
                    <p className="text-emerald-400 font-medium">
                      Thank you for reaching out! We'll get back to you soon.
                    </p>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`w-full bg-slate-900/50 border ${
                        errors.name ? "border-red-500" : "border-emerald-500/30"
                      } rounded-xl px-4 py-3 text-gray-200 focus:outline-none focus:border-emerald-500 transition-colors`}
                      placeholder="John Doe"
                    />
                    {errors.name && <p className="mt-1 text-sm text-red-400">{errors.name}</p>}
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full bg-slate-900/50 border ${
                        errors.email ? "border-red-500" : "border-emerald-500/30"
                      } rounded-xl px-4 py-3 text-gray-200 focus:outline-none focus:border-emerald-500 transition-colors`}
                      placeholder="john@example.com"
                    />
                    {errors.email && <p className="mt-1 text-sm text-red-400">{errors.email}</p>}
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                      Your Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows="6"
                      className={`w-full bg-slate-900/50 border ${
                        errors.message ? "border-red-500" : "border-emerald-500/30"
                      } rounded-xl px-4 py-3 text-gray-200 focus:outline-none focus:border-emerald-500 transition-colors resize-none`}
                      placeholder="Tell us about your ideas or questions..."
                    />
                    {errors.message && <p className="mt-1 text-sm text-red-400">{errors.message}</p>}
                  </div>

                  <button
                    type="submit"
                    className="w-full group bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-400 hover:to-cyan-400 text-white px-8 py-4 rounded-xl font-semibold transition-all shadow-lg shadow-emerald-500/50 hover:shadow-emerald-500/70 hover:scale-[1.02] flex items-center justify-center space-x-2"
                  >
                    <span>Send Message</span>
                    <Send className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </form>
              </div>
            </div>

            <div className="space-y-8" data-aos="fade-left">
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-3xl p-8 border border-emerald-500/20">
                <h3 className="text-2xl font-bold text-emerald-400 mb-6">Contact Information</h3>
                <div className="space-y-4">
                  {contactInfo.map((item, index) => (
                    <div key={index} className="flex items-start space-x-4 group">
                      <div className="relative">
                        <div className="absolute inset-0 bg-emerald-400/20 blur-xl group-hover:bg-emerald-400/40 transition-all"></div>
                        <div className="relative bg-slate-900 p-3 rounded-xl border border-emerald-500/30">
                          <item.icon className="h-6 w-6 text-emerald-400" />
                        </div>
                      </div>
                      <div>
                        <p className="text-sm text-gray-400">{item.label}</p>
                        <p className="text-gray-200 font-medium">{item.value}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-slate-800/50 backdrop-blur-sm rounded-3xl p-8 border border-emerald-500/20">
                <h3 className="text-2xl font-bold text-emerald-400 mb-6">Follow Us</h3>
                <div className="grid grid-cols-4 gap-4">
                  {socialLinks.map(({ icon: Icon, href, label, color }) => (
                    <a key={label} href={href} aria-label={label} className="group relative aspect-square">
                      <div className="absolute inset-0 bg-emerald-400/0 group-hover:bg-emerald-400/10 blur-xl transition-all"></div>
                      <div
                        className={`relative h-full bg-slate-900 rounded-xl border border-emerald-500/30 group-hover:border-emerald-500/60 transition-all flex items-center justify-center`}
                      >
                        <Icon className={`h-6 w-6 text-gray-400 transition-colors ${color}`} />
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              <div className="bg-slate-800/50 backdrop-blur-sm rounded-3xl overflow-hidden border border-emerald-500/20">
                <div className="h-64 bg-gradient-to-br from-emerald-900/30 to-cyan-900/30 flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 opacity-20">
                    <div className="absolute top-10 left-10 w-32 h-32 bg-emerald-500/30 rounded-full filter blur-3xl animate-pulse"></div>
                    <div className="absolute bottom-10 right-10 w-40 h-40 bg-cyan-500/30 rounded-full filter blur-3xl animate-pulse delay-700"></div>
                  </div>
                  <div className="relative text-center">
                    <MapPin className="h-12 w-12 text-emerald-400 mx-auto mb-4" />
                    <p className="text-gray-300 font-medium">San Francisco, CA</p>
                    <p className="text-gray-500 text-sm">Visit our headquarters</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
