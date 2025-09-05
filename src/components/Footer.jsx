import { Container } from "react-bootstrap";
import { FaEnvelope, FaGithub, FaLinkedin, FaTwitter, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <Container className="footer-container">
        {/* Left - Logo / Name */}
        <div className="footer-logo"> Vignesh Kumar</div>

        {/* Middle - Quick Links */}
        <div className="footer-links">
          <a href="#hero">Home</a>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>

        {/* Right - Socials */}
        <div className="footer-socials">
          <a href="https://github.com/VigneshKumar-Tech-Design" target="_blank" rel="noreferrer">
            <FaGithub />
          </a>
          <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noreferrer">
            <FaLinkedin />
          </a>
          <a href="https://wa.link/6374368724" target="_blank" rel="noreferrer">
            <FaWhatsapp />
          </a>
          <a href="mailto:vigneshkumarofficial81@gmail.com">
            <FaEnvelope/>
          </a>
        </div>
      </Container>

      {/* Bottom line */}
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Vignesh Kumar. All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
