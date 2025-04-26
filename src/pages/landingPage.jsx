import React from "react";
import "./landingPage.css";

const LandingPage = () => {
  return (
    <div className="landing-container">
      {/* Hero Section */}
      <section className="hero">
        <h1>Trade Smarter, Not Harder</h1>
        <p>Discover powerful algorithmic trading strategies used by professionals.</p>
        <button className="cta-button">Get Started</button>
      </section>

      {/* Features Section */}
      <section className="features">
        <h2>Why Choose Us?</h2>
        <div className="feature-cards">
          <div className="feature-card">
            <h3>Reliable Strategies</h3>
            <p>Time-tested trading algorithms trusted by professionals.</p>
          </div>
          <div className="feature-card">
            <h3>Real-Time Insights</h3>
            <p>Get live market updates and trade with confidence.</p>
          </div>
          <div className="feature-card">
            <h3>Secure & Transparent</h3>
            <p>We ensure full transparency with cutting-edge security.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>© 2025 Trading Algorithms. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default LandingPage;
