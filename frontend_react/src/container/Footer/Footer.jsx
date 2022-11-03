import React, { useState, useEffect } from "react";

import { images } from "../../constants";
import { AppWrap } from "../../wrapper";
import { client } from "../../client";
import { RiLinkedinFill, RiGithubLine } from "react-icons/ri";
import { MdOutlineDoubleArrow } from "react-icons/md";
import { motion } from "framer-motion";
import "./Footer.scss";

const Footer = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [info, setInfo] = useState([]);
  const { name, email, message } = formData;

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    setLoading(true);

    const contact = {
      _type: "contact",
      name: name,
      email: email,
      message: message,
    };

    client
      .create(contact)
      .then(() => {
        setLoading(false);
        setIsFormSubmitted(true);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    const query = '*[_type == "info"]';
    client.fetch(query).then((data) => {
      setInfo(data);
    });
  }, []);
  return (
    <React.Fragment key="footer">
      <div className="app__footer">
        <motion.div
          whileInView={{ opacity: [0, 1], x: [-150, 0] }}
          transition={{ duration: 0.6 }}
          className="app__footer-header"
        >
          <div className="header-box">
            <div />
            <h2>Connect with me</h2>
          </div>
        </motion.div>
        <motion.div
          whileInView={{ opacity: [0, 1], y: [100, 0] }}
          transition={{ duration: 0.5 }}
          className="app__footer-container"
        >
          <div className="app__footer-cards">
            <div className="app__footer-card">
              <img src={images.email} alt="email" />
              {info.map((mail) => (
                <a href={`mailto:${mail.email}`} className="footer-text">
                  Send an email
                </a>
              ))}
            </div>
          </div>

          <div className="app__footer-form app_flex">
            <h3 className="footer-text">Or use the contact form...</h3>
            <div className="app__flex">
              <input
                className="footer-text"
                type="text"
                name="name"
                placeholder="Your Name"
                value={name}
                onChange={handleChangeInput}
              />
            </div>
            <div className="app__flex">
              <input
                className="footer-text"
                type="email"
                name="email"
                placeholder="Your Email"
                value={email}
                onChange={handleChangeInput}
              />
            </div>
            <div>
              <textarea
                className="footer-text"
                placeholder="Your Message"
                value={message}
                name="message"
                onChange={handleChangeInput}
              />
            </div>
            {!isFormSubmitted ? (
              <button
                type="button"
                className="footer-text"
                onClick={handleSubmit}
              >
                {loading ? "Sending" : "Send Message"}
              </button>
            ) : (
              <h1 className="submitted"> successful</h1>
            )}
          </div>
        </motion.div>
        <div className="footer-line" />
        <div className="app__footer-footer">
          <div className="footer-info-container">
            <div className="links-container">
              <div className="sections">
                <h5>Back to:</h5>
                {["home"].map((item) => (
                  <a href={`#${item}`} key={`link-${item}`}>
                    {item}
                  </a>
                ))}
                {["skills"].map((item) => (
                  <a href={`#${item}`} key={`link-${item}`}>
                    {item}
                  </a>
                ))}
                {["projects"].map((item) => (
                  <a href={`#${item}`} key={`link-${item}`}>
                    {item}
                  </a>
                ))}
              </div>
              <div className="socials">
                <h5>Visit my socials</h5>
                <div>
                  <a
                    href="https://www.linkedin.com/in/emanuele-sgroi-5b7b04220/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <RiLinkedinFill />
                  </a>
                  <a
                    href="https://github.com/Emanuele-Sgroi"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <RiGithubLine />
                  </a>
                </div>
              </div>
            </div>
            <div className="icon-container">
              {["home"].map((item) => (
                <a href={`#${item}`} key={`link-${item}`}>
                  <MdOutlineDoubleArrow />
                </a>
              ))}
            </div>
            <div className="thanks-container">
              <h5>Thanks for visiting my website</h5>
              <p>
                This website is an open source project, so feel free to use any
                parts of it.
              </p>
            </div>
          </div>

          <div className="copyright-container">
            <p>
              ©2022 - Created with &lt;3 by <span>Emanuele Sgroi</span>
            </p>
          </div>
        </div>

        <div className="atom2">
          <div className="nucleus2"></div>
          <div className="orbit2">
            <div className="electron2"></div>
          </div>
          <div className="orbit2">
            <div className="electron2"></div>
          </div>
          <div className="orbit2">
            <div className="electron2"></div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default AppWrap(Footer, "contact");
