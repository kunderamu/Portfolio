import React, { useState } from 'react';
import axios from 'axios';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/contact', formData);
      alert('Message sent successfully!');
    } catch (error) {
      alert('Failed to send message.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" placeholder="Your Name" onChange={handleChange} required />
      <input type="email" name="email" placeholder="Your Email" onChange={handleChange} required />
      <textarea name="message" placeholder="Your Message" onChange={handleChange} required></textarea>
      <button type="submit">Send Message</button>
    </form>
  );
}

export default Contact;