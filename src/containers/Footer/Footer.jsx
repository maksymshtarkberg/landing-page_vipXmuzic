import "./styles.css";
import FacebookTwoToneIcon from "@mui/icons-material/FacebookTwoTone";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";

const Footer = () => {
  return (
    <footer class="footer">
      <ul class="social-icon">
        <li class="social-icon__item">
          <a class="social-icon__link" href="#">
            <FacebookTwoToneIcon />
          </a>
        </li>
        <li class="social-icon__item">
          <a class="social-icon__link" href="#">
            <LinkedInIcon />
          </a>
        </li>
        <li class="social-icon__item">
          <a class="social-icon__link" href="#">
            <InstagramIcon />
          </a>
        </li>
      </ul>
      <ul class="menu">
        <li class="menu__item">
          <a class="menu__link" href="#">
            Home
          </a>
        </li>
        <li class="menu__item">
          <a class="menu__link" href="#">
            About
          </a>
        </li>
        <li class="menu__item">
          <a class="menu__link" href="#">
            Services
          </a>
        </li>
        <li class="menu__item">
          <a class="menu__link" href="#">
            Team
          </a>
        </li>
        <li class="menu__item">
          <a class="menu__link" href="#">
            Contact
          </a>
        </li>
      </ul>
      <p>&copy;2023 vipXmuzic | All Rights Reserved</p>
    </footer>
  );
};

export default Footer;
