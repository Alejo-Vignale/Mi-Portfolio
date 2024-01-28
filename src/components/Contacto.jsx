// Contacto.jsx
import React, { useState } from "react";
import "./CSS/Contacto.css";

function Contacto() {
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can add logic to handle form submission, like sending an email
    console.log("Email:", email);
    console.log("Subject:", subject);
    console.log("Message:", message);
    // Clear form fields after submission
    setEmail("");
    setSubject("");
    setMessage("");
  };

  return (
    <div className="contacto-padre">
      <h2>Contact Me</h2>
      <div className="contactBox">
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

export default Contacto;
