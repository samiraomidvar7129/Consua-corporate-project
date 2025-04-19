import React from "react";
import { PiChartPieSliceThin } from "react-icons/pi";
import { PiUserSwitchThin } from "react-icons/pi";

// import react-lazy-load-------------------------------->

import { LazyLoadImage } from "react-lazy-load-image-component";

const Banner = () => {
  return (
    <div className="banner-parent">
      <div className="banner-inner">
        <div className="banner-inner_itemRight">
          <div className="banner-inner_itemRight--imgBox">
            <LazyLoadImage
              src="images/Banner/banner.jpg"
              className="banner-inner_itemRight--img"
              alt="banner-img"
              loading="lazy"
            />
          </div>
        </div>
        <div className="banner-inner_itemLeft">
          <div className="banner-inner_itemLeft--content">
            <h2 className="banner-inner_itemLeft--title">
              مشاوره مالی برای زمان چالش برانگیز
            </h2>
            <p className="banner-inner_itemLeft--txt">
              در شرایط اقتصادی ناپایدار، تصمیم‌گیری‌های مالی صحیح و به‌موقع
              می‌تواند آینده کسب‌وکار شما را تغییر دهد. ما با تحلیل دقیق وضعیت
              مالی و شناسایی فرصت‌ها و تهدیدها، راه‌حل‌های بهینه برای عبور از
              بحران‌ها ارائه می‌دهیم. استراتژی‌های ما بر پایه‌ی کاهش ریسک و
              افزایش نقدینگی متمرکز است تا شما را در مسیر رشد پایدار هدایت کند.
              با مشاوره مالی تخصصی، از فشارهای اقتصادی کاسته و به سمت بازسازی و
              تقویت مالی پیش بروید. تیم ما در کنار شماست تا با استراتژی‌های
              حساب‌شده، به بهترین نتیجه ممکن دست یابید. همراه با شما در هر مرحله
              از این چالش‌ها، راه‌حل‌هایی مطمئن و هوشمندانه خواهیم یافت.
            </p>
            <div className="banner-inner_itemLeft--items">
              <div className="banner-inner_itemLeft--items-boxRight">
                <div className="banner-inner_itemLeft--iconBox">
                  <i className=" banner-inner_itemLeft--icon">
                    <PiChartPieSliceThin />
                  </i>
                </div>
                <div className="banner-inner_itemLeft--text">
                  <h5 className="banner-inner_itemLeft--text-h5">
                    هدف گذاری و موقعیت یابی
                  </h5>
                </div>
              </div>
              <div className="banner-inner_itemLeft--items-boxLeft">
                <div className="banner-inner_itemLeft--iconBox">
                  <i className=" banner-inner_itemLeft--icon">
                    <PiUserSwitchThin />
                  </i>
                </div>
                <div className="banner-inner_itemLeft--text">
                  <h5 className="banner-inner_itemLeft--text-h5">
                    {" "}
                    ایده های منحصر به فرد{" "}
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
