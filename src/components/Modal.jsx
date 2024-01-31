import React, { useState } from "react";
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
          <button className="close-button" onClick={() => closeModal()}>
            Close
          </button>

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
            <button type="submit">Send</button>
          </form>
        </div>
      </div>

  );
}

export default Modal;
