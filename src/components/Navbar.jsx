import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Make sure this file is in the same folder

const navItems = [
  { label: 'Home', to: '/home' },
  { label: 'Projects', to: '/projects' },
  { label: 'Contact', to: '/contact' },
  { label: 'Resume', to: '/resume' },
  { label: 'Gallery', to: '/gallery' },
];

const Navbar = () => {
  return (
    <nav style={styles.nav}>
      <h1 style={styles.title}>KUNDE RAMU</h1>

      <div style={styles.links}>
        {navItems.map((item, index) => (
          <div className="flip-card" key={index}>
            <div className="flip-card-inner">
              <Link to={item.to} className="flip-card-front">
                {item.label}
              </Link>
              <Link to={item.to} className="flip-card-back">
                Go to {item.label}
              </Link>
            </div>
          </div>
        ))}
      </div>
    </nav>
  );
};

const styles = {
  nav: {
  backgroundColor: '#000',
  padding: '10px 40px',
  color: 'red',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  flexWrap: 'wrap',
  position: 'fixed',       // <-- fix the navbar
  top: 0,                  // <-- position at top
  left: 0,
  right: 0,
  zIndex: 1000,            // <-- ensure it stays on top of other elements
},

  title: {
    margin: 0,
    fontSize: '50px',
  },
  links: {
    display: 'flex',
    gap: '30px',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
};

export default Navbar;
