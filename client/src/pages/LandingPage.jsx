import React from 'react';
import './LandingPage.css';

const LandingPage = () => {
  return (
    <div className="landing-page">
    <div className="hero">
      <h1>Welcome to ReWear 👕</h1>
      <p>Swap or redeem clothes. Reduce waste. ReWear!</p>
      <button className="cta-button">Explore Items</button>
    </div>
    
    <div className="featured-section">
      <h2>🌟 Featured Listings</h2>
      <p>Discover the most trending items hand-picked just for you</p>
      <div className="carousel-placeholder">Carousel will be here soon!</div>
    </div>
    
    <div className="features-grid">
      <div className="feature-card">
        <h3>♻️ Eco-Friendly Swaps</h3>
        <p>Join a community that cares about sustainable fashion.</p>
      </div>
      <div className="feature-card">
        <h3>🚚 Hassle-Free Logistics</h3>
        <p>List, ship, and redeem items easily with built-in tools.</p>
      </div>
      <div className="feature-card">
        <h3>💬 Trusted by Users</h3>
        <p>Rated highly for transparency and ease of use.</p>
      </div>
    </div>
    
    <footer className="footer">
      © 2025 ReWear &nbsp;&middot;&nbsp;
      <a href="#">About</a>
      <a href="#">Terms</a>
      <a href="#">Privacy</a>
      <a href="#">Contact</a>
    </footer>
    </div>
  );
};

export default LandingPage;
