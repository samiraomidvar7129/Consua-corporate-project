import {FETCH_PROJECT_REQUEST, FETCH_PROJECT_SUCCESS,FETCH_PROJECT_FAILLURE} from './ActionTypes';
import axios from 'axios';




const fetchpRrojectRequest=()=>{
    return {
        type:FETCH_PROJECT_REQUEST,
        payload:[]
    }
}
const fetchpRrojectSuccess=(data)=>{
    return {
        type: FETCH_PROJECT_SUCCESS,
        payload:data
    }
}

const fetchpRrojectFaillur=(errorMesage)=>{
    return {
        type: FETCH_PROJECT_FAILLURE,
        payload:errorMesage
    }
}


const fetchProjects=()=>{
    return(dispatch)=>{
        dispatch(fetchpRrojectRequest());
        axios.get('http://localhost:3000/projects')
        .then(response=>{
            dispatch(fetchpRrojectSuccess(response.data))
        })
        .catch(error=>{
            dispatch(fetchpRrojectFaillur(error.message))
        })
    }
}

export default fetchProjects;


