import React,{useState} from 'react';
import '../index.css';
import LogoBox from './logoBox';
import {Link} from 'react-router-dom';
import { CiUser } from "react-icons/ci";
import { MdOutlinePhoneEnabled } from "react-icons/md";





const Navbar =()=>{
    const [active,setActive]=useState("navbar-menu");
    const [toggleIcon,setToggleIcon]=useState('navbar-toggler')

    const navToggler=()=>{
        active ==='navbar-menu' ? setActive("navbar-menu nav-active") : setActive("navbar-menu");
        //togglerIcon
        toggleIcon ==='navbar-toggler' ? setToggleIcon('navbar-toggler toggle') : setToggleIcon("navbar-toggler");
    };

   



    
    return(
    <nav className='navbar-wrapper' >
     <LogoBox className="logoBox"/>
     
     <div className='navbar-toggler' onClick={navToggler}>
        <div className='line1'></div>
        <div className='line2'></div>
        <div className='line3'></div>
       </div>
     
       <ul className={active}>
        <li className='navbar-link'><Link to='/'>صفحه اصلی</Link></li>
        {/* <li className='navbar-link'><Link to='services'> خدمات</Link></li> */}
        <li className='navbar-link'><Link to='projects'> پروژه ها</Link></li>
        <li className='navbar-link'><Link to='about-us'>درباره ما </Link></li>
        <li className='navbar-link'><Link to='contact-us'> ارتباط باما</Link></li>
       </ul>
    
       <div className='navbar-login'>
        <div className='phone-icon'><MdOutlinePhoneEnabled/> <h6>۱۲-۳۶۶-۲۵</h6></div>
        <div><Link to='/login'> <span className='user-icon'><CiUser/></span></Link></div>
       </div>


    </nav>

    )
}
export default Navbar;