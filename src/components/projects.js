import React,{useEffect} from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import fetchProjects from '../redux/project/projectActions';
import {connect, useDispatch} from 'react-redux'

const Project=({loading,projects,errorMessage,fetchProjects})=>{
    
    useEffect( ()=>{
        fetchProjects();
      },[useDispatch]);

      if(loading){
        return <h2>در حال بارگذاری ....</h2>
     }
     if(errorMessage){
        return <p>error: {errorMessage}</p>
     }
     
    return(
        <section className='projects-wrapper'>
        <div className='projects-title'></div>
        <section className='projects-slider'>
        <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        className="mySwiper" >
         {
            projects.map(project=>{
             return(
                <SwiperSlide key={project.id}>
                    <img src={project.img} alt={project.title}/>
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