import {FETCH_USER_REQUEST, FETCH_USER_SUCCESS,FETCH_USER_FAILLURE} from './ActionTypes';
import axios from 'axios';




const fetchUserRequest=()=>{
    return {
        type:FETCH_USER_REQUEST,
        payload:[]
    }
}
const fetchUserSuccess=(data)=>{
    return {
        type: FETCH_USER_SUCCESS,
        payload:data
    }
}

const fetchUserFaillur=(errorMesage)=>{
    return {
        type: FETCH_USER_FAILLURE,
        payload:errorMesage
    }
}


const fetchUsers=()=>{
    return(dispatch)=>{
        dispatch(fetchUserRequest());
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(response=>{
            dispatch(fetchUserSuccess(response.data))
        })
        .catch(error=>{
            dispatch(fetchUserFaillur(error.message))
        })
    }
}

export default fetchUsers;


