import React, { useState } from "react";

import { RiLinkedinFill, RiGithubLine } from "react-icons/ri";
import { motion } from "framer-motion";

import "./Navbar.scss";
import { images } from "../../constants";

const variants = {
  open: { opacity: 1, y: 0 },
  closed: { opacity: 0, y: "-110%" },
};

const buttonVariants = {
  openB: { rotate: -405 },
  closedB: { rotate: 0 },
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const [navColor, setNavColor] = useState(false);

  const changeNavColor = () => {
    if (window.scrollY >= 90) {
      setNavColor(true);
    } else {
      setNavColor(false);
    }
  };

  window.addEventListener("scroll", changeNavColor);
  return (
    <nav className={`${navColor ? "app__navbar navColor" : "app__navbar"}`}>
      <div className="app__navbar-logo">
        {["home"].map((item) => (
          <a href={`#${item}`} key={`link-${item}`}>
            <img src={images.mylogo} alt="logo" />
          </a>
        ))}
      </div>
      <ul className="app__navbar-links">
        <div className="links-one">
          {["home", "skills", "projects"].map((item) => (
            <li className="app__flex p-text" key={`link-${item}`}>
              <div />
              <a href={`#${item}`}>{item}</a>
            </li>
          ))}
        </div>
        <div className="app__navbar-socials">
          <li>
            <a
              href="https://www.linkedin.com/in/emanuele-sgroi-5b7b04220/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <RiLinkedinFill />
            </a>
          </li>
          <li>
            <a
              href="https://github.com/Emanuele-Sgroi"
              target="_blank"
              rel="noopener noreferrer"
            >
              <RiGithubLine />
            </a>
          </li>
        </div>
        <div className="links-two">
          {["contact"].map((item) => (
            <li className="app__flex p-text" key={`link-${item}`}>
              <a href={`#${item}`}>Let's connect</a>
            </li>
          ))}
        </div>
      </ul>
      <motion.div
        animate={isOpen === true ? "openB" : "closedB"}
        variants={buttonVariants}
        transition={{ duration: 0.5 }}
        onClick={() => setIsOpen((isOpen) => !isOpen)}
        className="burger-menu"
      >
        <div className="group1">
          <div className="g1_1" />
          <div className="g1_2" />
          <div className="g1_3" />
        </div>
        <div className="group2">
          <div className="g2_1" />
          <div className="g2_2" />
          <div className="g2_3" />
        </div>
        <div className="group3">
          <div className="g3_1" />
          <div className="g3_2" />
          <div className="g3_3" />
        </div>
      </motion.div>
      <motion.div
        animate={isOpen === true ? "open" : "closed"}
        variants={variants}
        transition={{ bounce: false }}
        className="app__navbar-side-menu"
      >
        <div className="side-links-container">
          <ul>
            {["home", "skills", "projects"].map((item) => (
              <li className="side-links-one p-text" key={`link-${item}`}>
                <a
                  href={`#${item}`}
                  onClick={() => setIsOpen((isOpen) => !isOpen)}
                >
                  {item}
                </a>
              </li>
            ))}
            <div className="side-socials">
              <li>
                <a
                  href="https://www.linkedin.com/in/emanuele-sgroi-5b7b04220/"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsOpen((isOpen) => !isOpen)}
                >
                  <RiLinkedinFill />
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/Emanuele-Sgroi"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsOpen((isOpen) => !isOpen)}
                >
                  <RiGithubLine />
                </a>
              </li>
            </div>
            <div className="side-links-two">
              {["contact"].map((item) => (
                <li className="app__flex p-text" key={`link-${item}`}>
                  <a
                    href={`#${item}`}
                    onClick={() => setIsOpen((isOpen) => !isOpen)}
                  >
                    Let's connect
                  </a>
                </li>
              ))}
            </div>
          </ul>
        </div>
      </motion.div>
    </nav>
  );
};

export default Navbar;
