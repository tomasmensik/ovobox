import React from "react";
import Logo from "../Assets/Logo.png";
import { BsTwitter } from "react-icons/bs";
import { SiLinkedin } from "react-icons/si";
import { BsYoutube } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer-wrapper">
      <div className="footer-section-one">
        <div className="footer-logo-container">
          <img src={Logo} alt="" />
        </div>
        <div className="footer-icons">
          <BsTwitter />
          <SiLinkedin />
          <BsYoutube />
          <FaFacebookF />
        </div>
      </div>
      <div className="footer-section-two">
        <div className="footer-section-columns">
          <span>Domů</span>
          <span>Produkty</span>
          <span>Kontakt</span>
          <span>FAQ</span>
        </div>
        <div className="footer-section-columns">
          <span>775 268 226</span>
          <span>info@ovobox.cz</span>
          <span>reklamace@ovobox.cz</span>
          <span>kontakt@ovobox.cz</span>
        </div>
        <div className="footer-section-columns">
          <span>Všeobecné smluvní podmínky</span>
          <span>Zásady ochrany osobních údajů</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
