import React, { useState } from "react";
import "./index.css";
import store from "./redux/store";
import { Provider } from "react-redux";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./components/home";
import AboutUs from "./components/aboutUs";
import Projects from "./components/projects";
import ContactUs from "./components/contactUs";
import Footer from "./components/footer";
import SubFooter from "./components/subFooter";
import Login from "./components/login";
import LogoBox from "./components/logoBox";
import { CiUser } from "react-icons/ci";
import { IoIosPhonePortrait } from "react-icons/io";




const App = () => {
  const [active, setActive] = useState("navbar-menu");
  const [toggleIcon, setToggleIcon] = useState("navbar-toggler");

  const navToggler = () => {
    active === "navbar-menu"
      ? setActive("navbar-menu nav-active")
      : setActive("navbar-menu");
    //togglerIcon
    toggleIcon === "navbar-toggler"
      ? setToggleIcon("navbar-toggler toggle")
      : setToggleIcon("navbar-toggler");
  };



// handleChangeLanguage function

  return (
    <Provider store={store}>
      <nav className="navbar-wrapper">
        <LogoBox className="logoBox" />

        <div className="navbar-toggler" onClick={navToggler}>
          <div className="line1"></div>
          <div className="line2"></div>
          <div className="line3"></div>
        </div>

        <ul className={active}>
          <li className="navbar-link">
            <Link to="/">صفحه اصلی</Link>
          </li>
          <li className="navbar-link">
            <Link to="/projects"> پروژه ها</Link>
          </li>
          <li className="navbar-link">
            <Link to="/about-us">درباره ما </Link>
          </li>
          <li className="navbar-link">
            <Link to="/contact-us"> ارتباط باما</Link>
          </li>
        </ul>

        <div className="navbar-login">
      
          <div className="phone-icon">
            <IoIosPhonePortrait /> <h6>۰۹۳۳۹۶۱۰۸۴۱</h6>
          </div>
          <div>
            <Link to="/login" title="login">
             
              <span className="user-icon">
                <CiUser />
              </span>
            </Link>
          </div>
        </div>
      </nav>
  

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/projects" element={<Projects />}></Route>
        <Route path="/about-us" element={<AboutUs />}></Route>
        <Route path="/contact-us" element={<ContactUs />}></Route>
        <Route path="/login" element={<Login />}></Route>
      </Routes>

      <Footer />
      <SubFooter />
    </Provider>
  );
};
export default App;
