import React,{useEffect} from 'react';
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
        <>
        <h1>project</h1>
           <div>
           {
            projects.map(project=>{
             return(
                <li className='userName' key={project.id}>
                {project.title}
            </li>
             )
            })
        }
           </div>
        </>
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