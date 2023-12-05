import React from 'react';
import '../index.css';

const Partners=()=>{
    return(
        <section className='partners-wrapper'>
            <div className='partners-title'>
                <h3>همکاران ما</h3>
                <p className='partners-title-p'>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ</p>
            </div>
            <section className='partners-logo'>
                <div><img src='images/Partners/logo-1.png' alt='logo-1.png'/></div>
                <div><img src='images/Partners/logo-2.png' alt='logo-2.png'/></div>
                <div><img src='images/Partners/logo-3.png' alt='logo-3.png'/></div>
                <div><img src='images/Partners/logo-5.png' alt='logo-5.png'/></div>
                <div><img src='images/Partners/logo-6.png' alt='logo-6.png'/></div>
            </section>

        </section>
    )
}
export default Partners;