import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import Navigation from './Navigation';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        'service_vvui6u7',
        'template_zyc0vun',
        formData,
        'iOURGJ2s1fJ6kBxeq' // Replace with your EmailJS user ID (public key)
      )
      .then(
        (response) => {
          console.log('SUCCESS!', response.status, response.text);
          setStatus('Message sent successfully!');
          setFormData({ name: '', email: '', message: '' });
        },
        (err) => {
          console.error('FAILED...', err);
          setStatus('Failed to send message. Please try again.');
        }
      );
  };

  return (
   <div>
    <Navigation/>
     <section id="contact" style={styles.section}>
      <h2 style={styles.heading}>Contact Me</h2>
      
      <form style={styles.form} onSubmit={handleSubmit}>
        <div style={styles.formGroup}>
          <label htmlFor="name" style={styles.label}>Name</label>
          <input
            type="text"
            id="name"
            name="name"
            style={styles.input}
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            required
          />
        </div>
        <div style={styles.formGroup}>
          <label htmlFor="email" style={styles.label}>Email</label>
          <input
            type="email"
            id="email"
            name="email"
            style={styles.input}
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
            required
          />
        </div>
        <div style={styles.formGroup}>
          <label htmlFor="message" style={styles.label}>Message</label>
          <textarea
            id="message"
            name="message"
            style={styles.textarea}
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message"
            required
          ></textarea>
        </div>
        <button type="submit" style={styles.button}>Send Message</button>
      </form>
      {status && <p style={styles.status}>{status}</p>}
    </section>
   </div>
  );
};

const styles = {
  section: { padding: '50px 20px', backgroundColor: 'rgb(51, 54, 56)', textAlign: 'center' },
  heading: { fontSize: '2.5rem', marginBottom: '20px', color: ' rgb(105, 155, 255)' },
  text: { fontSize: '1rem', marginBottom: '30px', color: '#555' },
  form: { maxWidth: '500px', margin: '0 auto', textAlign: 'left' },
  formGroup: { marginBottom: '20px' },
  label: { display: 'block', marginBottom: '5px', fontSize: '1rem', color: ' rgb(105, 155, 255)' },
  input: { width: '100%', padding: '10px', fontSize: '1rem', border: '1px solid #ddd', borderRadius: '5px' },
  textarea: { width: '100%', padding: '10px', fontSize: '1rem', border: '1px solid #ddd', borderRadius: '5px', height: '100px' },
  button: { display: 'inline-block', padding: '10px 20px', fontSize: '1rem', color: '#fff', backgroundColor: 'hotpink', border: 'none', borderRadius: '5px', cursor: 'pointer', transition: 'background-color 0.3s ease' },
  status: { marginTop: '20px', fontSize: '1rem', color: '#007bff' },
};

export default ContactSection;
