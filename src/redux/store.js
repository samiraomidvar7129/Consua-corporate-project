import {createStore,applyMiddleware} from 'redux';
import projectReducer from '../redux/project/projectReducers';
import thunk from 'redux-thunk';



const store=createStore(projectReducer,applyMiddleware(thunk))

export default store;