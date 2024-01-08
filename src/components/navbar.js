import React from 'react';
import '../index.css';
import LogoBox from './logoBox';
import {Link} from 'react-router-dom';
import { CiUser } from "react-icons/ci";
import { MdOutlinePhoneEnabled } from "react-icons/md";




const Navbar =()=>{
    return(
    <section className='navbar-wrapper'>
       <LogoBox/>
      <nav className='navbar-nav'>
       <ul className='navbar-menu'>
        <li className='navbar-link'><Link to='/'>صفحه اصلی</Link></li>
        <li className='navbar-link'><Link to='services'> خدمات</Link></li>
        <li className='navbar-link'><Link to='projects'> پروژه ها</Link></li>
        <li className='navbar-link'><Link to='about-us'>درباره ما </Link></li>
        <li className='navbar-link'><Link to='contact-us'> ارتباط باما</Link></li>
       </ul>
      </nav>
  
        <span className='phone-icon'><MdOutlinePhoneEnabled/> <h6>۱۲-۳۶۶-۲۵</h6></span>
        <span><Link to='/login'> <span className='user-icon'><CiUser/></span></Link></span>

    </section>

    )
}
export default Navbar;