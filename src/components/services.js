import React from 'react';
import { HiOutlinePaintBrush } from "react-icons/hi2";
import { TbSeo } from "react-icons/tb";
import { IoIosTabletPortrait } from "react-icons/io";
import { IoCodeSlashOutline } from "react-icons/io5";





const Services=()=>{
    return(
        <section className='services-wrapper'>
        <div className='services-title'>
        <h1 className='services-text'>برخی از خدمات شرکت</h1>
        <p className='services-txtMute'>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ</p>
        </div>
        <div className='services-cards-item'>
            <div className='card-item'>
               <span className='services-icon'><HiOutlinePaintBrush/></span>
                <h6 className='card-item-title'>شخصی سازی آسان</h6>
               <p className='card-item-p'>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است ..</p>
            </div>
            <div className='card-item'>
               <span className='services-icon'><IoCodeSlashOutline/></span>
                <h6 className='card-item-title'>  کد نویسی تمیز و استاندارد</h6>
               <p className='card-item-p'>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است ..</p>
            </div>
            <div className='card-item'>
               <span className='services-icon'><IoIosTabletPortrait/></span>
                <h6 className='card-item-title'> ریسپانسیو و واکنشگرا</h6>
               <p className='card-item-p'>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است ..</p>
            </div>
            <div className='card-item'>
               <span className='services-icon'><TbSeo/></span>
                <h6 className='card-item-title'>  سئو شده </h6>
               <p className='card-item-p'>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است ..</p>
            </div>
        </div>
        </section>
    )
}
export default Services;