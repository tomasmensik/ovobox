import React from "react";
import ProfilePic from "../Assets/john-doe-image.png";
import { AiFillStar } from "react-icons/ai";

const Testimonial = () => {
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">Recenze</p>
        <h1 className="primary-heading">Co říkají ostatní?</h1>
        <p className="primary-text">
          Naše spokojení zákazníci nám říkají vše. Přečtěte si jejich recenze a objevte, proč jsme první volbou pro lyofilizované ovoce v předplatném.
        </p>
      </div>
      <div className="testimonial-section-bottom">
        <img src={ProfilePic} alt="" />
        <p>
        "Lyofilizované ovoce od vás je úžasné! Chutné, čerstvé a to balení je super. Díky!"
        </p>
        <div className="testimonials-stars-container">
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
        </div>
        <h2>Jirka Novák</h2>
      </div>
    </div>
  );
};

export default Testimonial;
