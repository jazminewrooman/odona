import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      background: 'rgba(255, 255, 255, 0.1)',
      backdropFilter: 'blur(10px)',
      zIndex: 1000,
      padding: '1rem 0'
    }}>
      <div className="container" style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <Link to="/" style={{
          display: 'flex',
          alignItems: 'center',
          textDecoration: 'none',
          color: 'white',
          fontSize: '1.5rem',
          fontWeight: '700'
        }}>
          <img 
            src="/odonalogo.jpg" 
            alt="Odona Logo"
            style={{
              width: '40px',
              height: '40px',
              borderRadius: '50%',
              marginRight: '10px',
              objectFit: 'cover'
            }}
            onError={(e) => {
              e.target.style.display = 'none';
              e.target.nextSibling.style.display = 'flex';
            }}
          />
          <span style={{
            background: 'linear-gradient(135deg, #f6ad55 0%, #ed8936 100%)',
            width: '40px',
            height: '40px',
            borderRadius: '50%',
            display: 'none',
            alignItems: 'center',
            justifyContent: 'center',
            marginRight: '10px',
            fontSize: '1.2rem'
          }}>
            ✨
          </span>
          odona
        </Link>
        
        <nav style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
          <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>Home</Link>
          <Link to="/staking" style={{ color: 'white', textDecoration: 'none' }}>Staking</Link>
          <Link to="/dashboard" style={{ color: 'white', textDecoration: 'none' }}>Dashboard</Link>
          <Link to="/staking" className="btn btn-primary">
            Start Staking
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
