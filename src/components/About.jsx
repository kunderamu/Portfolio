// Resume.js
import React from 'react';

const Resume = () => {
  return (
    <section id="resume" style={styles.section}>
      <h2 style={styles.heading}>My Resume</h2>
      <a href="/resume.pdf" download style={styles.button}>
        Download Resume
      </a>
    </section>
  );
};

const styles = {
  section: {
    minHeight: '100vh',
    backgroundColor: '#000',
    color: 'red',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  heading: {
    fontSize: '2rem',
    marginBottom: '2rem',
  },
  button: {
    padding: '1rem 2rem',
    backgroundColor: 'red',
    color: 'white',
    textDecoration: 'none',
    borderRadius: '5px',
    fontWeight: 'bold',
  },
};

export default Resume;
