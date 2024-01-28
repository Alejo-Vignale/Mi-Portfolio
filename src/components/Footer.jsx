import React, { useState, useEffect, useRef } from "react";
import "./Css/Footer.css";

import startImg from "../assets/Start.jpg";
import StartComponent from "./StartComponent";

function Footer() {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [showStart, setShowStart] = useState(false);
  const startRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      clearInterval(interval);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleClickOutside = (event) => {
    if (startRef.current && !startRef.current.contains(event.target)) {
      setShowStart(false);
    }
  };

  const handleButtonClick = () => {
    setShowStart(!showStart);
  };

  return (
    <div>
      {showStart && <StartComponent ref={startRef} />}
      <div className="footer">
        <div className="startButton">
          <img
            className="startImg"
            src={startImg}
            alt="Start"
            onClick={handleButtonClick}
          />
        </div>
        <div className="clock">{currentTime.toLocaleTimeString()}</div>
      </div>
    </div>
  );
}

export default Footer;
