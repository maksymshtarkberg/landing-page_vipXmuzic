import "./styles.css";

import React, { useState } from "react";
import logo from "../assets/Logo.png";
import logotext from "../assets/Text logo.png";
import CardOne from "../components/Card/Cardv1";
import Footer from "../containers/Footer/Footer";
import TransitionsSnackbar from "../components/Bidding/Bidding";

const Header = () => {
  const [open, setOpen] = useState(false);
  const [hide, setHide] = useState(false);
  const HandleClick = () => {
    setOpen(true);
    setTimeout(() => {
      setOpen(false);
      setHide(false);
    }, 1200);
    setTimeout(() => {
      setHide(true);
    }, 30);
  };
  return (
    <div className="header">
      <nav className="header-menu">
        <div className="header-logo">
          <img src={logo} alt="logo" className="header-logo" />
          <img src={logotext} alt="" />
        </div>

        <ul className="header-nav">
          <li> Schedule</li>
          <li>Speakers</li>
          <li>Ticket</li>
          <li>Contact</li>
        </ul>
      </nav>
      <div className="header-phone"></div>
      <h1 className="header-cards_title">App services</h1>
      <div className="header-cards">
        <CardOne />
        <CardOne />
        <CardOne />
        <CardOne />
      </div>
      <div className="header-about">
        <h1 className="header-title">Learn about the app</h1>
        <p className="header-text">
          Look no further! Our SBS The Show tickets are the simplest way for you
          to experience a live Kpop recording.
        </p>
        <div className="header-btn">
          <button
            onClick={HandleClick}
            className={`btn btn-mod ${hide ? "disp-non" : ""}`}
            type="button"
          >
            About App
          </button>
          <div class={`spinner ${open ? "disp-block" : ""}`}>
            <div class="spinner1"></div>
          </div>
        </div>
      </div>
      <div className="header-paragraf">
        <h2 className="header-bid_title">Bidding</h2>
        <TransitionsSnackbar />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Header;
