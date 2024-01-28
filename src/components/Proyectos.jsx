import React from "react";
import "./CSS/Proyectos.css";

function Proyectos() {
  return (
    <div className="proyectos-padre">
      <video autoPlay loop muted className="background-video">
        <source src="maze.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div>Esta mostrando Proyectos</div>
    </div>
  );
}

export default Proyectos;
