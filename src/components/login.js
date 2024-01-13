import React from 'react';
import '../index.css';
import { useFormik } from 'formik';
import * as Yup from 'yup'


// const passwordSchema = Yup.string()
//   .required('لطفا رمز عبور را وارد کنید')
//   .matches(
//     /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/,
//     'رمز عبور باید شامل ۸ کاراکتر - یک حرف کوچک و یک حرف بزرگ و یک عدد و یک علامت خاص باشد'
//   );




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

  validationSchema:Yup.object({
    firstName:Yup.string().min(5,'نام حداقل باید ۵  کاراکتر باشد').max(10, 'نام حداکثر باید ۱۰ کاراکتر باشد').required('کاربر گرامی ! لطفا فیلد را پر کنید'),
    lastName:Yup.string().max(15,'نام خانوادگی باید ۱۰ کاراکتر باشد').required('کاربر گرامی ! لطفا فیلد را پر کنید'),
    password: Yup.string().min(8,'رمز عبور باید شامل ۸ کاراکتر - یک حرف کوچک و یک حرف بزرگ و یک عدد و یک علامت خاص باشد').max(16).required('لطفا رمز عبور را وارد کنید')
    .matches(
     /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/
    ), 
       email:Yup.string().email(' قالب ایمیل نامعتبر است').min(10, 'ایمیل حداقل باید ۱۰ کاراکتر باشد').max(20,'ایمیل حداکثرباید ۳۰ کاراکتر باشد').required('کاربر گرامی ! لطفا فیلد را پر کنید'),
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