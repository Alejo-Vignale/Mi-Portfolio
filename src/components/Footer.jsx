import React, { useState, useEffect } from "react";
import "./Css/Footer.css";

import startImg from "../assets/Start.jpg";

function Footer() {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
      <div>
        <div className="footer">
          <div className="startButton">
            <img className="startImg" src={startImg} alt="Start" />
          </div>
          <div className="clock">{currentTime.toLocaleTimeString()}</div>
        </div>
      </div>

  );
}

export default Footer;
