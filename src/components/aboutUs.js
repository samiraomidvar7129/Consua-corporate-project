import React from "react";
import "../index.css";

// import react-lazy-load-------------------------------->

import {LazyLoadImage} from 'react-lazy-load-image-component';

const AboutUs = () => {
  return (
    <section className="aboutUs-wrapper">
      <div className="aboutUs-title">
        <h3 className="aboutUs-title-text">درباره شرکت</h3>
      </div>
      <div className="aboutUs-content">
        <div className="aboutUs-text">
          <p>
            در شرکت راه حل فناوری اطلاعات ما متعهد به ارائه خدمات و پشتیبانی
           . استثنائی به مشتریان خود هستیم .اگر با مشکلات فنی مواجه هستید و یا به  یکی از خدمات مجموعه ی ما نیاز دارید ما همراه شما خواهیم بود به عنوان صاحب یک کسب و کار کوچک می دانید که  داشتن راه حل های قابل اعتماد برای موفقیت ضروری است 
           در شرکت راه حل فناوری اطلاعات ما متعهد به ارائه خدمات و پشتیبانی
           . استثنائی به مشتریان خود هستیم .اگر با مشکلات فنی مواجه هستید و یا به  یکی از خدمات مجموعه ی ما نیاز دارید ما همراه شما خواهیم بود به عنوان صاحب یک کسب و کار کوچک می دانید که  داشتن راه حل های قابل اعتماد برای موفقیت ضروری است 
              
          </p>
        </div>
        <div className="aboutUs-imgBox">
          <LazyLoadImage src="images/AboutUs-img/about.png" alt="aboutUs-img" loading="lazy"/>
        </div>
      </div>
    </section>
  );
};
export default AboutUs;
