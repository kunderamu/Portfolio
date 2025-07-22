import React, { useState, useEffect } from 'react';

const images = [
  { src: '/images/img1.PNG', label: 'IBM Data Professional Certification' },
  { src: '/images/img2.PNG', label: 'CISCO Introduction to Cyber Security' },
  { src: '/images/img4.PNG', label: 'Internshala Android App Development' },
  { src: '/images/img5.PNG', label: '1stop AI Internship Certificate' },
];

const Gallery = () => {
  const [current, setCurrent] = useState(0);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    // Set interval to change image every 8 seconds
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
      setLoaded(false);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div style={styles.page}>
      <div style={styles.frame}>
        {/* Show loading message until image loads */}
        {!loaded && (
          <p style={styles.loading}>Loading image...</p>
        )}
        <img
          src={images[current].src}
          alt={images[current].label}
          onLoad={() => setLoaded(true)}
          onError={() => setLoaded(true)} // On error also mark as loaded to hide loading
          style={{
            ...styles.image,
            display: loaded ? 'block' : 'none',
          }}
        />
        <p style={styles.label}>{images[current].label}</p>
      </div>
    </div>
  );
};

const styles = {
  page: {
    backgroundColor: 'grey',
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  frame: {
    width: '900px',
    height: '600px',
    backgroundColor: '#111',
    borderRadius: '10px',
    boxShadow: '0 0 20px red',
    border: '4px solid red',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    overflow: 'hidden',
    padding: '1rem',
  },
  image: {
    maxWidth: '100%',
    maxHeight: '100%',
    objectFit: 'contain',
    borderRadius: '6px',
  },
  label: {
    marginTop: '1rem',
    color: 'white',
    fontSize: '2rem',
    fontWeight: 'bold',
  },
  loading: {
    color: 'white',
    fontSize: '1.2rem',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    margin: 0,
  },
};

export default Gallery;
