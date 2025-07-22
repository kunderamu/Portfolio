import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faInstagram, faGithub } from '@fortawesome/free-brands-svg-icons';

const Home = () => {
  return (
    <div
      style={{
        backgroundImage: 'url("/images/bg.jpg")',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        minHeight: '100vh',
      }}
    >
      {/* Hero Section */}
      <section
        style={{
          minHeight: '60vh',
          backgroundColor: 'grey',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '2rem',
          gap: '2rem',
        }}
      >
        {/* Image and Info */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            gap: '2rem',
            flexWrap: 'wrap',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          {/* Profile Image + Socials */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <div
              style={{
                width: '300px',
                height: '300px',
                padding: '6px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <img
                src="/images/img7.JPEG"
                alt="My Photo"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  border: '2px solid red',
                  borderRadius: '8px',
                  boxShadow: '0 0 20px black',
                }}
              />
            </div>

            {/* Social Media with Labels */}
            <div
              style={{
                marginTop: '1rem',
                display: 'flex',
                gap: '2rem',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              {/* LinkedIn */}
              <div style={{ textAlign: 'center' }}>
                <a
                  href="https://www.linkedin.com/in/kunderamu/"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ fontSize: '2rem', color: '#0A66C2' }}
                >
                  <FontAwesomeIcon icon={faLinkedin} />
                </a>
                <div style={{ color: 'green', fontWeight: 'bold', marginTop: '0.3rem' }}>
                  LinkedIn
                </div>
              </div>

              {/* Instagram */}
              <div style={{ textAlign: 'center' }}>
                <a
                  href="https://www.instagram.com/kramu812365/"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ fontSize: '2rem', color: '#E1306C' }}
                >
                  <FontAwesomeIcon icon={faInstagram} />
                </a>
                <div style={{ color: 'green', fontWeight: 'bold', marginTop: '0.3rem' }}>
                  Instagram
                </div>
              </div>

              {/* GitHub */}
              <div style={{ textAlign: 'center' }}>
                <a
                  href="https://github.com/kunderamu"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ fontSize: '2rem', color: '#333' }}
                >
                  <FontAwesomeIcon icon={faGithub} />
                </a>
                <div style={{ color: 'green', fontWeight: 'bold', marginTop: '0.3rem' }}>
                  GitHub
                </div>
              </div>
            </div>
          </div>

          {/* Info Box */}
          <div
            style={{
              backgroundColor: 'red',
              padding: '1.5rem',
              borderRadius: '8px',
              boxShadow: '0 0 20px black',
              maxWidth: '500px',
              color: 'white',
            }}
          >
            <h1 style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>Hello, I'm Ramu</h1>
            <p style={{ fontSize: '1.2rem', margin: 0 }}>
              Data Science enthusiast with a passion for data exploration, machine learning, NLP, and uncovering insights that drive impact.
            </p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        style={{
          backgroundColor: 'grey',
          minHeight: '40vh',
          padding: '4rem 2rem',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <h2 style={{ fontSize: '2.5rem', marginBottom: '2rem', color: 'black' }}>About Me</h2>
        <div
          style={{
            backgroundColor: 'red',
            padding: '2rem',
            borderRadius: '8px',
            boxShadow: '0 0 20px black',
            maxWidth: '1000px',
          }}
        >
          <p
            style={{
              color: 'white',
              lineHeight: '1.6',
              fontSize: '1.1rem',
              marginBottom: '1rem',
              textAlign: 'left',
            }}
          >
            I am currently pursuing a Master’s degree with a specialization in Data Science, Artificial Intelligence, and Digital Marketing, building on a solid foundation in Computer Science acquired through both my Bachelor’s degree and Diploma studies.
          </p>
          <p
            style={{
              color: 'white',
              lineHeight: '1.6',
              fontSize: '1.1rem',
              marginBottom: '1rem',
              textAlign: 'left',
              textIndent: '1rem',
            }}
          >
            Throughout my education, I have gained extensive hands-on experience in data analytics and machine learning, developing the ability to extract meaningful insights from complex datasets. I am skilled in applying advanced analytical techniques and building predictive models to solve real-world problems.
          </p>
          <p
            style={{
              color: 'white',
              lineHeight: '1.6',
              fontSize: '1.1rem',
              marginBottom: '1rem',
              textAlign: 'left',
              textIndent: '1rem',
            }}
          >
            I am passionate about transforming raw data into actionable solutions that drive innovation and business growth. My goal is to continuously learn and stay at the forefront of emerging technologies, methodologies, and industry trends.
          </p>
          <p
            style={{
              color: 'white',
              lineHeight: '1.6',
              fontSize: '1.1rem',
              textAlign: 'left',
              textIndent: '1rem',
            }}
          >
            With a strong commitment to excellence and a growth mindset, I am excited to take on challenges that allow me to make a meaningful impact through data-driven decision-making and AI-powered solutions.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Home;
