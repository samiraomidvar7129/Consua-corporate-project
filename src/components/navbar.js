import React from 'react';
import '../index.css';
import Home from './home';
import Services from './services';
import Projects from './projects';
import Blog from './webLog';
import AboutUs from './aboutUs';
import ContactUs from './contactUs';
import Logo from '../images/Logo/logo.png';
import { GoSearch } from "react-icons/go";
import { CiUser } from "react-icons/ci";
import {Link,Routes,Route} from 'react-router-dom';

const Navbar =()=>{
    return(
        <>
    <section className='navbar-wrapper'>
        <div className='logo-box'>
            <img className='logo-img' src={Logo} alt='logo.png'/>
        </div>
      <nav className='navbar-nav'>
       <ul className='navbar-menu'>
        <li className='navbar-link'><Link to='/'>صفحه اصلی</Link></li>
        <li className='navbar-link'><Link to='services'> خدمات</Link></li>
        <li className='navbar-link'><Link to='projects'> پروژه ها</Link></li>
        <li className='navbar-link'><Link to='weblog'> وبلاگ</Link></li>
        <li className='navbar-link'><Link to='about-us'>درباره ما </Link></li>
        <li className='navbar-link'><Link to='contact-us'> ارتباط باما</Link></li>
       </ul>
      </nav>
      <Routes>
        <Route path="/home"           element={<Home/>} ></Route>
        <Route path="/services"   element={<Services/>} ></Route>
        <Route path="/projects"   element={<Projects/>} ></Route>
        <Route path="/weblog"     element={<Blog/>} ></Route>
        <Route path="/about-us"   element={<AboutUs/>} ></Route>
        <Route path="/contact-us" element={<ContactUs/>} ></Route>
        </Routes>
        <div className='searchBar-box'>
            <span className='search-icon'><GoSearch/></span>
            <span className='user-icon'><CiUser/></span>
        </div>
    </section>
        </>
    )
}
export default Navbar;