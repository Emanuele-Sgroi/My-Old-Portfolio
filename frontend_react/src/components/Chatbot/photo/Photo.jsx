import React from "react";

import { images } from "../../../constants";
import "./Photo.scss";

const Photo = (props) => {
  return (
    <div className="img-container">
      <img src={images.me} alt="me" />
    </div>
  );
};

export default Photo;
