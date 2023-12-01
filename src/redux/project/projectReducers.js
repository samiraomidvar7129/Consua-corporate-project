import {FETCH_PROJECT_REQUEST, FETCH_PROJECT_SUCCESS,FETCH_PROJECT_FAILLURE} from './ActionTypes';



const initialState={
    loading:false,
    projects:[],
    errorMessage:null
}

const projectReducer=(state=initialState,action)=>{
    switch(action.type){
        case FETCH_PROJECT_REQUEST:
            return{...state,loading:true}
            case FETCH_PROJECT_SUCCESS:
                return{...state,loading:false,projects:action.payload , errorMessage:null}
              case FETCH_PROJECT_FAILLURE:
                return{...state,loading:false,projects:[],errorMessage:action.payload}  

                default:
                    return state;
    }
}

export default projectReducer;