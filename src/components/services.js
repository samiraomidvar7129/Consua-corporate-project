import React from 'react';
import '../index.css';
import { AiOutlineSolution } from "react-icons/ai";
import { TbSeo } from "react-icons/tb";
import { IoIosTabletPortrait } from "react-icons/io";
import { IoCodeSlashOutline } from "react-icons/io5";





const Services=()=>{
    return(
        <section className='services-wrapper'>
        <div className='services-title'>
        <h1 className='services-text'>برخی از خدمات شرکت</h1>
        <p className='services-txtMute'>ارائه دهندگان فناوری از نزدیک با مشتریان منحصر به فرد کار میکنند</p>
        </div>
        <div className='services-cards-item'>
            <div className='card-item'>
               <span className='services-icon'>< AiOutlineSolution/></span>
                <h6 className='card-item-title'>  راه حل فناوری</h6>
               <p className='card-item-p'>انها ممکن است طیف وسیعی از خدمات را ارائه دهند . از کار مبتنی بر پروژه گرفته تا نگهداری و پشتیبانی مداوم</p>
            </div>
            <div className='card-item'>
               <span className='services-icon'><IoCodeSlashOutline/></span>
                <h6 className='card-item-title'>  توسعه محصول </h6>
                <p className='card-item-p'>انها ممکن است طیف وسیعی از خدمات را ارائه دهند . از کار مبتنی بر پروژه گرفته تا نگهداری و پشتیبانی مداوم</p>
            </div>
            <div className='card-item'>
               <span className='services-icon'><IoIosTabletPortrait/></span>
                <h6 className='card-item-title'>  بازاریابی دیجیتال </h6>
                <p className='card-item-p'>انها ممکن است طیف وسیعی از خدمات را ارائه دهند . از کار مبتنی بر پروژه گرفته تا نگهداری و پشتیبانی مداوم</p>
            </div>
            <div className='card-item'>
               <span className='services-icon'><TbSeo/></span>
                <h6 className='card-item-title'>   مدیریت کسب و کار </h6>
                <p className='card-item-p'>انها ممکن است طیف وسیعی از خدمات را ارائه دهند . از کار مبتنی بر پروژه گرفته تا نگهداری و پشتیبانی مداوم</p>
            </div>
        </div>
        </section>
    )
}
export default Services;