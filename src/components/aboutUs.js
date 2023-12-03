import React from "react";

const AboutUs = () => {
  return (
    <section className="aboutUs-wrapper">
      <div className="aboutUs-title">
        <h2 className="aboutUs-title-text">درباره شرکت</h2>
        <p className="aboutUs-title-p">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ</p>
      </div>
      <div className="aboutUs-content">
        <div className="aboutUs-text">
          <p>
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
          استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
          ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و
          کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی
          در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می
          طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی
          الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این
          صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و
          شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای
          اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا  
           .
          </p>
        </div>
        <div className="aboutUs-imgBox">
          <img src="images/AboutUs-img/aboutUs.jpg" alt="aboutUs-img" />
        </div>
      </div>
    </section>
  );
};
export default AboutUs;
