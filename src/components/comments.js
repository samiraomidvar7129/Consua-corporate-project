import React from "react";
import "../index.css";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import './styles.css';

// import required modules
import { FreeMode, Autoplay } from "swiper/modules";

const Comments = () => {
  return (
    <section className="comments-wrapper">
      <div className="comments-title">
        <h3>نظرات کاربران</h3>
      </div>
      <section className="comments-slider">
        <Swiper
          slidesPerView={3}
          spaceBetween={20}
          loop={true}
          freeMode={true}
          
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 50,
            },
          }}
          modules={[FreeMode, Autoplay]}
          className="mySwiper"
        >
          <SwiperSlide className="swiperSlide">
            <div className="swiperSlide-content">
              <div className="swiperSlide-conten_avatar">
                <img src="images/Users/avatar-1.jpg" />
              </div>
              <div className="swiperSlide-content_title">
                <h4>بسیار توصیه شده</h4>
              </div>
              <p className="swiperSlide-content_text">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله
                در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد
                نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.
              </p>
              <div className="swiperSlide-content_userName">
                <span className="swiperSlide-content_name">هانیه صفایی</span>
                <span><img src="images/Partners/1.png"/></span>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiperSlide">
            <div className="swiperSlide-content">
              <div className="swiperSlide-conten_avatar">
                <img src="images/Users/avatar-2.jpg" />
              </div>
              <div className="swiperSlide-content_title">
                <h4>بسیار توصیه شده</h4>
              </div>
              <p className="swiperSlide-content_text">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله
                در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد
                نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.
              </p>
              <div className="swiperSlide-content_userName">
                <span className="swiperSlide-content_name"> یاسمین شیردل</span>
                <span><img src="images/Partners/2.png"/></span>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiperSlide">
            <div className="swiperSlide-content">
              <div className="swiperSlide-conten_avatar">
                <img src="images/Users/avatar-3.jpg" />
              </div>
              <div className="swiperSlide-content_title">
                <h4>بسیار توصیه شده</h4>
              </div>
              <p className="swiperSlide-content_text">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله
                در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد
                نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.
              </p>
              <div className="swiperSlide-content_userName">
                <span className="swiperSlide-content_name"> ستاره منوچهری</span>
                <span><img src="images/Partners/1.png"/></span>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiperSlide">
            <div className="swiperSlide-content">
              <div className="swiperSlide-conten_avatar">
                <img src="images/Users/avatar-1.jpg" />
              </div>
              <div className="swiperSlide-content_title">
                <h4>بسیار توصیه شده</h4>
              </div>
              <p className="swiperSlide-content_text">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله
                در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد
                نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.
              </p>
              <div className="swiperSlide-content_userName">
                <span className="swiperSlide-content_name"> علیرضا غفاری</span>
                <span><img src="images/Partners/1.png"/></span>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiperSlide">
            <div className="swiperSlide-content">
              <div className="swiperSlide-conten_avatar">
                <img src="images/Users/avatar-2.jpg" />
              </div>
              <div className="swiperSlide-content_title">
                <h4>بسیار توصیه شده</h4>
              </div>
              <p className="swiperSlide-content_text">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله
                در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد
                نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.
              </p>
              <div className="swiperSlide-content_userName">
                <span className="swiperSlide-content_name"> مینو مهدوی</span>
                <span><img src="images/Partners/2.png"/></span>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiperSlide">
            <div className="swiperSlide-content">
              <div className="swiperSlide-conten_avatar">
                <img src="images/Users/avatar-3.jpg" />
              </div>
              <div className="swiperSlide-content_title">
                <h4>بسیار توصیه شده</h4>
              </div>
              <p className="swiperSlide-content_text">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله
                در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد
                نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.
              </p>
              <div className="swiperSlide-content_userName">
                <span className="swiperSlide-content_name"> کاوه محمودی</span>
                <span><img src="images/Partners/1.png"/></span>
              </div>
            </div>
          </SwiperSlide>
         
        </Swiper>
      </section>
    </section>
  );
};
export default Comments;
