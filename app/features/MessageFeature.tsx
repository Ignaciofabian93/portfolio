"use client";
import { useState } from "react";
import {
  Mail,
  Send,
  Linkedin,
  Github,
  CheckCircle,
  AlertCircle,
  Loader2,
} from "lucide-react";
import Link from "next/link";

export const MessageFeature: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to send message");
      }

      setSubmitted(true);

      // Reset form after 5 seconds
      setTimeout(() => {
        setSubmitted(false);
        setFormData({ name: "", email: "", subject: "", message: "" });
      }, 5000);
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Failed to send message. Please try again."
      );
    } finally {
      setLoading(false);
    }
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
                Message Sent Successfully!
              </h4>
              <p className="text-gray-400 mb-2">
                Thank you for reaching out. I&apos;ll get back to you soon.
              </p>
              <p className="text-gray-500 text-sm">
                Check your email for a confirmation message.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {error && (
                <div className="flex items-start gap-2 p-3 bg-red-500/10 border border-red-500/30 rounded-lg">
                  <AlertCircle
                    className="text-red-400 shrink-0 mt-0.5"
                    size={18}
                  />
                  <p className="text-red-400 text-sm">{error}</p>
                </div>
              )}

              <div>
                <label
                  htmlFor="name"
                  className="block text-sm text-gray-400 mb-1"
                >
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  disabled={loading}
                  className="w-full bg-slate-900/50 border border-slate-600 rounded-lg px-4 py-2 text-gray-100 focus:border-cyan-500 focus:outline-none transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm text-gray-400 mb-1"
                >
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  disabled={loading}
                  className="w-full bg-slate-900/50 border border-slate-600 rounded-lg px-4 py-2 text-gray-100 focus:border-cyan-500 focus:outline-none transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm text-gray-400 mb-1"
                >
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  disabled={loading}
                  className="w-full bg-slate-900/50 border border-slate-600 rounded-lg px-4 py-2 text-gray-100 focus:border-cyan-500 focus:outline-none transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  placeholder="Job opportunity, collaboration, etc."
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm text-gray-400 mb-1"
                >
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  disabled={loading}
                  rows={5}
                  className="w-full bg-slate-900/50 border border-slate-600 rounded-lg px-4 py-2 text-gray-100 focus:border-cyan-500 focus:outline-none transition-colors resize-none disabled:opacity-50 disabled:cursor-not-allowed"
                  placeholder="Tell me about your project or opportunity..."
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full flex items-center justify-center gap-2 bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? (
                  <>
                    <Loader2 size={18} className="animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send size={18} />
                    Send Message
                  </>
                )}
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
                <Link
                  href="mailto:ignaciofabian93@gmail.com"
                  className="text-gray-300 hover:text-cyan-400 transition-colors"
                >
                  ignaciofabian93@gmail.com
                </Link>
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
                  Full-time • Contract • Visa Sponsorship
                </p>
              </div>
            </div>
          </div>

          <div className="bg-slate-800/30 border border-slate-700/50 rounded-lg p-6">
            <h3 className="text-xl font-bold text-cyan-400 mb-4">
              Connect With Me
            </h3>
            <div className="space-y-3">
              <Link
                href="https://www.linkedin.com/in/ignacio-rodríguez-rulas/"
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
              </Link>
              <Link
                href="https://github.com/Ignaciofabian93"
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
              </Link>
              <Link
                href="mailto:ignaciofabian93@gmail.com"
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
              </Link>
            </div>
          </div>

          <div className="bg-linear-to-br from-cyan-900/30 to-blue-900/30 border border-cyan-500/30 rounded-lg p-6">
            <h4 className="text-lg font-semibold text-cyan-400 mb-2">
              Quick Response
            </h4>
            <p className="text-sm text-gray-300">
              I typically respond within 24 hours. For urgent matters regarding
              Canadian job opportunities or visa sponsorship, please indicate in
              the subject line.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
