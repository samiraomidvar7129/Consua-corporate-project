import React from 'react';
import '../index.css';
import { useFormik } from 'formik';
import * as Yup from 'yup'


const Login=()=>{

  const formik=useFormik({
    initialValues:{
        firstName:'',
        lastName:'',
        password:'',
        email:''
    },
   onSubmit:values=>{
    alert("فرم با موفقیت ارسال شد")
   },

  validationSchema: Yup.object({
    firstName:Yup.string().max(12,'نام  باید ۸ کاراکتر باشد').required('کاربر گرامی ! لطفا فیلد را پر کنید'),
    lastName:Yup.string().max(15,'نام خانوادگی باید ۱۰ کاراکتر باشد').required('کاربر گرامی ! لطفا فیلد را پر کنید'),
    password:Yup.string().max(16,' رمز عبور معتبر وارد کنید   ').required('کاربر گرامی ! لطفا فیلد را پر کنید'),
    email:Yup.string().email('invalid email').required('کاربر گرامی ! لطفا فیلد را پر کنید'),
  })
  })


  return(
    <div  className='loginForm'>
    <h1>ثبت نام کنید</h1>
   
  
    
        <form className='loginForm-item'  onSubmit={formik.handleSubmit}>
           : نام
          <input className="filed-input" type="text" name="firstName" onBlur={formik.handleBlur} value={formik.values.firstName} onChange={formik.handleChange} />
          {formik.touched.firstName && formik.errors.firstName ? (<span className='errorMessage'>{formik.errors.firstName}</span> ):null}
            : نام خانوادگی 
          <input className="filed-input" type="text" name="lastName" onBlur={formik.handleBlur} value={formik.values.lastName} onChange={formik.handleChange} />
          {formik.touched.lastName && formik.errors.lastName ? (<span className='errorMessage'>{formik.errors.lastName}</span> ):null}
           : رمز عبور 
          <input className="filed-input" type="password" name="password" onBlur={formik.handleBlur} value={formik.values.password} onChange={formik.handleChange} />
          {formik.touched.password && formik.errors.password ? (<span className='errorMessage'>{formik.errors.password}</span> ):null}
          : ایمیل 
          <input className="filed-input" type="email" name="email" onBlur={formik.handleBlur} value={formik.values.email} onChange={formik.handleChange} />
          {formik.touched.email && formik.errors.email ? (<span className='errorMessage'>{formik.errors.email}</span> ):null}
          <button type="submit" className='register-btn'>
            ثبت نام
          </button>
        </form>
     
  </div>
  )
}

export default Login;