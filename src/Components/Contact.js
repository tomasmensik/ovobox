import React from "react";

const Contact = () => {
  return (
    <div className="contact-page-wrapper">
      <h1 className="primary-heading">Chcete dostávat novinky?</h1>
      <h1 className="primary-heading">Nechte nám email.</h1>
      <div className="contact-form-container">
        <input type="text" placeholder="vaseemailovaadresa@gmail.com" />
        <button className="secondary-button">Poslat</button>
      </div>
    </div>
  );
};

export default Contact;
