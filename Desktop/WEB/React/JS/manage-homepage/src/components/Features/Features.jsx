import React from "react";
import "../css/features.css";
import { motion } from "framer-motion";
import featuresData from "./Data";
// import { fadeIn } from "../../Varinats";

function Features() {
  return (
    <div className="features wrapper">
      <div className="features-inner container">
        <article className="feature-text-container">
          <h2 className="feature-title">What’s different about Manage?</h2>
          <p className="feature-parag">
            Manage provides all the functionality your team needs, without the
            complexity. Our software is tailor-made for modern digital product
            teams.
          </p>
        </article>
        <motion.div className="features-card">
          {featuresData.map((feature) => {
            let featureClassName;
            if (feature.id === "01") {
              featureClassName = "first";
            }
            else if (feature.id === "02") {
              featureClassName = "second";
            }
            else {
              featureClassName = "third";
            }
            return (
              <div
                key={feature.id}
                className={`feature-item ${featureClassName}`}
              >
                <span className={`feature-item-num ${featureClassName}`}>
                  {feature.id}
                </span>

                <article
                  className={`feature-item-info-container ${featureClassName}`}
                >
                  <h3 className={`feature-item-title ${featureClassName}`}>{feature.title}</h3>
                  <p className={`feature-item-parag ${featureClassName}`}>{feature.parag}</p>
                </article>
              </div>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
}

export default Features;
