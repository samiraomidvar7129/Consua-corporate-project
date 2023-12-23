import React from "react";
import '../index.css';
import {Link,Routes,Route} from 'react-router-dom';
import MembershipForm from "./membershipForm";



const Footer = () => {
  return (
    <section className="footer">
      <div className="footer-content">
        <div className="footer-item">
          <div className="footer-item-img">
            <img className="footer-logo" src="images/Logo/logo.png" alt="logo.png" />
          </div>
          <p className="footer-item-p">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
          استفاده از طراحان گرافیک است
          </p>
        </div>
        <div className="footer-item">
            <h5>دسترسی سریع</h5>
            {/* <nav className="footer-links">
       <ul >
        <li><Link className="footer-link" to='/'>صفحه اصلی</Link></li>
        <li><Link className="footer-link" to='services'> خدمات</Link></li>
        <li><Link className="footer-link" to='projects'> پروژه ها</Link></li>
        <li><Link className="footer-link" to='about-us'>درباره ما </Link></li>
        <li><Link className="footer-link" to='contact-us'> ارتباط باما</Link></li>
       </ul>
      </nav>
      <Routes>
        <Route path="/home"       element={<Home/>} ></Route>
        <Route path="/services"   element={<Services/>} ></Route>
        <Route path="/projects"   element={<Projects/>} ></Route>
        <Route path="/about-us"   element={<AboutUs/>} ></Route>
        <Route path="/contact-us" element={<ContactUs/>} ></Route>
        </Routes> */}
        </div>
        <div className="footer-item">
            <h5> عضویت در خبرنامه</h5>
          <div>
           <MembershipForm/>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
