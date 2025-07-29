import React from 'react';
import './ContactForm.css'; // Custom styles

const ContactForm = () => {
  return (
    <div className="contact-container py-5">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8 col-md-10">
            <div className="contact-card shadow-lg rounded-4 p-5 bg-white">
              <h2 className="text-center fw-bold mb-3 text-primary">Get in Touch</h2>
              <p className="text-center text-muted mb-4">
                We’re here to help with any of your transport or conveyance queries. Just fill out the form below and we’ll get back to you shortly.
              </p>

              <form>
                <div className="row mb-3">
                  <div className="col-md-6 mb-3 mb-md-0">
                    <input type="text" className="form-control custom-input" placeholder="First Name" />
                  </div>
                  <div className="col-md-6">
                    <input type="text" className="form-control custom-input" placeholder="Last Name" />
                  </div>
                </div>

                <div className="row mb-3">
                  <div className="col-md-6 mb-3 mb-md-0">
                    <input type="email" className="form-control custom-input" placeholder="Email" />
                  </div>
                  <div className="col-md-6">
                    <input type="text" className="form-control custom-input" placeholder="Phone Number" />
                  </div>
                </div>

                <div className="mb-4">
                  <label className="form-label fw-medium">I am a:</label>
                  <div className="d-flex flex-wrap gap-2">
                    <button type="button" className="btn btn-outline-primary custom-btn">Partner</button>
                    <button type="button" className="btn btn-outline-primary custom-btn">Agent</button>
                    <button type="button" className="btn btn-outline-primary custom-btn">Client</button>
                    <button type="button" className="btn btn-outline-primary custom-btn">Other</button>
                  </div>
                </div>

                <div className="mb-4">
                  <textarea className="form-control custom-textarea" rows="5" placeholder="Type your message..."></textarea>
                </div>

                <div className="text-center">
                  <button type="submit" className="btn btn-primary px-5 py-2 rounded-pill submit-btn">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;