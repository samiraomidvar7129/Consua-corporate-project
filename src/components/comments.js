import React from "react";
import '../index.css';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

const Comments = () => {
  return (
    <section className="comments-wrapper">
      <div className="comments-title">
        <h3>نظرات کاربران</h3>
        <p className="comments-title-p">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ</p>
      </div>
      <section className="comments-slider">
        <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
          <SwiperSlide>
            <div className="slider-content">
            <p className="comment-text">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
                استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
                در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد
                نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد
              </p>
              <div className="user-info">
                <img src="images/Users/avatar-1.jpg" alt="user-1" />
                <span className="user-name">
                  <span>سهیلا صادقی</span>
                  <span>طراح گرافیک</span>
                </span>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slider-content">
            <p className="comment-text">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
                استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
                در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد
                نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد
              </p>
              <div className="user-info">
                <img src="images/Users/avatar-2.jpg" alt="user-2" />
                <span className="user-name">
                  <span> یاسمین شیردل</span>
                  <span> توسعه دهنده وب</span>
                </span>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slider-content">
              <p className="comment-text">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
                استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
                در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد
                نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد
              </p>
              <div className="user-info">
                <img src="images/Users/avatar-3.jpg" alt="user-3" />
                <span className="user-name">
                  <span> نازنین پشتیبان</span>
                  <span> توسع دهنده بک اند</span>
                </span>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </section>
    </section>
  );
};
export default Comments;
