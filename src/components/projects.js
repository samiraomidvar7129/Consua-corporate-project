import React,{useEffect} from 'react';
import '../index.css';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/pagination';

// import required modules
import { Autoplay, FreeMode } from "swiper/modules";


import fetchProjects from '../redux/project/projectActions';
import {connect} from 'react-redux';
import Loader from './loading';

const Project=({loading,projects,errorMessage,fetchProjects})=>{
    useEffect( ()=>{
        fetchProjects();
      },[]);
      
      if(loading){
        return <div><Loader/></div>
     }
     if(errorMessage){
        return <p>error: {errorMessage}</p>
     }
     
    return(
        <section className='projects-wrapper'>
        <div className='projects-title'>
          <h3> آخرین و جدیدترین پروژه های تکمیل شده</h3>
        </div>
        <section className='projects-slider'>
        <Swiper
             slidesPerView={3}
             spaceBetween={30}
             freeMode={true}
             autoplay={true}
             loop={true}
             breakpoints={{
              320: {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 40,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 50,
              },
            }}
            
             modules={[FreeMode, Autoplay]}

        className="mySwiper mySwiper-container" >
         {
            projects.map(project=>{
             return(
                <SwiperSlide className='mySwiper-content' key={project.id}>
                    <div><img src={project.img} alt={project.title}/></div>
                    <h5>{project.title}</h5>
                    <h6>{project.description}</h6>
                </SwiperSlide>
             )
            })
        }
        
        
      </Swiper>
        </section>
           
        </section>
    )
}
const mapStateToProps=state =>(
    {
        loading:state.loading,
        projects:state.projects,
        errorMessage:state.errorMessage
    }
)

export default  connect(mapStateToProps,{fetchProjects})(Project);