import {FETCH_USER_REQUEST, FETCH_USER_SUCCESS,FETCH_USER_FAILLURE} from './ActionTypes';



const initialState={
    loading:false,
    users:[],
    errorMessage:null
}

const userReducer=(state=initialState,action)=>{
    switch(action.type){
        case FETCH_USER_REQUEST:
            return{...state,loading:true}
            case FETCH_USER_SUCCESS:
                return{...state,loading:false,users:action.payload , errorMessage:null}
              case FETCH_USER_FAILLURE:
                return{...state,loading:false,users:[],errorMessage:action.payload}  

                default:
                    return state;
    }
}

export default userReducer;