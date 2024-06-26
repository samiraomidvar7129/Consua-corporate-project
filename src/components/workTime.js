import React from "react";
import "../index.css";

// import react-lazy-load-------------------------------->

import {LazyLoadImage} from 'react-lazy-load-image-component';

const WorkTime = () => {
  return (
    <div className="workTime-parent">
      <span className="workTime-logoBox">
        <LazyLoadImage src="images/Logo/logo-light.png" alt="logo-light.png" loading="lazy" />
      </span>
      <p className="workTime-txt">
        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
        از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و
        سطرآنچنان که لازم است.
      </p>
      <h5> ساعات کاری</h5>
      <div className="workTime-content">
        <div className="workTime-span">
          <span>روزهای هفته ۸ صبح الی ۲۲ بعدازظهر</span>
          <span>آخر هفنه ۱۰ صبح الی ۱۲ بعد از ظهر</span>
        </div>
      </div>
    </div>
  );
};

export default WorkTime;
