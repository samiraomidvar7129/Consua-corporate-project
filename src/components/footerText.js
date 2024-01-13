import React from 'react';
import '../index.css';
import SocialNetworks from "./socialNetworks";


const FooterText = () => {
  return (
    <div className="footer-item-txt">
       <div className="footer-item-img">
            <img className="footer-logo" src="images/Logo/logo.png" alt="logo.png" />
          </div>
          <p className="footer-item-p">
          در شرکت راه حل فناوری اطلاعات ما متعهد به ارائه خدمات و پشتیبانی  استثنائی به مشتریان خود هستیم 
          </p>
          <SocialNetworks/>
    </div>
  )
}

export default FooterText;
