import React from 'react';
import "../index.css";
import {Link} from 'react-router-dom'


const Links = () => {
  return (
    <div className='links-wrapper'>
        <h5 className='links-title'>پیوندها</h5>
        <div className='links-parent'>
            <ul className='links-list'>
                <li>
                    <Link to="https://demo.unlimitedweb.ir/Consua/new/contact/"> مدیریت سرمایه گذاری</Link>
                </li>
                <li>
                    <Link to="https://demo.unlimitedweb.ir/Consua/new/contact/"> برنامه ریزی کسب و کار</Link>
                </li>
                <li>
                    <Link to="https://demo.unlimitedweb.ir/Consua/new/contact/">  توصیه های مالی</Link>
                </li>
                <li>
                    <Link to="https://demo.unlimitedweb.ir/Consua/new/contact/"> استراتژی مالیاتی</Link>
                </li>
                <li>
                    <Link to="https://demo.unlimitedweb.ir/Consua/new/contact/"> استراتژی بیمه</Link>
                </li>
            </ul>
        </div>
      
    </div>
  )
}

export default Links;
