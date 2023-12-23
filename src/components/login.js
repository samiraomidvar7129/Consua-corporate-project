import React from 'react';
import '../index.css';
import {Formik } from 'formik'

const Login=()=>{
    return(
        <>
        <h2 className='login-title'>ثبت نام کنید  </h2>
        <section className='login-wrapper'>
            
           <div className='loginForm-item'>
        <Formik
        initialValues={{username:"مینا",lastName:'غفاری',useremail:'info@gmail.com'}}
         onSubmit={(values)=>{
            console.log(values);
         }}
        >
        {
            ({values,handleChange,handleSubmit})=>(
                
                <form className='loginForm' onSubmit={handleSubmit}>
              <div className='loginForm-item'>
                <div className=' userNameInput'>
                    <input type='text' id='userName-login' className='userName-login'  name='userName' placeholder='نام' value={values.username} onChange={handleChange}/>
                     <span className='error-message'></span> 
                </div>
                <div className='lastNameInput'>
                    <input type='text' id='lastName-login' className='lastName-login'  name='lastName' placeholder='نام خانوادگی' value={values.lastName} onChange={handleChange}/>
                     <span className='error-message'></span> 
                </div>
              </div>
                <div className=' input-item'>
                    <input type='email' id='userEmail-login' className='userEmail-login'  name='userEmail' placeholder='ایمیل' value={values.useremail} onChange={handleChange}/>
                    <span className='error-message'></span>
                    </div>
                <div>
                    <button type='submit' className='loginForm-btn'>ثبت نام</button>
                </div>

            </form>
            )
          }
        </Formik>
            
           </div>
        </section>
        </>
    )
}
export default Login;