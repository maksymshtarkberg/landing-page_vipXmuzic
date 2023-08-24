import "./styles.css";
import BasicModal from "../components/Modal-form";
import React, { useRef } from "react";
import logo from "../assets/Logo.png";
import logotext from "../assets/Text logo.png";
import CardsSection from "../containers/Main/Main";
import Footer from "../containers/Footer/Footer";
import TransitionsSnackbar from "../components/Bidding/Bidding";
import { useScroll, motion, useTransform } from "framer-motion";

const Main = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.5, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);

  return (
    <div id="home" className="header">
      <div className="container">
        <nav className="header-menu">
          <motion.div
            className="header-logo"
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.4 }}
          >
            <a href="/">
              <img src={logo} alt="logo" className="header-logo" />
            </a>
            <div>
              <img
                src={logotext}
                alt="logo-text"
                className="header-logo_text"
              />
            </div>
          </motion.div>
          <motion.ul
            className="header-nav"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.1 }}
          >
            <li>
              <a href="#footer">Contact</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#features">Features</a>
            </li>
            <li>
              <a href="#home">Home</a>
            </li>
          </motion.ul>
        </nav>
      </div>
      <div className="header-box container">
        <motion.div
          className="header-phone"
          initial={{ x: "-50%" }}
          animate={{ x: 0 }}
          transition={{ duration: 1.1 }}
        ></motion.div>
        <motion.div
          className="header-box_title"
          initial={{ x: "50%" }}
          animate={{ x: 0 }}
          transition={{ duration: 1.1 }}
        >
          <img src={logotext} alt="logo" />
          <p className="header-text">
            Look no further! Our SBS The Show tickets are the simplest way for
            you to experience a live Kpop recording.
          </p>
        </motion.div>
      </div>

      <CardsSection />
      <motion.div
        ref={ref}
        style={{ scale: scaleProgress, opacity: opacityProgress }}
        className="container"
      >
        <div className="header-about">
          <h1 id="about" className="header-title">
            Learn about the app
          </h1>
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
      </motion.div>
      <div id="footer" className="late-img">
        <div className="late-img-elem"></div>
      </div>
    </div>
  );
};

export default Main;
