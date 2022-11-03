import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { AppWrap } from "../../wrapper";
import { urlFor, client } from "../../client";

import { BsFillCaretLeftFill, BsCaretRightFill } from "react-icons/bs";
import { IoMdArrowDropdown } from "react-icons/io";

import "./Skills.scss";

const variants = {
  notShow: { rotate: 0 },
  show: { rotate: -180 },
};

const Skills = () => {
  const [skills, setSkills] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [secondIndex, setSecondIndex] = useState(1);
  const [thirdIndex, setThirdIndex] = useState(2);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    const query = '*[_type == "skills"]';
    client.fetch(query).then((data) => {
      setSkills(data);
    });
  }, []);

  const handleClick = (index) => {
    setCurrentIndex(index);
    setSecondIndex(index + 1);
    setThirdIndex(index + 2);
  };

  const showAllSkills = () => {
    setShowAll(!showAll);
  };

  return (
    <div className="app__skills">
      <div className="app__skills-content">
        <div className="app__skills-header">
          <motion.h1
            whileInView={{ opacity: [0, 1] }}
            transition={{ duration: 0.6 }}
          >
            Skills
          </motion.h1>
          <motion.div
            whileInView={{ opacity: [0, 1], x: [-150, 0] }}
            transition={{ duration: 0.6 }}
            className="header-div"
          />
          <motion.p
            whileInView={{ opacity: [0, 1] }}
            transition={{ duration: 0.6 }}
          >
            Browse through my ever-expanding list of skills.{" "}
          </motion.p>
        </div>
        <div className="app__skills-show-btn-container">
          <button onClick={showAllSkills}>
            Show <span>{showAll === false ? "ALL" : "LESS"}</span>
            <motion.div
              animate={showAll === true ? "show" : "notShow"}
              variants={variants}
              transition={{ duration: 0.5 }}
            >
              <IoMdArrowDropdown />
            </motion.div>
          </button>
        </div>

        {showAll === false ? (
          <motion.div
            whileInView={{ opacity: [0, 1], y: [-100, 0] }}
            transition={{ duration: 0.5 }}
            className="app__skills-container"
          >
            {skills.length && (
              <>
                <div className="mobile-arrows">
                  <div
                    className="mobile-arrow"
                    onClick={() =>
                      handleClick(
                        currentIndex === 0
                          ? skills.length - 3
                          : currentIndex - 1
                      )
                    }
                  >
                    <BsFillCaretLeftFill />
                  </div>
                  <div
                    className="mobile-arrow"
                    onClick={() =>
                      handleClick(
                        currentIndex === skills.length - 3
                          ? 0
                          : currentIndex + 1
                      )
                    }
                  >
                    <BsCaretRightFill />
                  </div>
                </div>
                <div
                  className="arrow"
                  onClick={() =>
                    handleClick(
                      currentIndex === 0 ? skills.length - 3 : currentIndex - 1
                    )
                  }
                >
                  <BsFillCaretLeftFill />
                </div>

                <div className="img-container">
                  <div className="icon-box">
                    <img
                      src={urlFor(skills[currentIndex].icon)}
                      alt={skills[currentIndex].name}
                    />
                    <div className="back" />
                    <div className="window-hover">
                      <h3>{skills[currentIndex].name}</h3>
                    </div>
                  </div>

                  <div className="icon-box">
                    <img
                      src={urlFor(skills[secondIndex].icon)}
                      alt={skills[secondIndex].name}
                    />
                    <div className="back" />
                    <div className="window-hover">
                      <h3>{skills[secondIndex].name}</h3>
                    </div>
                  </div>

                  <div className="icon-box">
                    <img
                      src={urlFor(skills[thirdIndex].icon)}
                      alt={skills[thirdIndex].name}
                    />
                    <div className="back" />
                    <div className="window-hover">
                      <h3>{skills[thirdIndex].name}</h3>
                    </div>
                  </div>
                </div>
                <div
                  className="arrow"
                  onClick={() =>
                    handleClick(
                      currentIndex === skills.length - 3 ? 0 : currentIndex + 1
                    )
                  }
                >
                  <BsCaretRightFill />
                </div>
              </>
            )}
          </motion.div>
        ) : (
          <motion.div
            whileInView={{ opacity: [0, 1], y: [100, 0] }}
            transition={{ duration: 0.5 }}
            className="app__skills-all-container"
          >
            {skills.map((skill, index) => (
              <div
                style={{ margin: "1rem" }}
                className="icon-box"
                key={skill + index}
              >
                <img src={urlFor(skill.icon)} alt={skill.name} />
                <div className="back" />
                <div className="window-hover">
                  <h3>{skill.name}</h3>
                </div>
              </div>
            ))}
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default AppWrap(Skills, "skills");
