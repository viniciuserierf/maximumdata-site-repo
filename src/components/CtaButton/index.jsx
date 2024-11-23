import React from "react";
import "./CtaButton.css";

const CtaButton = ({ isVisible, href, text }) => {
  return (
    <a
      href={href}
      className={`cta-button sliding-button ${!isVisible ? "hidden" : "pulsing"}`}
    >
      {text}
    </a>
  );
};

export default CtaButton;
