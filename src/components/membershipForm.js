import React from 'react';
import {Field, Formik,Form} from 'formik'

const MembershipForm=()=>{
    return(
        <section className='MembershipForm'>
         <Formik initialValues={{email:""}}
        //  onSubmit={(values)=>{
        //   alert('فرم ارسال شد')
        //  }}
         validate={(values)=>{
          const error={};
          if(!values.email){
            error.email="قالب ایمیل نادرست است";
          }
          return error;
         }}
         >
         {
          ({error})=>(
            <Form action='#' method='post' className='form-parent' >
            <h6 className='form-title'>ایمیل خود را وارد کنید</h6>
         <div className='form-input-items'>
         <div><Field type='email' name='email'/></div>
         {error.email &&  <span>{error.email}</span>}
         <div><button type='submit'>ثبت</button></div>
         </div>
           </Form>
          )
         }
         </Formik>
        </section>
    )
}
export default MembershipForm;