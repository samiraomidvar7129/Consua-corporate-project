import React from 'react';
import '../index.css';
import SocialNetworks from "./socialNetworks";


const FooterText = () => {
  return (
    <div className="footer-item-txt">
       <div className="footer-item-img">
       <h2>آریا گستر</h2>

          </div>
          <p className="footer-item-p">
          در شرکت راه حل فناوری اطلاعات ما متعهد به ارائه خدمات و پشتیبانی  استثنائی به مشتریان خود هستیم 
          </p>
          <SocialNetworks/>
    </div>
  )
}

export default FooterText;
