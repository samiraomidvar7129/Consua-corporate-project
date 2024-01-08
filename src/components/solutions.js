import React from "react";
import "../index.css";

const Solutions = () => {
  return (
    <section className="solution-wrapper">
      <div className="solution-content">
        <p className="solution-title">اطلاعات بیشتر  * </p>
        <h2 className="solution-h2"> ما راه حل ها و فناوری های کاملی را برای هر استارت آپ ارائه میکنیم</h2>
        <p className="solution-text">
           یک شرکت خدمات راه حل فناوری اطلاعات ممکن است به مشتریانی از صنایع
          مختلف مانند مراقبت های بهداشتی - مالی - آموزش و تولید خدمات ارائه دهد
           آنها ممکن است بر اساس پروژه ارائه خدمات برای یک پروژه ی خاص یا به
        صورت بلند مدت کار کنند </p>
      </div>
      <div className="solution-imgBox">
        <img src="images/PostImg/solution-img.jpg" alt="solution-img"/>
      </div>
    </section>
  );
};

export default Solutions;
