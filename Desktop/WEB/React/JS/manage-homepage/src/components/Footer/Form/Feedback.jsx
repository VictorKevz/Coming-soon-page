import React, { useState } from "react";
import "./feedback.css"
import registered from "../../../assets/images/registered.svg"
function Feedback({onClose}) {
  return (
    <div className={`feedback-wrapper`}>
      <div className={`feedback-container`}>  
      <img src={registered} alt="check mark icon" className="feedback-icon" />
      <h6 className={`feedback-title`}>Thank You!</h6>
      <p className={`feedback-paragraph`}>Your email is registered!</p>

      <button className="feedback-btn" onClick={onClose}>
        Continue
      </button>
      </div>
    </div>
  );
}

export default Feedback;