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
        <h1 className="services-text">خدماتی که ماارائه می دهیم</h1>

      </div>
      <div className="services-cards-item">
        <div className="card-item">
          <span className="services-icon">
            <FaMoneyCheck />
          </span>
          <h6 className="card-item-title"> صندوق بازرگانی</h6>
          <p className="card-item-p">
            انها ممکن است طیف وسیعی از خدمات را ارائه دهند . از کار مبتنی بر
            پروژه گرفته تا نگهداری و پشتیبانی مداوم
          </p>
        </div>
        <div className="card-item">
          <span className="services-icon">
            <FaChartLine />
          </span>
          <h6 className="card-item-title"> تحقیقات بازار </h6>
          <p className="card-item-p">
            انها ممکن است طیف وسیعی از خدمات را ارائه دهند . از کار مبتنی بر
            پروژه گرفته تا نگهداری و پشتیبانی مداوم
          </p>
        </div>
        <div className="card-item">
          <span className="services-icon">
            <IoIosTabletPortrait />
          </span>
          <h6 className="card-item-title"> بازاریابی دیجیتال </h6>
          <p className="card-item-p">
            انها ممکن است طیف وسیعی از خدمات را ارائه دهند . از کار مبتنی بر
            پروژه گرفته تا نگهداری و پشتیبانی مداوم
          </p>
        </div>
        <div className="card-item">
          <span className="services-icon">
            <LuGanttChartSquare />
          </span>
          <h6 className="card-item-title"> مدیریت کسب و کار </h6>
          <p className="card-item-p">
            انها ممکن است طیف وسیعی از خدمات را ارائه دهند . از کار مبتنی بر
            پروژه گرفته تا نگهداری و پشتیبانی مداوم
          </p>
        </div>
      </div>
    </section>
  );
};
export default Services;
