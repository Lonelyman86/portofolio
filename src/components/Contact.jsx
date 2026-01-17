import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="section container contact-section">
      <h2 className="section-title">Get In Touch</h2>
      <h3 className="contact-subtitle">What's Next?</h3>
      <p className="contact-text">
        I'm currently looking for new opportunities, my inbox is always open.
        Whether you have a question or just want to say hi, I'll try my best to get back to you!
      </p>
      <a href="mailto:email@example.com" className="contact-button">
        Say Hello
      </a>
    </section>
  );
};

export default Contact;
