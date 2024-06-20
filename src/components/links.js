import React from 'react';
import "../index.css";


const Links = () => {
  return (
    <div className='links-wrapper'>
        <h5>پیوندها</h5>
        <div className='links-parent'>
            <ul className='links-list'>
                <li>
                    <a href='#'> مدیریت سرمایه گذاری</a>
                </li>
                <li>
                    <a href='#'> برنامه ریزی کسب و کار</a>
                </li>
                <li>
                    <a href='#'>  توصیه های مالی</a>
                </li>
                <li>
                    <a href='#'> استراتژی مالیاتی</a>
                </li>
                <li>
                    <a href='#'> استراتژی بیمه</a>
                </li>
            </ul>
        </div>
      
    </div>
  )
}

export default Links;
