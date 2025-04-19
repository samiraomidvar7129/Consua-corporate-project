import React from "react";
import "../index.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { FcApproval } from "react-icons/fc";


// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import react-lazy-load-------------------------------->

import { LazyLoadImage } from "react-lazy-load-image-component";

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
          className="mySwiper">
          <SwiperSlide className="swiperSlide">
            <div className="swiperSlide-content">
              <div className="swiperSlide-conten_avatar">
                <LazyLoadImage src="images/Users/avatar-1.jpg" loading="lazy" />
              </div>
              <div className="swiperSlide-content_title">
                <h4>بسیار توصیه شده</h4>
                <FcApproval className="swiperSlide-content_title--ico"/>
              </div>
              <p className="swiperSlide-content_text">
                "تجربه همکاری با این تیم بی‌نظیر بود. خدمات حرفه‌ای، پشتیبانی
                سریع و پاسخگویی دقیق باعث شد تا احساس اطمینان کامل داشته باشیم.
                آنها به تمام جزئیات توجه می‌کنند و همیشه بهترین راه‌حل‌ها را
              ارائه می‌دهند. از همراهی شما سپاسگزاریم 
              </p>
              <div className="swiperSlide-content_userName">
                <span className="swiperSlide-content_name">هانیه صفایی</span>
                <span>
                  <img src="images/Partners/1.png" />
                </span>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiperSlide">
            <div className="swiperSlide-content">
              <div className="swiperSlide-conten_avatar">
                <LazyLoadImage src="images/Users/avatar-2.jpg" loading="lazy" />
              </div>
              <div className="swiperSlide-content_title">
                <h4>بسیار توصیه شده</h4>
                <FcApproval className="swiperSlide-content_title--ico"/>
              </div>
              <p className="swiperSlide-content_text">
                "ممنون از مشاوره‌های مالی دقیقی که به ما ارائه دادید. همکاری با
                شما به ما کمک کرد تا تصمیم‌های مهم و به‌موقعی بگیریم. تحلیل‌های
                شما واقعاً ارزشمند و دقیق بود. بدون شک از این به بعد برای هر
                گونه مشاوره مالی به شما مراجعه خواهیم کرد."
              </p>
              <div className="swiperSlide-content_userName">
                <span className="swiperSlide-content_name"> یاسمین شیردل</span>
                <span>
                  <img src="images/Partners/2.png" />
                </span>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiperSlide">
            <div className="swiperSlide-content">
              <div className="swiperSlide-conten_avatar">
                <LazyLoadImage src="images/Users/avatar-3.jpg" loading="lazy" />
              </div>
              <div className="swiperSlide-content_title">
                <h4>بسیار توصیه شده</h4>
                <FcApproval className="swiperSlide-content_title--ico"/>
              </div>
              <p className="swiperSlide-content_text">
                "شرکت شما واقعاً استانداردهای بالایی را رعایت می‌کند. تیم شما نه
                تنها درک عمیقی از نیازهای ما داشت بلکه به سرعت و با دقت پاسخگو
                بود. پشتیبانی پس از فروش شما نیز عالی است. به خاطر حرفه‌ای بودن
                و تعهدتان از شما سپاسگزاریم."
              </p>
              <div className="swiperSlide-content_userName">
                <span className="swiperSlide-content_name"> ستاره منوچهری</span>
                <span>
                  <img src="images/Partners/1.png" />
                </span>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiperSlide">
            <div className="swiperSlide-content">
              <div className="swiperSlide-conten_avatar">
                <LazyLoadImage src="images/Users/avatar-1.jpg" loading="lazy" />
              </div>
              <div className="swiperSlide-content_title">
                <h4>بسیار توصیه شده</h4>
                <FcApproval className="swiperSlide-content_title--ico"/>
              </div>
              <p className="swiperSlide-content_text">
                "همکاری با تیم شما تجربه‌ای فوق‌العاده بود. با استفاده از
                مشاوره‌ها و استراتژی‌های ارائه شده، ما توانستیم به نتایج چشمگیری
                دست پیدا کنیم. توجه به جزئیات و ابتکارات شما در زمینه‌های مختلف،
                واقعاً تحسین‌برانگیز است. از شما بخاطر همراهی‌تان تشکر می‌کنیم."
              </p>
              <div className="swiperSlide-content_userName">
                <span className="swiperSlide-content_name"> علیرضا غفاری</span>
                <span>
                  <img src="images/Partners/1.png" />
                </span>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiperSlide">
            <div className="swiperSlide-content">
              <div className="swiperSlide-conten_avatar">
                <LazyLoadImage src="images/Users/avatar-2.jpg" loading="lazy" />
              </div>
              <div className="swiperSlide-content_title">
                <h4>بسیار توصیه شده</h4>
                <FcApproval className="swiperSlide-content_title--ico"/>
              </div>
              <p className="swiperSlide-content_text">
                "تیم شما واقعاً توانسته است به ما در رسیدن به اهداف بلندمدتمان
                کمک کند. روند مشاوره‌ها بسیار حرفه‌ای و مطابق با نیازهای
                کسب‌وکار ما بود. از انتخاب شما به عنوان شریک تجاری خود بسیار
                خوشحالیم. با اطمینان کامل، همکاری آینده خود را با شما ادامه
                خواهیم داد."
              </p>
              <div className="swiperSlide-content_userName">
                <span className="swiperSlide-content_name"> مینو مهدوی</span>
                <span>
                  <img src="images/Partners/2.png" />
                </span>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiperSlide">
            <div className="swiperSlide-content">
              <div className="swiperSlide-conten_avatar">
                <LazyLoadImage src="images/Users/avatar-3.jpg" loading="lazy" />
              </div>
              <div className="swiperSlide-content_title">
                <h4>بسیار توصیه شده</h4>
                <FcApproval className="swiperSlide-content_title--ico"/>
              </div>
              <p className="swiperSlide-content_text">
                "از همکاری با این تیم بسیار راضی هستیم. خدماتی با کیفیت بالا و
                پشتیبانی بی‌نظیر که همیشه به نیازهای ما پاسخ داده‌اند. تجربه کار
                با شما ما را به آینده‌ای روشن‌تر امیدوار کرده است. بی‌تردید در
                پروژه‌های آینده دوباره با شما همکاری خواهیم کرد."
              </p>
              <div className="swiperSlide-content_userName">
                <span className="swiperSlide-content_name"> کاوه محمودی</span>
                <span>
                  <img src="images/Partners/1.png" />
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
