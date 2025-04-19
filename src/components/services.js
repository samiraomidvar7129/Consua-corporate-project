import React from "react";
import "../index.css";
import { IoIosTabletPortrait } from "react-icons/io";
import { LuGanttChartSquare } from "react-icons/lu";
import { FaMoneyCheck } from "react-icons/fa";
import { FaChartLine } from "react-icons/fa";

const Services = () => {
  return (
    <section className="services-wrapper">
      <div className="services-title">
        <h4 className="services-text">خدماتی که ماارائه می دهیم</h4>
      </div>
      <div className="services-cards-item">
        <div className="card-item">
          <span className="services-icon">
            <FaMoneyCheck />
          </span>
          <h6 className="card-item-title"> صندوق بازرگانی</h6>
          <p className="card-item-p">
            صندوق بازرگانی نقش کلیدی در تأمین منابع مالی، مدیریت سرمایه و حمایت
            از پروژه‌های بازرگانی ایفا می‌کند. با ارائه خدمات مالی متنوع، ریسک
            فعالیت‌های اقتصادی کاهش یافته و بستر رشد پایدار فراهم می‌شود.
          </p>
        </div>
        <div className="card-item">
          <span className="services-icon">
            <FaChartLine />
          </span>
          <h6 className="card-item-title">تصمیم‌گیری هوشمند </h6>
          <p className="card-item-p">
            شناخت دقیق از نیاز مشتریان و رفتار بازار، پایه‌ی هر استراتژی موفق
            است. ما با تحلیل داده‌ها، ترندها و رقبا، تصویری شفاف از بازار به شما
            ارائه می‌دهیم. با اطلاعات درست، تصمیم‌گیری شما هدفمند و سودآور خواهد
            بود.
          </p>
        </div>
        <div className="card-item">
          <span className="services-icon">
            <IoIosTabletPortrait />
          </span>
          <h6 className="card-item-title"> دیجیتال‌سازی استارتاپ‌ها </h6>
          <p className="card-item-p">
            مدیریت امروز یعنی تطبیق سریع، تصمیم‌گیری داده‌محور و تفکر آینده‌نگر.
            در دنیایی که تغییر، تنها ثابت دنیاست، ما راه‌حل‌هایی هوشمند برای رشد
            ارائه می‌دهیم. با ما، کسب‌وکارت فقط پیش نمی‌رود؛ جهش می‌کند.
          </p>
        </div>
        <div className="card-item">
          <span className="services-icon">
            <LuGanttChartSquare />
          </span>
          <h6 className="card-item-title"> مدیریت کسب و کار </h6>
          <p className="card-item-p">
            مدیریت مؤثر، ترکیبی از بینش، تصمیم‌گیری دقیق و رهبری الهام‌بخش است.
            با تمرکز بر بهره‌وری، رشد پایدار و نوآوری، کسب‌وکارها به موفقیت
            واقعی دست می‌یابند. ما در مسیر مدیریت حرفه‌ای، همراه و پشتیبان شما
            هستیم.
          </p>
        </div>
      </div>
    </section>
  );
};
export default Services;
