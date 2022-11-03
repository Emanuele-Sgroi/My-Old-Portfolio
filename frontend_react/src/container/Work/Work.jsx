import React, { useState, useEffect } from "react";
import { AiFillEye, AiFillGithub } from "react-icons/ai";
import { HiOutlineArrowSmLeft } from "react-icons/hi";
import { motion } from "framer-motion";
import "./Work.scss";
import { AppWrap } from "../../wrapper";
import { urlFor, client } from "../../client";

const variants = {
  visible: { opacity: [0, 1] },
};

const Work = () => {
  const [works, setWorks] = useState([]);
  const [currentProject, setCurrentProject] = useState(false);
  const [filterWork, setFilterWork] = useState([]);
  const [isVisible, setIsVisible] = useState(true);
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });

  const goBack = (item) => {
    setAnimateCard([{ y: 100, opacity: 0 }]);
    setTimeout(() => {
      setAnimateCard([{ y: 0, opacity: 1 }]);

      if (item !== item.title) {
        setFilterWork(works);
        setCurrentProject(false);
        setIsVisible(true);
      }
    }, 500);
  };

  useEffect(() => {
    const query = '*[_type == "works"]';

    client.fetch(query).then((data) => {
      setWorks(data);
      setFilterWork(data);
    });
  }, []);

  const handleWorkFilter = (item) => {
    setAnimateCard([{ y: 100, opacity: 0 }]);
    setTimeout(() => {
      setAnimateCard([{ y: 0, opacity: 1 }]);

      if (item === item.title) {
        setFilterWork(works);
      } else {
        setFilterWork(works.filter((work) => work.title.includes(item)));
        setCurrentProject(true);
        setIsVisible(false);
      }
    }, 500);
  };
  return (
    <React.Fragment key="portfolio">
      <div className="app__projects">
        <motion.div
          whileInView={{ opacity: [0, 1], x: [150, 0] }}
          transition={{ duration: 0.6 }}
          className="portfolio-head-text-container"
        >
          <div className="portfolio-head-text">
            <h2>Projects</h2>
            <div />
          </div>
        </motion.div>

        <motion.div
          whileInView={{ opacity: [0, 1] }}
          transition={{ duration: 0.6 }}
          animate={isVisible === true ? "visible" : ""}
          variants={variants}
          className="portfolio-subhead-text"
        >
          <p>
            {isVisible === true
              ? "Keep an eye on this section as there are some intresting things coming soon 😉"
              : `Here is the project!`}
          </p>
        </motion.div>

        <motion.div
          whileInView={{ opacity: [0, 1], y: [100, 0] }}
          transition={{ duration: 0.5 }}
          className="app__work-portfolio"
        >
          {filterWork.map((work, index) => (
            <motion.div
              animate={animateCard}
              transition={{ duration: 0.5, delayChildren: 0.5 }}
              className="app__work-card-container"
              key={index}
            >
              <div
                className={
                  currentProject === true
                    ? "no-show"
                    : "app__work-item app__flex"
                }
              >
                <div className="item-title-box">
                  <h1>{work.title}</h1>
                </div>
                <div className="item-img-box">
                  <img src={urlFor(work.imgUrl1)} alt={work.title} />
                </div>
                <div className="item-btn-box">
                  {["projects"].map((item) => (
                    <a href={`#${item}`} key={`link-${item}`}>
                      <button onClick={() => handleWorkFilter(work.title)}>
                        Open
                      </button>
                    </a>
                  ))}
                </div>
              </div>
              <div
                className={
                  currentProject === true
                    ? "app__work-project-open-container"
                    : "no-show"
                }
              >
                <div className="project-top hover-shadow">
                  <h1>{work.title}</h1>
                  {["projects"].map((item) => (
                    <a href={`#${item}`} key={`link-${item}`}>
                      <HiOutlineArrowSmLeft />
                      <button onClick={() => goBack(work.title)}>
                        Go back
                      </button>
                    </a>
                  ))}
                </div>
                <div className="project-middle">
                  <div className="project-section-one hover-shadow">
                    <img src={urlFor(work.imgUrl1)} alt={work.title} />
                  </div>

                  <div className="project-section-two">
                    <div className="section-two-text">
                      <div className="hover-shadow">
                        <h4>Description</h4>
                        <p>{work.description}</p>
                      </div>
                      <div className="hover-shadow">
                        <h4>Stack</h4>
                        <p>{work.tagView}</p>
                      </div>
                      <div className="hover-shadow">
                        <h4>What I have learned</h4>
                        <p>{work.learned}</p>
                      </div>
                      <div className="hover-shadow">
                        <h4>Level</h4>
                        <p style={{ color: `${work.levelColor}` }}>
                          {work.level}
                        </p>
                      </div>
                      <div className="hover-shadow">
                        <h4>Links</h4>
                        <div>
                          <a
                            href={work.projectLink}
                            target="_blank"
                            rel="noreferrer"
                          >
                            <AiFillEye />
                          </a>
                          <a
                            href={work.codeLink}
                            target="_blank"
                            rel="noreferrer"
                          >
                            <AiFillGithub />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        <div className="app__work-extra">
          <p>
            Visit my&nbsp;
            <a
              href="https://github.com/Emanuele-Sgroi"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
            &nbsp;for more projects
          </p>
        </div>
        <motion.div
          whileInView={{ opacity: [0, 1], scale: [0, 1] }}
          transition={{ duration: 0.3 }}
          className="atom"
        >
          <div className="nucleus"></div>
          <div className="orbit">
            <div className="electron"></div>
          </div>
          <div className="orbit">
            <div className="electron"></div>
          </div>
          <div className="orbit">
            <div className="electron"></div>
          </div>
        </motion.div>
      </div>
    </React.Fragment>
  );
};

export default AppWrap(Work, "projects");
