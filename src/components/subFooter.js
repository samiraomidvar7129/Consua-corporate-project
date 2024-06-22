import React from "react";

const SubFooter = () => {
  return (
    <div className="subFooter-parent">
      <div className="subFooter-inner">
        <div className="subFooter-inner_item">
          <h6>1402 © تمامی حقوق برای قالب کانسوا محفوظ است.</h6>
        </div>
        <div className="subFooter-inner_item">
            <ul className="subFooter-inner_item--list">
                <li><a className="subFooter-inner_item--list-link" href="" title="">مقررات</a></li>
                <li><a className="subFooter-inner_item--list-link" href="" title="">خط مشی</a></li>
                <li><a className="subFooter-inner_item--list-link" href="" title="">پشتیبانی</a></li>
            </ul>
        </div>
      </div>
    </div>
  );
};

export default SubFooter;
