import React from "react";
import "./App.scss";
import { Navbar, ChatbotComp } from "./components";
import { Footer, Header, Skills, Work } from "./container";

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <ChatbotComp />
      <Header />
      <Skills />
      <Work />
      <Footer />
    </div>
  );
};

export default App;
