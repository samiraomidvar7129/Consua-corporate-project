import React from 'react';
import '../index.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';


const Home=()=>{
    return(
            <section className='slider-wrapper'>
            <Swiper pagination={true} modules={[Pagination]}
           
             
             
             className="mySwiper">
        <SwiperSlide>
            <img src='images/Slider-img/slider-2.jpg' alt='slider-img'/>
        </SwiperSlide>
        <SwiperSlide>
            <img src='images/Slider-img/slider-1.jpg' alt='slider-img'/>
        </SwiperSlide>
        </Swiper>
        </section>

    )
}
export default Home;

