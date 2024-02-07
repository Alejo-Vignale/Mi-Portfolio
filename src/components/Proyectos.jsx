import React from "react";
import "./CSS/Proyectos.css";
import gameIcon from "/gameIcon.png";
function Proyectos() {
  const projects = [
    {
      name: "Weather App",
      description:
        "Html, Css, JS and the use of an API to have the weather information you need",
      image: "/weather.png",
      url: "https://weather-app-rho-flame-43.vercel.app/",
    },
    {
      name: "Game Whack a mole",
      description: "Html, CSS and JS, hit Mario!",
      image: "/Whack.png",
      url: "https://game-whack-a-mole.vercel.app/",
      isGame: true,
    },
    {
      name: "Game Snake",
      description:
        "Html, CSS and JS used to make this classic game of the snake!! how big can you grow?",
      image: "/snake.png",
      url: "https://game-snake-rust.vercel.app/",
      isGame: true,
    },
    {
      name: "To Do List!",
      description: "Create, delete and mark, your daily use list",
      image: "/toDo.png",
      url: "https://to-do-list-two-bice.vercel.app/",
    },
    {
      name: "Pop Up",
      description: "Html, Css and JS used to make this classic pop up massege",
      image: "/popUp.png",
      url: "https://popup-wheat.vercel.app/",
    },
    {
      name: "Notes App",
      description: "Sticky notes for your daily use",
      image: "/Notes.png",
      url: "https://notes-app-eight-lovat.vercel.app/",
    },
    {
      name: "Calculator",
      description: "Common use calculator",
      image: "/calculator.png",
      url: "https://calculator-lake-phi.vercel.app/",
    },
    {
      name: "Music Player",
      description: "Play the song!!",
      image: "/music.png",
      url: "https://music-player-six-tau.vercel.app/",
    },
    {
      name: "Quizz App",
      description: "Are you ready to be tested?",
      image: "/quizz.png",
      url: "https://quizz-app-gilt.vercel.app/",
      isGame: true,
    },
    {
      name: "Password Generator",
      description: "Create your safe Password!",
      image: "/password.png",
      url: "https://random-password-one.vercel.app/",
    },
    {
      name: "Tostify Notification",
      description: "Different colors and warnings for you webpage!",
      image: "/tostify.png",
      url: "https://toastify-notification.vercel.app/",
    },
  ];

  return (
    <div className="proyectos-padre">
      {projects.map((project, index) => (
        <div key={index} className="project-folder">
          <img
            src={project.isGame ? gameIcon : "/folder.png"}
            alt="Folder Icon"
          />

          <h3>{project.name}</h3>
          <div className="info-container">
            <p>{project.description}</p>
            <img src={project.image} alt="" />
            <a href={project.url} target="_blank" rel="noopener noreferrer">
              View Project
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Proyectos;
