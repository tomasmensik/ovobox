import React from "react";
import BannerBackground from "../Assets/home-banner-background.png";
import BannerImage from "../Assets/home-banner-image.png";
import Navbar from "./Navbar";
import { FiArrowRight } from "react-icons/fi";
import { Link } from "react-scroll";

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
            Namíchej si vlastní sušené ovoce!
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
