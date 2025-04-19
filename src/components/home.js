import React from "react";
import "../index.css";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules

import { Autoplay } from "swiper/modules";

// Components--------------------------------------------->

import Solutions from "./solutions";
import CounselingBtn from "./counselingBtn";
import Services from "./services";
import Banner from "./banner";
import Comments from "./comments";
import News from "./news";

// import react-lazy-load-------------------------------->

import { LazyLoadImage } from "react-lazy-load-image-component";

const Home = () => {
  return (
    <>
      <section className="slider-wrapper">
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          autoplay={{
            delay: 3800,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
          className="mySwiper" >
          <SwiperSlide className="swiperSlide">
            <h1 className="mySwiper-title">استراتژی هایی برای موفقیت پایدار</h1>
            <p className="mySwiper-txt">
              برای رسیدن به موفقیت پایدار، نیاز به برنامه‌ریزی هوشمندانه و
              هدف‌گذاری دقیق است. ما با تحلیل روندهای بازار، مسیر رشد بلندمدت را
              ترسیم می‌کنیم. پایداری تنها با سازگاری، نوآوری و تعهد به ارزش‌ها
              ممکن است. با ما، آینده‌ای مطمئن و پایدار بسازید.
            </p>
            <CounselingBtn />
          </SwiperSlide>
          <SwiperSlide className="swiperSlide">
            <h1 className="mySwiper-title">تجزیه و تحلیل مالی برای توسعه</h1>
            <p className="mySwiper-txt">
              تصمیم‌گیری صحیح بر پایه‌ی داده‌های دقیق و تحلیل‌های مالی
              امکان‌پذیر است. ما اطلاعات مالی را به بینش‌های استراتژیک تبدیل
              می‌کنیم. با بررسی سودآوری، نقدینگی و ریسک، راه موفقیت مالی را
              هموار می‌کنیم. شفافیت مالی، پایه‌ای برای رشد هوشمندانه است.
            </p>
            <CounselingBtn />
          </SwiperSlide>
          <SwiperSlide className="swiperSlide">
            <h1 className="mySwiper-title">پیام شرکتی تیم کانسوا</h1>
            <p className="mySwiper-txt">
              ما به ایجاد ارزش پایدار برای مشتریان، سهام‌داران و جامعه متعهدیم.
              با تیمی متخصص و نگاهی نوآورانه، به‌سوی آینده‌ای روشن قدم
              برمی‌داریم. ارزش‌های ما بر پایه‌ی اعتماد، کیفیت و مسئولیت‌پذیری
              استوار است. هر قدم ما، نشانه‌ای از تعهد به رشد و تعالی است.
            </p>
            <CounselingBtn />
          </SwiperSlide>
        </Swiper>
        <div className="slider-imgBox">
          <LazyLoadImage
            src="images/bannerImg/banner-img.png"
            className="slider-imgBox_img"
            alt="banner-img"
            loading="lazy"
          />
        </div>
      </section>
      <Solutions />
      <Services />
      <Banner />
      <Comments />
      <News />
    </>
  );
};
export default Home;