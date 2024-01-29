import React, { useState } from "react";
import "./Css/Home.css";
import icon1 from "../assets/iconDisc.png";
import icon2 from "../assets/iconFolder.png";
import icon3 from "../assets/iconPc.png";
import Proyectos from "./Proyectos";
import MiCurriculum from "./MiCurriculum";
import Footer from "./Footer";
import StartComponent from "./StartComponent";
import Modal from "./Modal";

function Home() {
  const [selectedContent, setSelectedContent] = useState(null);
  const [showVideo, setShowVideo] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  const handleIconClick = (content) => {
    switch (content) {
      case "Proyectos":
        setSelectedContent(<Proyectos />);
        break;
      case "Contacto":
        setOpenModal(true);
        break;
      case "MiCurriculum":
        setSelectedContent(<MiCurriculum />);
        break;
      default:
        setSelectedContent(null);
    }

    setShowVideo(false);
  };

  const closeModal = () => {
    console.log("Closing modal...");
    setOpenModal(false);
  };
  

  return (
    <section className="layout">
      <div className="header"></div>
      <div className="leftSide"></div>
      <div className="body">
        <div className={`mainContainer ${showVideo ? "show-video" : ""}`}>
          {showVideo && (
            <video autoPlay loop muted className="background-video">
              <source src="./maze.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          )}
          <div className="container-wrapper">
            <div className="icons-container">
              <div
                className="icon"
                onClick={() => handleIconClick("Proyectos")}
              >
                <img src={icon1} alt="Icon 1" />
              </div>
              <div className="icon" onClick={() => handleIconClick("Contacto")}>
                <img src={icon2} alt="Icon 2" />
              </div>
              <div
                className="icon"
                onClick={() => handleIconClick("MiCurriculum")}
              >
                <img src={icon3} alt="Icon 3" />
              </div>
            </div>
            {selectedContent && (
              <div className="center-container">
                <div className="consoleMain">
                  <div className="consoleBlue"> Welcome</div>
                  <div className="consoleBox">{selectedContent}</div>
                </div>
              </div>
            )}
          </div>
          <Footer />
        </div>
      </div>
      <div className="rightSide"></div>
      <div className="bottom"></div>
      <Modal open={openModal} closeModal={closeModal} />
    </section>
  );
}

export default Home;
