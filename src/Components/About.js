import React from "react";
import AboutBackground from "../Assets/about-background.png";
import AboutBackgroundImage from "../Assets/about-background-image.png";
import { BsFillPlayCircleFill } from "react-icons/bs";

const About = () => {
  return (
    <div className="about-section-container">
      <div className="about-background-image-container">
        <img src={AboutBackground} alt="" />
      </div>
      <div className="about-section-image-container">
        <img src={AboutBackgroundImage} alt="" />
      </div>
      <div className="about-section-text-container">
        <h1 className="primary-heading">
          Proč zrovna nás?
        </h1>
        <p className="primary-text">
        Nabízíme vám kvalitní lyofilizované ovoce speciálně namíchané, které zachovává chuť a výživovou hodnotu.
        </p>
        <p className="primary-text">
        Připojte se k nám a užijte si čerstvost a zdraví ovocných dobrot.
        </p>
        <div className="about-buttons-container">
          <button className="secondary-button">Dozvědět se více</button>
          <button className="watch-video-button">
            <BsFillPlayCircleFill /> Video
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
