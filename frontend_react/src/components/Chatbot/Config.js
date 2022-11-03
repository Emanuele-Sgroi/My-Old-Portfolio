import React from "react";
import { createChatBotMessage } from "react-chatbot-kit";
import { images } from "../../constants";
import Options from "./options/Options";
import Photo from "./photo/Photo";

const botName = "Emanuele-Bot";

const config = {
  botName: botName,
  lang: "en",
  customStyles: {
    chatButton: {
      backgroundColor: "#4f00d6",
    },
  },
  customComponents: {
    header: () => <div style={{ display: "none" }} />,
    botAvatar: (props) => (
      <img
        src={images.chatme}
        alt="Emanuele"
        style={{ width: "60px", height: "60px", borderRadius: "50%" }}
      />
    ),
  },

  initialMessages: [
    createChatBotMessage(`Hi! I'm ${botName} 😀`, {
      delay: 100,
    }),
    createChatBotMessage("Choose from the options below or ask me something", {
      withAvatar: false,
      delay: 900,
      widget: "options",
    }),
  ],
  widgets: [
    {
      widgetName: "options",
      widgetFunc: (props) => <Options {...props} />,
    },
    {
      widgetName: "photo",
      widgetFunc: (props) => <Photo {...props} />,
    },
  ],
};

export default config;
