import React,{useEffect} from 'react';
import '../index.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
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
          <h3>پروژه ها</h3>
          <p className='projects-title-p'> امنیت سایبری یکی از دغدغه های اصلی کسب و کارهای کوچک است</p>
        </div>
        <section className='projects-slider'>
        <Swiper
        slidesPerView={4}
        spaceBetween={30}
        pagination={{
          clickable: true,
          loop:true
        }}
        className="mySwiper mySwiper-container" >
         {
            projects.map(project=>{
             return(
                <SwiperSlide className='mySwiper-content' key={project.id}>
                    <div><img src={project.img} alt={project.title}/></div>
                    <h5>{project.title}</h5>
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