import React from "react";
import "../index.css";
import { useFormik } from "formik";
import * as Yup from "yup";
import ContactBanner from "./contactBanner";
import Map from "./map";
import { IoIosPhonePortrait } from "react-icons/io";
import { TiLocationOutline } from "react-icons/ti";
import { MdOutlineMarkEmailUnread } from "react-icons/md";
import { FiSend } from "react-icons/fi";




const ContactUs = () => {
  const formik = useFormik({
    initialValues: {
      userName: "",
      email: "",
    },
    onSubmit: (values) => {
      alert("فرم با موفقیت ارسال شد");
    },

    validationSchema: Yup.object({
      userName: Yup.string()
        .max(12, "نام کاربری باید ۱۲ کاراکتر باشد")
        .required("کاربر گرامی ! لطفا فیلد را پر کنید"),
      email: Yup.string()
        .email("قالب ایمیل نامعتبر است ")
        .required("کاربر گرامی ! لطفا فیلد را پر کنید"),
    }),
  });

  return (
    <>
      <ContactBanner />

      <section className="contactUs-parent">
        <div className="contactUs-parent_innerItem ">
          <h4 className="contactUs-title"> سوالی دارید ؟ پیام ارسال کنید </h4>
          <div className="contactUs-form">
            <div className="form-item">
              <form className="form" onSubmit={formik.handleSubmit}>
                <div className="form-control input-item">
                  <div className="input-item_inner">
                    <div>
                      <label htmlFor="userName"> : نام کاربری</label>
                    </div>
                    <input
                      type="text"
                      id="userName"
                      name="userName"
                      placeholder="  نام کاربری"
                      onBlur={formik.handleBlur}
                      value={formik.values.userName}
                      onChange={formik.handleChange}
                    />
                  </div>
                  {formik.touched.userName && formik.errors.userName ? (
                    <span className="errorMessage">
                      {formik.errors.userName}
                    </span>
                  ) : null}
                </div>
                <div className="form-control input-item">
                  <div className="input-item_inner">
                    <div>
                      <label htmlFor="userEmail"> : ایمیل</label>
                    </div>
                    <input
                      type="email"
                      id="userEmail"
                      name="email"
                      placeholder="ایمیل"
                      onBlur={formik.handleBlur}
                      value={formik.values.email}
                      onChange={formik.handleChange}
                    />
                  </div>
                  {formik.touched.email && formik.errors.email ? (
                    <span className="errorMessage">{formik.errors.email}</span>
                  ) : null}
                </div>
                <div className="form-control">
                  <textarea id="textarea" placeholder="متن پیام" />
                </div>
                <div className="form-control">
                  <button type="submit" className="submit-btn">
                  <span><FiSend/></span>
                    درتماس باشید
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="contactUs-parent_innerItem ">
          <div className="contactUs-parent_innerItem--title">
            <h2>اطلاعات تماس</h2>
            <p>
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان گرافیک است
            </p>
          </div>
          <div className="contactUs-detailesـparent">
            <div className="contactUs-detailes_inner">
              <div className="contactUs-detailes_item">
                <span>
                  <IoIosPhonePortrait />
                </span>
                <p>
                  <span>شماره تلفن</span>
                  <span>۰۹۳۳۹۶۱۰۸۴۱</span>
                </p>
              </div>
              <div className="contactUs-detailes_item">
                <span>
                  <TiLocationOutline />
                </span>
                <p>
                  <span>موقعیت ما</span>
                  <span>مشهد - شهرک امید</span>
                </p>
              </div>
              <div className="contactUs-detailes_item">
                <span>
                  <MdOutlineMarkEmailUnread />
                </span>
                <p>
                  <span>ایمیل رسمی</span>
                  <span>info@gmail.com</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

       <Map/>
    </>
  );
};

export default ContactUs;
