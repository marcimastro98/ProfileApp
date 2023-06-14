import React, { useState } from "react";
import "./Contact.css";
import emailjs from "emailjs-com";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [feedback, setFeedback] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleInputChange = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setLoading(true);
    emailjs
      .send(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        form,
        process.env.REACT_APP_EMAILJS_USER_ID
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          setLoading(false);
          setFeedback("Success!");
          setForm({ name: "", email: "", message: "" });
          setTimeout(() => setFeedback(null), 3000);
        },
        (err) => {
          console.log("FAILED...", err);
          setLoading(false);
          setFeedback("Failed!");
          setTimeout(() => setFeedback(null), 3000);
        }
      );
  };

  return (
    <div className="contactSection">
      <p>Contact Me!</p>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleInputChange}
            required
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleInputChange}
            required
          />
        </label>
        <label>
          Message:
          <textarea
            name="message"
            value={form.message}
            onChange={handleInputChange}
            required
          />
        </label>
        <button type="submit" disabled={loading}>
          {loading ? "Sending..." : "Invia"}
        </button>
      </form>
      {loading && (
        <div className="loaderContainer">
          <div className="loader"></div>{" "}
        </div>
      )}
      {feedback && (
        <div
          className={
            feedback === "Success!" ? "feedbackMessage" : "feedbackMessageError"
          }
        >
          {feedback}
        </div>
      )}
    </div>
  );
};

export default Contact;
