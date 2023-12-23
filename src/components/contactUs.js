import React from 'react';
import '../index.css';
import {Formik } from 'formik'


  
  const ContactUs=()=>{
    return(
        <>
        <h2 className='contactUs-title'>در تماس باشید</h2>
        <section className='contactUs-wrapper'>
            <div className='form-imgBox'>
                <img src='images/ContactUs-img/contact.jpg'/>
            </div>
           <div className='form-item'>
        <Formik
        initialValues={{username:"sami",useremail:'yas@gmail.com'}}
         onSubmit={(values)=>{
            console.log(values);
         }}
        >
        {
            ({values,handleChange,handleSubmit})=>(
                
                <form className='form' onSubmit={handleSubmit}>
                <div className='form-control input-item'>
                    <div className='input-item_inner'>
                    <input type='text' id='userName'  name='userName' placeholder='نام' value={values.username} onChange={handleChange}/>
                    <div><label htmlFor='userName'>  :  نام</label></div>
                    </div>
                     <span className='error-message'></span> 
                </div>
                <div className='form-control input-item'>
                    <div className='input-item_inner'>
                    <input type='email' id='userEmail' name='userEmail' placeholder='ایمیل' value={values.useremail} onChange={handleChange}/>
                    <div><label htmlFor='userEmail'>  : ایمیل</label></div>
                    </div>
                    <span className='error-message'></span> 
                </div>
                <div className='form-control'>
                    <textarea cols={60} rows={10}/>
                </div>
                <div className='form-control'>
                    <button type='submit' className='submit-btn'>ارسال</button>
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

export default ContactUs;