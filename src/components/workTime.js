import React from "react";
import "../index.css";

// import react-lazy-load-------------------------------->

const WorkTime = () => {
  return (
    <div className="workTime-parent">
      <p className="workTime-txt">
        شرکت ما با تکیه بر تجربه و نوآوری، خدماتی حرفه‌ای در زمینه [ بازاریابی دیجیتال]
        ارائه می‌دهد. متعهد به کیفیت، رضایت مشتری و پشتیبانی دائمی هستیم. هدف ما
        ایجاد راهکارهای مؤثر و ماندگار برای رشد کسب‌وکار شماست. برای مشاوره
        رایگان یا همکاری با ما در تماس باشید.
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
