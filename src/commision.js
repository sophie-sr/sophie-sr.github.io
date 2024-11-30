import React, { useState } from 'react';
import emailjs from 'emailjs-com'; // Import EmailJS SDK
import './commision.css';

function CommissionRequest() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    description: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState({});
  const [sending, setSending] = useState(false); // To manage the sending state

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'file' ? files[0] : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    // Validate fields
    if (!formData.name) newErrors.name = 'Name is required';
    if (!formData.email) newErrors.email = 'Email is required';
    if (!formData.description) newErrors.description = 'Description is required';

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      setSending(true); // Show loading state

      // Prepare form data for sending
      const templateParams = {
        name: formData.name,
        email: formData.email,
        description: formData.description,
      };

      // Send email using EmailJS
      emailjs
        .send('service_axdas1b', 'template_0m40ski', templateParams, 'OzutztkoWdrQ0uCuV')
        .then(
          (response) => {
            console.log('Email sent successfully:', response);
            setIsSubmitted(true); // Show thank you message
            setSending(false); // Hide loading state
            // Optionally reset the form here after successful submission:
            setTimeout(() => {
              setIsSubmitted(false); // Return to form after 3 seconds (or any duration)
              setFormData({
                name: '',
                email: '',
                description: '',
              });
            }, 3000); // 3 seconds before returning to the form
          },
          (error) => {
            console.log('Email sending failed:', error);
            setSending(false);
          }
        );
    }
  };

  return (
    <div className="commission-request">
      {isSubmitted ? (
        <div className="thank-you-message">
          <h2>Thank you for your commission request!</h2>
          <p>We will get back to you soon.</p>
          {/* Optional: You could add a button here to manually reset the form */}
          <button id="returnToForm" onClick={() => {
            setIsSubmitted(false);
            setFormData({
              name: '',
              email: '',
              description: '',
            });
          }}>Return to Form</button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="commission-form">
          <h1>Request a Commission</h1>
          <p>Fill in the following form to submit a commission request. We will reach out shortly via email to follow-up with your request.</p> 
          <p>Please do not submit any personal data except your preferred name and email address. We will not be held responsible of any consequences that might occur should you submit any other personal information.</p>
          <div className="form-group">
            <label htmlFor="name">Name <span className="required">*</span></label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your preferred name"
            />
            {errors.name && <span className="error">{errors.name}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="email">Email Address <span className="required">*</span></label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your email address"
            />
            {errors.email && <span className="error">{errors.email}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="description">Description of Commission <span className="required">*</span></label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Provide a detailed description of your commission request, including product type. Additional considerations include price range, prefered artist(s), etc."
            />
            {errors.description && <span className="error">{errors.description}</span>}
          </div>

          <button type="submit" className="submit-button" disabled={sending}>
            {sending ? 'Sending...' : 'Submit Request'}
          </button>

          <div id="req-message"><span className="required">*</span> is required</div>
        </form>
      )}
    </div>
  );
}

export default CommissionRequest;