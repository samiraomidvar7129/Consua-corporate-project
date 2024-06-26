import React from "react";
import { PiChartPieSliceThin } from "react-icons/pi";
import { PiUserSwitchThin } from "react-icons/pi";

// import react-lazy-load-------------------------------->

import {LazyLoadImage} from 'react-lazy-load-image-component';





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
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله
              در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد
              نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.
            </p>
            <div className="banner-inner_itemLeft--items">
              <div className="banner-inner_itemLeft--items-boxRight">
                <div className="banner-inner_itemLeft--iconBox">
                  <i className=" banner-inner_itemLeft--icon">
                    <PiChartPieSliceThin/>
                  </i>
                </div>
                  <div className="banner-inner_itemLeft--text">
                    <h5 className="banner-inner_itemLeft--text-h5"> هدف گذاری و موقعیت یابی</h5>
                  </div>
              </div>
              <div className="banner-inner_itemLeft--items-boxLeft">
              <div className="banner-inner_itemLeft--iconBox">
                  <i className=" banner-inner_itemLeft--icon">
                    <PiUserSwitchThin/>
                  </i>
                </div>
                  <div className="banner-inner_itemLeft--text">
                    <h5 className="banner-inner_itemLeft--text-h5"> ایده های منحصر به فرد    </h5>
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
