import React from 'react';
import '../index.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

import Navbar from './navbar';
import Services from './services';
import Project from './projects';
import AboutUs from './aboutUs';
import Commets from './comments';
import Partners from './partners';
import Footer from './footer';



const Home=()=>{
    return(
        <>
       <header className='header-content'>
         <div className='slider-wrapper'>
         <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
        <SwiperSlide>
            <img src='images/Slider-img/slider-2.jpg' alt='slider-img'/>
        </SwiperSlide>
        <SwiperSlide>
            <img src='images/Slider-img/slider-1.jpg' alt='slider-img'/>
        </SwiperSlide>
        
      </Swiper>
         </div>
        </header>
            <Navbar/>
            <Services/>
            <Project/>
            <AboutUs/>
            <Commets/>
            <Partners/>
            <Footer/>
        </>
    )
}
export default Home;

