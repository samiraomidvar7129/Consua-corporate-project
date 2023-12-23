import {FETCH_PROJECT_REQUEST, FETCH_PROJECT_SUCCESS,FETCH_PROJECT_FAILLURE} from './ActionTypes';
import axios from 'axios';


const fetchProjectRequest=()=>{
    return {
        type:FETCH_PROJECT_REQUEST,
        payload:[]
    }
}
const fetchProjectSuccess=(data)=>{
    return {
        type: FETCH_PROJECT_SUCCESS,
        payload:data
    }
}

const fetchProjectFaillur=(errorMesage)=>{
    return {
        type: FETCH_PROJECT_FAILLURE,
        payload:errorMesage
    }
}


  const fetchProjects=()=>{
     return (dispatch)=>{
        dispatch (fetchProjectRequest());
         axios.get('http://localhost:3000/projects')
        .then(response=>{
            dispatch(fetchProjectSuccess(response.data))
        })
        .catch(error=>{
            dispatch(fetchProjectFaillur(error.message))
        })
    }
}

export default fetchProjects;


