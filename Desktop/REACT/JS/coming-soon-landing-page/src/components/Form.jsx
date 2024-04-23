import React, { useState } from "react";
import iconArrow from "../assets/images/icon-arrow.svg";
import errorIcon from "../assets/images/icon-error.svg";
import mobileIMG from "../assets/images/hero-mobile.jpg";
import desktopIMG from "../assets/images/hero-desktop.jpg";

function Form() {
  const [email, setEmail] = useState("");
  const [isValid, setIsValid] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  function handleChange(event) {
    const newVal = event.target.value;
    setEmail(newVal);
  }

  function handleClick() {
    setIsClicked(true);
    if (email === "" || !emailRegex.test(email)) {
      setIsValid(false);
    } else {
      setIsValid(true);
    }
  }

  return (
    <>
      <div className="item image">
        <picture>
          <source
            srcSet={mobileIMG}
            alt="hero-mobile-picture"
            media="(max-width: 950px)"
            id="mobile-img"
          />
          <img src={desktopIMG} alt="hero-desktop-picture" />
        </picture>
      </div>
      <section className=" item form">
        <div className="item text">
          <h1>
            <span>WE'RE</span> COMING SOON
          </h1>
          <p>
            Hello fellow shoppers! We're currently building our new fashion
            store. Add your email below to stay up-to-date with announcements
            and our launch deals.
          </p>
        </div>
        <div className={`form-wrapper ${isClicked && !isValid ? "error-state" : ""}`}>
          <input
            name="email"
            value={email}
            type="email"
            placeholder="Email Address"
            autoComplete="off"
            onChange={handleChange}
          />
          {isClicked && !isValid && (
            <img src={errorIcon} alt="error-icon" className="error-icon" />
          )}
          <button onClick={handleClick} type="submit">
            <img src={iconArrow} alt="icon-arrow" />
          </button>
        </div>
        {isClicked && !isValid &&<p className="error-message">Please provide a valid email</p>}
      </section>
    </>
  );
}
export default Form;
