
import React from "react";
import "./CSS/StartComponent.css";

const StartComponent = ({ onClose }) => {
  return (
    <div className="rectangle">

      <button className="closeButton" onClick={onClose}>
        Close
      </button>
    </div>
  );
};

export default StartComponent;
