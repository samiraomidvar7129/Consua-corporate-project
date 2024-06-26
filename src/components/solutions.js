import React from "react";
import "../index.css";


const Solutions = () => {
  return (
    <section className="solution-wrapper">
      <div className="solution-boxRight">
        <img src="images/Shape/arrow.png" className="solution-boxRight_arrowShape" alt="arrow-shape"/>
        <h1 className="solution-boxRight_title">
          انعطاف‌پذیری و ویژگی‌های متناسب با سبک هر تیم
        </h1>

        <p className="solution-boxRight_text">
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
          از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و
          سطرآنچنان که لازم است  
        </p>

        <div className="solution-boxRight_counter">
          <div className="solution-counter_items">
            <span className="solution-counter_item">۸۷٪</span>
            <span className="solution-counter_txt">مشتریان راضی</span>
          </div>
          <div className="solution-counter_items">
            <span className="solution-counter_item">۸۷٪</span>
            <span className="solution-counter_txt">رشد شرکت</span>
          </div>
        </div>
      </div>
      <div className="solution-boxLeft">
        <h2 className="solution-h2">
          ما راه حل ها و فناوری های کاملی را برای هر استارت آپ ارائه میکنیم
        </h2>
        <p className="solution-text">
          یک شرکت خدمات راه حل فناوری اطلاعات ممکن است به مشتریانی از صنایع
          مختلف مانند مراقبت های بهداشتی - مالی - آموزش و تولید خدمات ارائه دهد
          آنها ممکن است بر اساس پروژه ارائه خدمات برای یک پروژه ی خاص یا به صورت
          بلند مدت کار کنند
        </p>
      </div>
    </section>
  );
};

export default Solutions;
