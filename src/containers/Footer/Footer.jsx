import "./styles.css";
import FacebookTwoToneIcon from "@mui/icons-material/FacebookTwoTone";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";

const Footer = () => {
  return (
    <footer className="footer">
      <ul className="social-icon">
        <li className="social-icon__item">
          <a className="social-icon__link" href="#">
            <FacebookTwoToneIcon />
          </a>
        </li>
        <li className="social-icon__item">
          <a className="social-icon__link" href="#">
            <LinkedInIcon />
          </a>
        </li>
        <li className="social-icon__item">
          <a className="social-icon__link" href="#">
            <InstagramIcon />
          </a>
        </li>
      </ul>
      <ul className="menu">
        <li className="menu__item">
          <a className="menu__link" href="#">
            Home
          </a>
        </li>
        <li className="menu__item">
          <a className="menu__link" href="#">
            About
          </a>
        </li>
        <li className="menu__item">
          <a className="menu__link" href="#">
            Features
          </a>
        </li>
        <li className="menu__item">
          <a className="menu__link" href="#">
            Contact
          </a>
        </li>
      </ul>
      <p>&copy;2023 vipXmuzic | All Rights Reserved</p>
    </footer>
  );
};

export default Footer;
