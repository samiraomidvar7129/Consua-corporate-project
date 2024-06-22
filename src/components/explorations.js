import React from 'react';
import "../index.css";
import {Link} from 'react-router-dom'

const Explorations = () => {
  return (
    <div className='explorations-wrapper'>
         <h5 className='explorations-title'>کاوش کنید</h5>
        <div className="explorations-parent">
            <ul className='explorations-list'>
                <li>
                    <Link to="https://demo.unlimitedweb.ir/Consua/new/contact/">   پروفایل شرکت</Link>
                </li>
                <li>
                    <Link to="https://demo.unlimitedweb.ir/Consua/new/contact/"> آخرین پست </Link>
                </li>
                <li>
                    <Link to="https://demo.unlimitedweb.ir/Consua/new/contact/">   پشتیبانی</Link>
                </li>
                <li>
                    <Link to="https://demo.unlimitedweb.ir/Consua/new/contact/">  قیمت گذاری</Link>
                </li>
                <li>
                    <Link to="https://demo.unlimitedweb.ir/Consua/new/contact/">  تماس باما</Link>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Explorations;
