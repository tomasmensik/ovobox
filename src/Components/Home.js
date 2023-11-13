import React from "react";
import BannerBackground from "../Assets/home-banner-background.png";
import BannerImage from "../Assets/home-banner-image.png";
import Navbar from "./Navbar";
import { FiArrowRight } from "react-icons/fi";
import { Link } from "react-scroll";
import { TypeAnimation } from 'react-type-animation';

const Home = () => {
  return (
    <div className="home-container">
      <Navbar />
      <div className="home-banner-container">
        <div className="home-bannerImage-container">
          <img src={BannerBackground} alt="" />
        </div>
        <div className="home-text-section">
          <h1 className="primary-heading">
          <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'Namíchej si vlastní sušené ovoce!',
        1000, // wait 1s before replacing "Mice" with "Hamsters"
        'Ovoce přímo na míru!',
        1000,
        'Daruj někomu náš dárkový balíček!',
        1000
      ]}
      wrapper="span"
      speed={50}
      style={{ fontSize: '0.9em', display: 'inline-block' }}
      repeat={Infinity}
    />
    </h1>
          <p className="primary-text">
          Začni s námi svou vlastní ovocnou revoluci a objev, jaké lahodné dobroty vlastně existují.
          </p>
          <Link to="work-section" smooth={true} duration={500}>
          <button className="secondary-button">Objednat <FiArrowRight /></button>
        </Link>
        </div>
        <div className="home-image-section">
          <img src={BannerImage} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Home;
