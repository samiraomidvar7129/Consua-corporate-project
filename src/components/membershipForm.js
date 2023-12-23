import React from 'react';
import '../index.css';
import {Formik } from 'formik'

const MembershipForm=()=>{
    return(
        <div>
        <Formik
        initialValues={{email:'info@gmail.com'}}
         onSubmit={(values)=>{
            console.log(values);
         }}
        >
        {
            ({values,handleChange,handleSubmit})=>(
                
                <form className='newsLater-form' onSubmit={handleSubmit}>
                <div className='newsLater-form_item'>
                    <input type='email' id='email'  name='email' placeholder='ایمیل' value={values.email} onChange={handleChange}/>
                    <button type='submit' className='news-btn'>ارسال</button>
                </div>
            </form>
            )
          }
        </Formik>
            
           </div>
    )
}
export default MembershipForm;