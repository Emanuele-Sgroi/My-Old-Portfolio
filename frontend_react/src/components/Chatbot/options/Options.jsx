import React from "react";

import "./Options.scss";

const Options = (props) => {
  const options = [
    {
      text: "Experience",
      handler: props.actionProvider.handleExperience,
      id: 1,
    },
    {
      text: "About Me",
      handler: props.actionProvider.handleAboutMe,
      id: 2,
    },
    {
      text: "Skills",
      handler: props.actionProvider.handleSkills,
      id: 3,
    },
    {
      text: "About this website",
      handler: props.actionProvider.handleThisProject,
      id: 4,
    },
  ];

  const buttonsMarkup = options.map((option) => (
    <button key={option.id} onClick={option.handler} className="option-button">
      {option.text}
    </button>
  ));

  return <div className="options-container">{buttonsMarkup}</div>;
};

export default Options;
