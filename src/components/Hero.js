import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <p style={{ fontSize: '1rem', opacity: 0.8, marginBottom: '1rem' }}>
              Start supporting
            </p>
            <h1>
              We light up futures: funding dreams with blockchain
            </h1>
            <div className="hero-buttons">
              <Link to="/staking" className="btn btn-primary">
                Start supporting
              </Link>
              <Link to="/staking" className="btn btn-secondary">
                Start supporting
              </Link>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Hero;
