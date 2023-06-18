import "./styles.css";
import BasicModal from "../components/Modal-form";
import React from "react";
import logo from "../assets/Logo.png";
import logotext from "../assets/Text logo.png";
import CardOne from "../components/Card/Cardv1";
import Footer from "../containers/Footer/Footer";
import TransitionsSnackbar from "../components/Bidding/Bidding";

import bigicon from "../assets/Bidding.svg";
import djicon from "../assets/musicbottom.svg";
import locicon from "../assets/Location.svg";
import driicon from "../assets/Drinks.svg";
import crown from "../assets/Crown.svg";

const Header = () => {
  const dataCards = [
    {
      cardname: "Bidding",
      carddescription: "This is a description of the bidding card",
      cardimage: bigicon,
      crown: crown,
      phraseStart: "Raise your bid to win",
    },
    {
      cardname: "DJ Playlist",
      carddescription: "This is a description of the product card",
      cardimage: djicon,
      crown: crown,
      phraseStart: "Playlist",
    },
    {
      cardname: "Location",
      carddescription: "This is a description of the contact card",
      cardimage: locicon,
      crown: crown,
      phraseStart: "Come as you are",
    },
    {
      cardname: "Drinks",
      carddescription: "This is a description of the contact card",
      cardimage: driicon,
      crown: crown,
      phraseStart: "Order",
    },
  ];

  return (
    <div className="header">
      <div className="container">
        <nav className="header-menu">
          <div className="header-logo">
            <img src={logo} alt="logo" className="header-logo" />
            <img src={logotext} alt="" />
          </div>

          <ul className="header-nav">
            <li>Contact</li>
            <li>Features</li>
            <li>About</li>
            <li>Home</li>
          </ul>
        </nav>
      </div>
      <div className="header-box container">
        <div className="header-phone"></div>
        <div className="header-box_title">
          <img src={logotext} alt="logo" />
          <p className="header-text">
            Look no further! Our SBS The Show tickets are the simplest way for
            you to experience a live Kpop recording.
          </p>
        </div>
      </div>

      <div className="container">
        <div className="lightning">
          <div class="lightning-wrapper-blue">
            <div class="lightning-image-blue"></div>
          </div>
        </div>
        <h1 className="header-cards_title">Features</h1>
        <div className="header-cards">
          {dataCards.map((card, index) => (
            <CardOne
              phraseStart={card.phraseStart}
              key={index}
              crown={card.crown}
              cardname={card.cardname}
              carddescription={card.carddescription}
              cardimage={card.cardimage}
            />
          ))}
        </div>
        <div class="lightning-wrapper">
          <div class="lightning-image"></div>
        </div>
      </div>
      <div className="container">
        <div className="header-about">
          <h1 className="header-title">Learn about the app</h1>
          <p className="header-text">
            Look no further! Our SBS The Show tickets are the simplest way for
            you to experience a live Kpop recording.
          </p>

          <BasicModal />
        </div>

        <div className="header-paragraf">
          <h2 className="header-bid_title">Songs bidding</h2>
          <TransitionsSnackbar />
        </div>

        <Footer />
      </div>
      <div className="late-img">
        <div className="late-img-elem"></div>
      </div>
    </div>
  );
};

export default Header;
