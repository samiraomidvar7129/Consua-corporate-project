import React from "react";
import {Link} from 'react-router-dom'

const SubFooter = () => {
  return (
    <div className="subFooter-parent">
      <div className="subFooter-inner">
        <div className="subFooter-inner_item">
          <h6>1402 © تمامی حقوق برای قالب کانسوا محفوظ است.</h6>
        </div>
        <div className="subFooter-inner_item">
            <ul className="subFooter-inner_item--list">
                <li><Link className="subFooter-inner_item--list-link" to="https://demo.unlimitedweb.ir/Consua/new/corporate-business/" title="">مقررات</Link></li>
                <li><Link className="subFooter-inner_item--list-link" to="https://demo.unlimitedweb.ir/Consua/new/contact/" title="">خط مشی</Link></li>
                <li><Link className="subFooter-inner_item--list-link" to="https://demo.unlimitedweb.ir/Consua/new/contact/" title="">پشتیبانی</Link></li>
            </ul>
        </div>
      </div>
    </div>
  );
};

export default SubFooter;
