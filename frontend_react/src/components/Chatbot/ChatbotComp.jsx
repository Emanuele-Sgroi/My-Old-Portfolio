import React, { useState } from "react";
import Chatbot from "react-chatbot-kit";

import Config from "./Config";
import ActionProvider from "./ActionProvider";
import MessageParser from "./MessageParser";

import { AiOutlineClose } from "react-icons/ai";
import { motion } from "framer-motion";

import "./ChatbotComp.scss";

const buttonVariants = {
  open: { x: 200 },
  closed: { x: 0 },
};

const chatVariants = {
  open: { opacity: 1, scale: 1 },
  closed: { opacity: 0, scale: 0 },
};

const ChatbotComp = () => {
  const [chatOpen, setChatOpen] = useState(false);
  const [chatLauncher, setChatLauncher] = useState(false);

  const openChat = () => {
    setChatOpen(!chatOpen);
    setChatLauncher(true);
  };

  return (
    <>
      <motion.div
        transition={{ duration: 0.5 }}
        animate={chatOpen === true ? "open" : "closed"}
        variants={buttonVariants}
        className="chatbot-button"
      >
        <button onClick={openChat}>
          <div>
            <span>C</span>
            <span>H</span>
            <span>A</span>
            <span>T</span>
          </div>
        </button>
      </motion.div>
      <motion.div
        transition={{ duration: 0.6 }}
        animate={chatOpen === true ? "open" : "closed"}
        variants={chatVariants}
        className="chatbot-container"
      >
        <div className="chatbot">
          <AiOutlineClose className="closeIcon" onClick={openChat} />
          <div className="chatbot-header">
            <h4>
              Conversation with <span>Emanuele-Bot</span>
            </h4>
          </div>
          <Chatbot
            config={chatLauncher === true ? Config : ""}
            actionProvider={ActionProvider}
            messageParser={MessageParser}
            validator={(input) => (input.length > 0 ? true : false)}
          />
        </div>
      </motion.div>
    </>
  );
};

export default ChatbotComp;
