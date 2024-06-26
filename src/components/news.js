import React from "react";
import { Link } from "react-router-dom";

// import react-lazy-load-------------------------------->

import {LazyLoadImage} from 'react-lazy-load-image-component';

const News = () => {
  return (
    <div className="news-parent">
      <div className="news-title">
        <h3>اخبار و بروز رسانی ها</h3>
      </div>
      <div className="news-content">
        <div className="news-content_boxRight">
          <div className="news-content_boxRight--imgBox">
            <Link title=" ثبت شرکت های خصوصی" to="https://demo.unlimitedweb.ir/Consua/new/1402/06/18/breeding-point-concerns-has-terminate-the-hole/">
              <LazyLoadImage
                className="news-content_boxRight--img"
                src="images/NewsImgs/news1.jpg"
                alt="news-img"
                loading="lazy"
              />
              <div className="news-content_boxRight--imgBox-text">
                <h3> ثبت شرکت های خصوصی</h3>
                <span>موفقیت</span>
              </div>
            </Link>
          </div>
        </div>
        <div className="news-content_boxLeft">
          <div className="news-content_boxLeft--imgBox">
            <div className="news-content_boxLeft--item">
              <Link title="اقدامات پس از ثبت شرکت " to="https://demo.unlimitedweb.ir/Consua/new/1402/06/18/clothes-but-observe-country-at-the-maintaining/">
                <LazyLoadImage
                  className="news-content_boxLeft--item_img"
                  src="images/NewsImgs/news2.jpg"
                  alt="news-img"
                  loading="lazy"
                />
                <div className="news-content_boxLeft--item-text">
                  <h4>اقدامات پس از ثبت شرکت </h4>
                  <span>موفقیت</span>
                </div>
              </Link>
            </div>
            <div className="news-content_boxLeft--item">
              <Link title=">تعداد اعضای شرکت سهامی خاص" to="https://demo.unlimitedweb.ir/Consua/new/1402/06/18/minuter-him-own-clothes-but-observe-country/">
                <LazyLoadImage
                  className="news-content_boxLeft--item_img"
                  src="images/NewsImgs/news3.jpg"
                  alt="news-img"
                  loading="lazy"
                />
                <div className="news-content_boxLeft--item-text">
                  <h4>تعداد اعضای شرکت سهامی خاص</h4>
                  <span>موفقیت</span>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;
