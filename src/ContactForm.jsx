// src/ContactForm.jsx
import React from 'react';

const ContactForm = () => {
  return (
    <div className="container my-5 d-flex justify-content-center">
      <div
        className="p-4 shadow rounded bg-white"
        style={{ width: '700px', marginLeft: '400px' }} // Thoda right shift
      >
        <h3 className="text-center fw-bold mb-2">Get in Touch</h3>
        <p className="text-center text-muted mb-4">
          Do get in touch with us for any of your conveyance needs. We would be more than willing to assist you. We are just a call away.
        </p>

        <form>
          <div className="row mb-3">
            <div className="col">
              <input type="text" className="form-control" placeholder="First Name" />
            </div>
            <div className="col">
              <input type="text" className="form-control" placeholder="Last Name" />
            </div>
          </div>

          <div className="row mb-3">
            <div className="col">
              <input type="email" className="form-control" placeholder="Email" />
            </div>
            <div className="col">
              <input type="text" className="form-control" placeholder="Phone Number" />
            </div>
          </div>

          <div className="mb-3 d-flex gap-2 flex-wrap">
            <button type="button" className="btn btn-outline-info btn-sm">Become a Partner</button>
            <button type="button" className="btn btn-outline-info btn-sm">Agents</button>
            <button type="button" className="btn btn-outline-info btn-sm">Client</button>
            <button type="button" className="btn btn-outline-info btn-sm">Others</button>
          </div>

          <div className="mb-4">
            <textarea className="form-control" rows="4" placeholder="Message"></textarea>
          </div>

          <div className="text-center">
            <button type="submit" className="btn btn-info text-white px-4 rounded-pill">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
