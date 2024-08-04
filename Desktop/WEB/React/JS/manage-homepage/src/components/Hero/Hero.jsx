import React, { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "../Navbar/Navbar";
import illustration from "../../assets/images/illustration-intro.svg";

import "../css/hero.css";

function Hero() {
  return (
    <div className={`hero wrapper`}>
      <Navbar />
      <div className={`hero-inner container`}>
        <div className="hero-image-container">
          <img
            src={illustration}
            alt="illustration-image"
            className="hero-img"
          />
        </div>
        <section className={`hero-text-container`}>
          <h1 className="hero-title">
            Bring everyone together to build better products.
          </h1>
          <p className="hero-parag">
            Manage makes it simple for software teams to plan day-to-day tasks
            while keeping the larger team goals in view.
          </p>
          <a className="link hero-cta">Get Started</a>
        </section>
      </div>
    </div>
  );
}

export default Hero;
