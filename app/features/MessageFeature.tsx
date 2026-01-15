"use client";

import React, { useState } from "react";
import { Mail, Send, Linkedin, Github, CheckCircle } from "lucide-react";

export const MessageFeature: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, you would send the form data to a backend API
    console.log("Form submitted:", formData);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 3000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="space-y-6 animate-fadeIn">
      <div className="flex items-center gap-2 mb-4 text-gray-500">
        <Mail size={16} />
        <span className="text-sm uppercase tracking-wider">GET_IN_TOUCH</span>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Contact Form */}
        <div className="bg-slate-800/30 border border-slate-700/50 rounded-lg p-6">
          <h3 className="text-xl font-bold text-cyan-400 mb-4">
            Send a Message
          </h3>

          {submitted ? (
            <div className="flex flex-col items-center justify-center py-12 text-center">
              <CheckCircle className="text-green-400 mb-4" size={48} />
              <h4 className="text-lg font-semibold text-green-400 mb-2">
                Message Sent!
              </h4>
              <p className="text-gray-400">
                Thank you for reaching out. I&apos;ll get back to you soon.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm text-gray-400 mb-1"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-slate-900/50 border border-slate-600 rounded-lg px-4 py-2 text-gray-100 focus:border-cyan-500 focus:outline-none transition-colors"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm text-gray-400 mb-1"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-slate-900/50 border border-slate-600 rounded-lg px-4 py-2 text-gray-100 focus:border-cyan-500 focus:outline-none transition-colors"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm text-gray-400 mb-1"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full bg-slate-900/50 border border-slate-600 rounded-lg px-4 py-2 text-gray-100 focus:border-cyan-500 focus:outline-none transition-colors"
                  placeholder="How can I help?"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm text-gray-400 mb-1"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full bg-slate-900/50 border border-slate-600 rounded-lg px-4 py-2 text-gray-100 focus:border-cyan-500 focus:outline-none transition-colors resize-none"
                  placeholder="Tell me about your project or inquiry..."
                />
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
              >
                <Send size={18} />
                Send Message
              </button>
            </form>
          )}
        </div>

        {/* Contact Information */}
        <div className="space-y-6">
          <div className="bg-slate-800/30 border border-slate-700/50 rounded-lg p-6">
            <h3 className="text-xl font-bold text-cyan-400 mb-4">
              Contact Information
            </h3>
            <div className="space-y-4">
              <div>
                <h4 className="text-sm font-semibold text-gray-400 mb-1">
                  Email
                </h4>
                <a
                  href="mailto:your.email@example.com"
                  className="text-gray-300 hover:text-cyan-400 transition-colors"
                >
                  your.email@example.com
                </a>
              </div>
              <div>
                <h4 className="text-sm font-semibold text-gray-400 mb-1">
                  Location
                </h4>
                <p className="text-gray-300">Santiago, Chile</p>
                <p className="text-sm text-gray-400">
                  Open to remote opportunities in Canada
                </p>
              </div>
              <div>
                <h4 className="text-sm font-semibold text-gray-400 mb-1">
                  Availability
                </h4>
                <p className="text-gray-300">Open for new opportunities</p>
                <p className="text-sm text-gray-400">
                  Full-time • Contract • Consulting
                </p>
              </div>
            </div>
          </div>

          <div className="bg-slate-800/30 border border-slate-700/50 rounded-lg p-6">
            <h3 className="text-xl font-bold text-cyan-400 mb-4">
              Connect With Me
            </h3>
            <div className="space-y-3">
              <a
                href="https://linkedin.com/in/yourprofile"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-gray-300 hover:text-cyan-400 transition-colors group"
              >
                <div className="w-10 h-10 bg-slate-700/50 rounded-lg flex items-center justify-center group-hover:bg-cyan-500/20 transition-colors">
                  <Linkedin size={20} />
                </div>
                <div>
                  <div className="font-semibold">LinkedIn</div>
                  <div className="text-xs text-gray-400">
                    Let&apos;s connect professionally
                  </div>
                </div>
              </a>
              <a
                href="https://github.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-gray-300 hover:text-cyan-400 transition-colors group"
              >
                <div className="w-10 h-10 bg-slate-700/50 rounded-lg flex items-center justify-center group-hover:bg-cyan-500/20 transition-colors">
                  <Github size={20} />
                </div>
                <div>
                  <div className="font-semibold">GitHub</div>
                  <div className="text-xs text-gray-400">Check out my code</div>
                </div>
              </a>
              <a
                href="mailto:your.email@example.com"
                className="flex items-center gap-3 text-gray-300 hover:text-cyan-400 transition-colors group"
              >
                <div className="w-10 h-10 bg-slate-700/50 rounded-lg flex items-center justify-center group-hover:bg-cyan-500/20 transition-colors">
                  <Mail size={20} />
                </div>
                <div>
                  <div className="font-semibold">Email</div>
                  <div className="text-xs text-gray-400">
                    Direct communication
                  </div>
                </div>
              </a>
            </div>
          </div>

          <div className="bg-gradient-to-br from-cyan-900/30 to-blue-900/30 border border-cyan-500/30 rounded-lg p-6">
            <h4 className="text-lg font-semibold text-cyan-400 mb-2">
              Quick Response
            </h4>
            <p className="text-sm text-gray-300">
              I typically respond within 24 hours. For urgent matters, please
              indicate in the subject line.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
