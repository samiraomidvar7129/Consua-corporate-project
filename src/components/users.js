import React ,{useEffect} from 'react';
import '../index.css'
import fetchUsers from '../redux/users/userActions';
import {connect, useDispatch} from 'react-redux'

const Users =({loading,users,errorMessage,fetchUsers})=>{
    
  useEffect( ()=>{

    fetchUsers();

  },[useDispatch]);

 if(loading){
    return <h2>در حال بارگذاری ....</h2>
 }
 if(errorMessage){
    return <p>error: {errorMessage}</p>
 }



    return(
 
  <div>
    <h3>user list</h3>

    <ul className='list'>
    {
        users.map(user=>(
            <li className='userName' key={user.id}>
                {user.title}

            </li>
        ))
    }
    </ul>
  </div>

    )
}

const mapStateToProps=state =>(
    {
        loading:state.loading,
        users:state.users,
        errorMessage:state.errorMessage
    }
)



export default  connect(mapStateToProps,{fetchUsers})(Users);