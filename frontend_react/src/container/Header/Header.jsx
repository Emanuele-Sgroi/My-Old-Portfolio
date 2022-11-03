import React, { useMemo, useCallback } from "react";
import "./Header.scss";

import { motion } from "framer-motion";
import { images } from "../../constants";
import { AppWrap } from "../../wrapper";

import { Particles } from "react-tsparticles";
import { loadFull } from "tsparticles";

const Header = () => {
  const options = useMemo(() => {
    return {
      fullScreen: {
        enable: true, // enabling this will make the canvas fill the entire screen, it's enabled by default
        zIndex: 2, // this is the z-index value used when the fullScreen is enabled, it's 0 by default
      },
      interactivity: {
        events: {
          onClick: {
            enable: true, // enables the click event
            mode: "push", // adds the particles on click
          },
          onHover: {
            enable: true, // enables the hover event
            mode: ["grab", "bubble"], // make the particles run away from the cursor
          },
        },
        modes: {
          push: {
            quantity: 3, // number of particles to add on click
          },
          repulse: {
            distance: 50, // distance of the particles from the cursor
          },
        },
      },
      particles: {
        color: {
          value: "#edf582",
        },
        links: {
          enable: true, // enabling this will make particles linked together
          distance: 50, // maximum distance for linking the particles
        },
        move: {
          enable: true, // enabling this will make particles move in the canvas
          speed: { min: 0, max: 1 }, // using a range in speed value will make particles move in a random speed between min/max values, each particles have its own value, it won't change in time by default
        },
        opacity: {
          value: { min: 0.3, max: 0.7 }, // using a different opacity, to have some semitransparent effects
        },
        size: {
          value: { min: 1, max: 3 }, // let's randomize the particles size a bit
        },
        number: {
          density: {
            enabled: true,
            area: 1080,
          },
          limit: 0,
          value: 40,
        },
      },
    };
  }, []);

  const particlesInit = useCallback((engine) => {
    loadFull(engine);
  }, []);

  return (
    <div id="home" className="app__header" style={{ paddingTop: 0 }}>
      <Particles
        init={particlesInit}
        options={options}
        className="particlesClass"
      />

      <div className="fake-nav" />
      <div className="app__head-container">
        <motion.div
          whileInView={{ opacity: [0, 1], x: [-300, 0] }}
          transition={{ duration: 0.5 }}
          className="app__head-bio-container"
        >
          <h4>Welcome to my website</h4>
          <h2>
            Hi, I'm <span>Emanuele</span>.
          </h2>
          <h3>
            A <span>Programmer</span>.
          </h3>
          <p>
            I specialise in creating engaging digital experiences. I am
            currently learning blockchain development, since this is something I
            would like to master in the near future. This website's design is
            inspired by it. Enjoy!
          </p>
          {["skills"].map((item) => (
            <a key={`link-${item}`} href={`#${item}`}>
              View More
            </a>
          ))}
        </motion.div>
        <motion.div
          whileInView={{ opacity: [0, 1], scale: [0, 1] }}
          transition={{ duration: 0.5 }}
          className="app__head-img-container"
        >
          <img src={images.spaceship} alt="spaceship" className="spaceship" />
          <img src={images.planet} alt="planet" className="planet" />
        </motion.div>
      </div>
    </div>
  );
};

export default AppWrap(Header, "home");
