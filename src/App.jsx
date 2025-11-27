import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [formData, setFormData] = useState({
    name: "",
    workEmail: "",
    company: "",
    teamSize: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    setError("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.workEmail || !formData.company) {
      setError("Work email & company name are required.");
      return;
    }

    setIsSubmitting(true);

    // Yaha pe tum actual API call kar sakte ho (axios/fetch se)
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({
        name: "",
        workEmail: "",
        company: "",
        teamSize: "",
      });
    }, 700);
  };

  return (
    <div className="lp-root">
      {/* Glow background */}
      <div className="lp-glow lp-glow-1" />
      <div className="lp-glow lp-glow-2" />

      <header className="lp-nav">
        <div className="lp-logo">
          <span className="lp-logo-mark">●</span>
          <span className="lp-logo-text">MyindustryHouse</span>
        </div>
        <div className="lp-nav-right">
          <span className="lp-beta-tag">B2B SaaS • Private Beta</span>
        </div>
      </header>

      <main className="lp-main">
        {/* LEFT: HERO CONTENT */}
        <section className="lp-hero">
          <div className="lp-pill">
            <span className="dot" /> Coming Soon
            <span className="pill-divider">•</span>
            Early access for B2B teams
          </div>
          <h1 className="lp-title">
            The command center for
            <span className="lp-highlight"> your B2B workflows.</span>
          </h1>
          <p className="lp-subtitle">
            Your new unfair advantage in B2B business.
            We’re building a next-generation platform that eliminates operational chaos
            one place for leads, deals, customers, and team workflows. Powered by smart automation.
            e.
          </p>

          <ul className="lp-bullets">
            <li>⚡Automated follow-ups that never forget </li>
            <li>📈 A unified dashboard for every department </li>
            <li>🚀 Purpose-built for scaling B2B companies</li>
            <li>🔐 Enterprise-grade privacy, from day 1</li>
          </ul>

          <div className="lp-social-proof">
            <div className="lp-avatars">
              <span className="avatar avatar-1">SA</span>
              <span className="avatar avatar-2">MK</span>
              <span className="avatar avatar-3">RJ</span>
            </div>
            <div>
              <p className="lp-social-main">
                120+ teams already on the early access list
              </p>
              <p className="lp-social-sub">
                Get in before public launch & help shape the roadmap.
              </p>
            </div>
          </div>
        </section>

        {/* RIGHT: FORM CARD */}
        <section className="lp-form-section">
          <div className="lp-form-card">
            <div className="lp-form-header">
              <h2>Get early access</h2>
              <p>Apply for our private beta in under 30 seconds.</p>
            </div>

            <form onSubmit={handleSubmit} className="lp-form">

              <div className="lp-field">
                <label htmlFor="name">Full Name</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Your full name"
                  value={formData.name}
                  onChange={handleChange}
                  className="cream-input"
                />
              </div>

              <div className="lp-field">
                <label htmlFor="workEmail">
                  Email Address <span className="required">*</span>
                </label>
                <input
                  id="workEmail"
                  name="workEmail"
                  type="email"
                  placeholder="you@example.com"
                  value={formData.workEmail}
                  onChange={handleChange}
                  required
                  className="cream-input"
                />
              </div>

              <div className="lp-field">
                <label htmlFor="company">
                  Company <span className="required">*</span>
                </label>
                <input
                  id="company"
                  name="company"
                  type="text"
                  placeholder="Acme Technologies"
                  value={formData.company}
                  onChange={handleChange}
                  required
                  className="cream-input"
                />
              </div>

              <div className="lp-field">
                <label htmlFor="teamSize">Contact Number</label>
                <input
                  id="teamSize"
                  name="teamSize"
                  type="text"
                  placeholder="9876543210"
                  value={formData.teamSize}
                  onChange={handleChange}
                  className="cream-input"
                />
              </div>

              {error && <p className="lp-error">{error}</p>}
              {submitted && (
                <p className="lp-success">
                  ✅ You’re in! We’ll reach out with early access details soon.
                </p>
              )}

              <button className="lp-submit" type="submit" disabled={isSubmitting}>
                {isSubmitting ? "Adding you to the list..." : "Request early access"}
              </button>

              <p className="lp-footnote">
                No spam, ever. We’ll only email you about launch and early access.
              </p>

            </form>

          </div>

          <div className="lp-beta-info">
            <span className="lp-dot-pulse" />
            <span>Next beta cohort opens this month. Limited spots.</span>
          </div>
        </section>
      </main>

      <footer className="lp-footer">
        <span>© {new Date().getFullYear()} Flowstack Labs</span>
        <span className="lp-footer-right">
          Built for modern B2B teams 🚀
        </span>
      </footer>
    </div>
  );
};

export default App;
