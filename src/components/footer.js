import React from "react";
import '../index.css';
import Links from "./links";
import Explorations from "./explorations";
import WorkTime from "./workTime";
import FooterText from "./footerText";

// import react-lazy-load-------------------------------->

import {LazyLoadImage} from 'react-lazy-load-image-component';




const Footer = () => {
  return (
    <section className="footer">
      <div className="footer-content">
        <div className="footer-item ">
         <FooterText/>
        </div>
        <div className="footer-item">
       <Links/>
        </div>
        <div className="footer-item">
          <Explorations/>
        </div>
        <div className="footer-item">
          <WorkTime/>
        </div>
      </div>
      <span className="footer-shape">
        <LazyLoadImage src="images/Shape/times.png" alt="times-img" loading="lazy"/>
      </span>
    </section>
  );
};

export default Footer;
