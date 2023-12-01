import React from 'react';
import '../index.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

import Navbar from './navbar';



const Home=()=>{
    return(
        <>
       <header className='header-content'>
         <div className='slider-wrapper'>
         <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
        <SwiperSlide>
            <img src='images/Slider-img/slider-2.jpg'/>
        </SwiperSlide>
        <SwiperSlide>
            <img src='images/Slider-img/slider-1.jpg'/>
        </SwiperSlide>
        
      </Swiper>
         </div>
        </header>
            <Navbar/>
        </>
    )
}
export default Home;

