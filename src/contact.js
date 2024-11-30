import React from 'react';
import './contact.css'; // Import CSS for styling

function ContactUs() {
  return (
    <div className="contact-us">
      <h1>Contact Us</h1>
      <p>We'd love to hear from you! If you have any questions or inquiries, feel free to reach out to us through any of the below listed platforms.</p>

      <div className="contact-info">
        <h2>Email Us</h2>
        <p>
          <a href="mailto:sophier8817@gmail.com">sophier8817@gmail.com</a>
        </p>

        <h2>Follow Us</h2>
        <p>Klip: 
          <a href="https://www.instagram.com/klip_sk/" target="_blank" rel="noopener noreferrer"> Instagram</a>
        </p>
    
        <p>Sora: 
          <a href="https://www.instagram.com/sr_sora_/" target="_blank" rel="noopener noreferrer"> Instagram</a>
        </p>
    
      </div>
    </div>
  );
}

export default ContactUs;