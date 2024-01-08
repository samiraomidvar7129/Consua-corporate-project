import React from 'react';
import '../index.css';
import { useFormik } from 'formik';
import * as Yup from 'yup'

  
  const ContactUs=()=>{
    const formik=useFormik({
        initialValues:{
            userName:'',
            email:'',
        },
       onSubmit:values=>{
        alert("فرم با موفقیت ارسال شد")
       },

      validationSchema: Yup.object({
        userName:Yup.string().max(12,'نام کاربری باید ۱۲ کاراکتر باشد').required('کاربر گرامی ! لطفا فیلد را پر کنید'),
        email:Yup.string().email('invalid email').required('کاربر گرامی ! لطفا فیلد را پر کنید'),
      })
    })
    
    return(
        <>
        <h2 className='contactUs-title'>  آیا سوالی دارید ؟ *   </h2>
        <section className='contactUs-wrapper'>
            <div className='form-imgBox'>
                <img src='images/ContactUs-img/contact.jpg'/>
            </div>
           <div className='form-item'>

           <form className='form' onSubmit={formik.handleSubmit}>
                <div className='form-control input-item'>
                    <div className='input-item_inner'>
                    <div><label htmlFor='userName'>  :  نام کاربری</label></div>
                    <input type='text' id='userName'  name='userName' placeholder='  نام کاربری' onBlur={formik.handleBlur} value={formik.values.userName} onChange={formik.handleChange}/>
                    </div>
                    {formik.touched.userName && formik.errors.userName ? (<span className='errorMessage'>{formik.errors.userName}</span> ):null}
                    

                </div>
                <div className='form-control input-item'>
                    <div className='input-item_inner'>
                    <div><label htmlFor='userEmail'>  : ایمیل</label></div>
                    <input type='email' id='userEmail' name='email' placeholder='ایمیل' onBlur={formik.handleBlur} value={formik.values.email} onChange={formik.handleChange}/>
                    </div>
                    {formik.touched.email && formik.errors.email ? (<span className='errorMessage'>{formik.errors.email}</span> ):null}
 
                </div>
                <div className='form-control'>
                    <textarea id='textarea' placeholder='متن پیام'/>
                </div>
                <div className='form-control'>
                    <button type='submit' className='submit-btn'>ارسال</button>
                </div>

            </form>
            
           </div>
        </section>
        
        </>
    )
  }

export default ContactUs;