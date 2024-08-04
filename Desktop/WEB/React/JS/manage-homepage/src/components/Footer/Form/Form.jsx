import React, { useState } from "react";
import { motion } from "framer-motion";
import Feedback from "./Feedback";

import "./form.css";

function Form() {
  const [email, setEmail] = useState("");
  const [isValid, setValid] = useState(true);
  const [showFeedback, setFeedback] = useState(false);
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const updateEmail = (e) => {
    setEmail(e.target.value);
    setValid(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!emailRegex.test(email) || !email) {
      setValid(false);
    } else {
     setFeedback(true)
    }
  };

  const resetForm = () => {
    setEmail("");
    setValid(true);
    setFeedback(false);
  };
   const closeFeedback = () => {
    resetForm();
  };
  return (
    <>
      {isValid && showFeedback ? (
        <Feedback onClose={closeFeedback} />
      ) : (
        <form className={`form-container`} onSubmit={handleSubmit}>
          <div className={`input field`}>
            <label htmlFor="myEmail">
              <input
                type="text"
                name="email"
                placeholder="Updates in your inbox…"
                value={email}
                onChange={updateEmail}
                id="myEmail"
                className={`my-input ${!isValid && "input-error"}`}
                autoCorrect="false"
              />
            </label>
            {!isValid && (
              <span className="error">Please insert a valid email </span>
            )}{" "}
          </div>
          <div className="button field">
            <button type="submit" className="form-btn">
              Go
            </button>
          </div>
        </form>
      )}
    </>
  );
}

export default Form;
