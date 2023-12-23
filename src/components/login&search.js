import React from 'react';
import Login from './login';
import SearchBar from './serachBar';

const Login_Search=()=>{
    return(
        
        <div className='searchBar-box'>
            <Login/>
            <SearchBar/>
        </div>
    )
}
export default Login_Search;