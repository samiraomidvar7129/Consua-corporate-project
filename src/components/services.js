import React from 'react';

const Services=()=>{
    return(
        <section className='services-wrapper'>
        <div className='services-title'>
        <h1 className='services-text'>برخی از خدمات شرکت</h1>
        <p className='services-txtMute'>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ</p>
        </div>
        <div className='services-cards-item'>
            <div className='card-item'>
               <div>
               <span className='services-icon'></span>
                <h6>شخصی سازی آسان</h6>
               </div>
               <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است ..</p>
            </div>

        </div>
        </section>
    )
}
export default Services;