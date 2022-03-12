import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import "./footer.styles.css";

const Footer = () => (
  <div className="footer">
    <main />
    <footer>
      <div className="footer__inner">
        {/* <div className="logo">Logo</div> */}
        {/* <nav> */}
        {/* <a href>© SafeEnd</a> */}
        <div className="site-name">SheHero</div>
        <div className="tagline">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit at
          laboriosam, repudiandae officiis velit
          <br></br> quisquam iusto nulla ab a doloremque minima quo explicabo
          reiciendis tenetur natus, magnam sequi quasi sed!
        </div>
        <div className="social">
          <a
            className="social-icon"
            href="https://github.com/arushi2715/SafeEnd"
          >
            <FaGithub />
          </a>
          <a
            className="social-icon"
            href="https://github.com/arushi2715/SafeEnd"
          >
            <FaInstagram />
          </a>
          <a
            className="social-icon"
            href="https://github.com/arushi2715/SafeEnd"
          >
            <FaLinkedin />
          </a>
          <a
            className="social-icon"
            href="https://github.com/arushi2715/SafeEnd"
          >
            <FiMail />
          </a>
        </div>
        <div className="love">Made with love by Panimo.</div>
        <div className="copyright">
          Copyright© SafeEnd. All rights reserved.
        </div>
        {/* </nav> */}
      </div>
    </footer>
  </div>
);

export default Footer;
