import React, { useState } from "react";
import { AiOutlineCloseSquare } from "react-icons/ai"; // Importing the close icon
import "./CSS/Contacto.css";

function Modal({ open, closeModal }) {
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [closing, setClosing] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email:", email);
    console.log("Subject:", subject);
    console.log("Message:", message);
    setEmail("");
    setSubject("");
    setMessage("");
    setClosing(true);
    setTimeout(() => {
      closeModal();
      console.log("Modal closed");
      setClosing(false);
    }, 200);
  };

  return (
    <div className={`modal-background ${open ? "open" : ""}`}>
      <div className={`modal-content ${closing ? "closing" : ""}`}>
        <div className="modal-header">
          <div className="close-button-wrapper">
            <button className="close-button" onClick={() => closeModal()}>
              <AiOutlineCloseSquare className="close-icon" />
            </button>
          </div>
        </div>
        <div className="header-divider" />
        <div className="form-content">
          <h2>Contact Me</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group email-input">
              <label htmlFor="email">Your Email:</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="subject">Subject:</label>
              <input
                type="text"
                id="subject"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message:</label>
              <textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              />
            </div>
            <button className="sendButton" type="submit">
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Modal;
