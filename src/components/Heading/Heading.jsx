import React from "react";
import "./heading.css";

export const Heading = ({ text, style }) => {
  return (
    <div className="heading-container" data-aos="fade-up" style={style}>
      <h2 className="heading">{text}</h2>
      <span></span>
    </div>
  );
};
