import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();
  const [success, setSuccess] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_tnmgkca',
        'template_7ogwwwc',
        form.current,
        'q_SdVF2emQNVuODE9'
      )
      .then(() => {
        setSuccess(true);
        form.current.reset();
      })
      .catch((error) => {
        console.error('FAILED...', error.text);
      });
  };

  return (
    <section id="contact" style={styles.section}>
      <div style={styles.formBox}>
        <h2 style={styles.heading}>Contact Me</h2>
        <form ref={form} style={styles.form} onSubmit={sendEmail}>
          <input type="text" name="user_name" placeholder="Your Name" required style={styles.input} />
          <input type="email" name="user_email" placeholder="Your Email" required style={styles.input} />
          <textarea name="message" rows="5" placeholder="Message" required style={styles.textarea}></textarea>
          <button type="submit" style={styles.button}>Send</button>
          {success && <p style={styles.success}>Message sent successfully!</p>}
        </form>
      </div>
    </section>
  );
};

const styles = {
  section: {
    backgroundColor: 'grey',
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '2rem',
  },
  formBox: {
    backgroundColor: '#111', // slightly lighter than black for the box
    padding: '2rem',
    borderRadius: '10px',
    boxShadow: '0 0 20px red',
    width: '100%',
    maxWidth: '600px',
  },
  heading: {
    textAlign: 'center',
    marginBottom: '1.5rem',
    fontSize: '2rem',
    color: 'red',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
  },
  input: {
    padding: '1rem',
    fontSize: '1rem',
    border: '1px solid red',
    borderRadius: '5px',
    backgroundColor: '#222',
    color: 'white',
    outline: 'none',
  },
  textarea: {
    padding: '1rem',
    fontSize: '1rem',
    border: '1px solid red',
    borderRadius: '5px',
    backgroundColor: '#222',
    color: 'white',
    outline: 'none',
    resize: 'vertical',
  },
  button: {
    padding: '1rem',
    fontSize: '1.5rem',
    fontcolor:'lime',
    backgroundColor: 'grey',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
  },
  success: {
    color: 'lime',
    marginTop: '1rem',
    textAlign: 'center',
    fontWeight: 'bold',
  },
};

export default Contact;
