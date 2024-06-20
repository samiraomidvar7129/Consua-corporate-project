import "../index.css";
import React from 'react';

const Explorations = () => {
  return (
    <div className='explorations-wrapper'>
         <h5>کاوش کنید</h5>
        <div className="explorations-parent">
            <ul className='explorations-list'>
                <li>
                    <a href=''>   پروفایل شرکت</a>
                </li>
                <li>
                    <a href=''> آخرین پست </a>
                </li>
                <li>
                    <a href=''>   پشتیبانی</a>
                </li>
                <li>
                    <a href=''>  قیمت گذاری</a>
                </li>
                <li>
                    <a href=''>  تماس باما</a>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Explorations;
