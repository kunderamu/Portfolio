// Resume.js
import React from 'react';

const Resume = () => {
  return (
    <section id="resume" style={styles.section}>
      <h2 style={styles.heading}>My Resume</h2>

      <div style={styles.buttonContainer}>
        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          style={{ ...styles.button, backgroundColor: 'blue' }}
        >
          View Resume
        </a>
      </div>
    </section>
  );
};

const styles = {
  section: {
    minHeight: '100vh',
    backgroundColor: 'grey',
    color: 'black',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  heading: {
    fontSize: '2rem',
    marginBottom: '2rem',
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'center',
    gap: '1rem',
  },
  button: {
    padding: '1rem 2rem',
    backgroundColor: 'red',
    color: 'white',
    textDecoration: 'none',
    borderRadius: '5px',
    fontWeight: 'bold',
    transition: 'background-color 0.3s',
  },
};

export default Resume;
