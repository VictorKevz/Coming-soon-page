import React, { useState } from "react";
import { motion } from "framer-motion";

import "../css/cta.css";

function CTA() {
  return (
    <div className={`cta wrapper`}>
      <div className={`cta-inner container`}>
        <h5 className="cta-title">Simplify how your team works today.</h5>

        <a className="link cta-link">Get Started</a>
      </div>
    </div>
  );
}

export default CTA;
