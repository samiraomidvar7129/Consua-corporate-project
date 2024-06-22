import React from "react";
import '../index.css';
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import './styles.css';

// import required modules
import { Autoplay, Pagination } from "swiper/modules";

const Comments = () => {
  return (
    <section className="comments-wrapper">
      <div className="comments-title">
        <h3>نظرات کاربران</h3>
      </div>
      <section className="comments-slider">
      <Swiper
          slidesPerView={3}
          spaceBetween={30}
          loop={true}
          pagination={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          
          modules={[Autoplay,Pagination]}
          className="mySwiper"
        >
          <SwiperSlide className="swiperSlide">
            <h1 className="mySwiper-title">استراتژی هایی برای موفقیت پایدار</h1>
            <p className="mySwiper-txt">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله
              در ستون و سطرآنچنان که لازم است
            </p>
          </SwiperSlide>
          <SwiperSlide className="swiperSlide">
            <h1 className="mySwiper-title">تجزیه و تحلیل مالی برای توسعه</h1>
            <p className="mySwiper-txt">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله
              در ستون و سطرآنچنان که لازم است
            </p>
          </SwiperSlide>
          <SwiperSlide className="swiperSlide">
            <h1 className="mySwiper-title">تجزیه و تحلیل مالی برای توسعه</h1>
            <p className="mySwiper-txt">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله
              در ستون و سطرآنچنان که لازم است
            </p>
          </SwiperSlide>
        </Swiper>
      </section>
    </section>
  );
};
export default Comments;
