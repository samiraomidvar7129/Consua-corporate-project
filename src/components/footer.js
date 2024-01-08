import React from "react";
import '../index.css';
import Links from "./links";
import Explorations from "./explorations";
import WorkTime from "./workTime";
import FooterText from "./footerText";




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
    </section>
  );
};

export default Footer;
