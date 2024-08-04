import React from "react";
import "./App.css"
import Hero from "./components/Hero/Hero";
import Features from "./components/Features/Features";
import Testimonial from "./components/Testimonial/Testimonial";
import CTA from "./components/CTA/CTA";
import Footer from "./components/Footer/Footer";


function App() {
 
  return (
    <main>
      <div className={`outer-container`}>
        <div className="inner-container">
        <Hero/>
        <Features/>
        <Testimonial/>
        <CTA/>
        <Footer/>
        </div>
      </div>
    </main>
  );
}

export default App;