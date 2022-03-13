import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import "./footer.styles.css";

const Footer = () => (
  
  <div className="footer" style={{color:'rgb(189, 218, 165)'}}>
    <main />
    <footer>
      <div className="footer__inner">
   
        <div className="site-name">sheHero</div>
        <div className="tagline">
          Unite and make a difference.
        </div>
        <div className="social">
          <a
            className="social-icon"
            href="https://github.com/pari-hash/sheHacks/blob/master/README.md"
          >
            <FaGithub />
          </a>
          <a
            className="social-icon"
            href="https://www.instagram.com/anns_1411/"
          >
            <FaInstagram />
          </a>
          <a
            className="social-icon"
            href="https://www.linkedin.com/in/nirupama-singh-9492b8205/"
          >
            <FaLinkedin />
          </a>
          <a
            className="social-icon"
            href="#"
          >
            <FiMail />
          </a>
        </div>
        <div className="love">Made with love by Panimo.</div>
        <div className="copyright">
          Copyright© sheHero. All rights reserved.
        </div>
        {/* </nav> */}
      </div>
    </footer>
  </div>
);

export default Footer;
