import React from 'react';

// import react-lazy-load-------------------------------->

import {LazyLoadImage} from 'react-lazy-load-image-component';

const ContactBanner = () => {
  return (
    <div className='contactBanner-parent'> 
    <div className='contactBanner-inner'>
        <LazyLoadImage className='contactBanner-inner_img' src='images/ContactUs-img/contact-us.jpg' loading='lazy'  alt='contact-img'/>
        <h2>تماس با ما</h2>
    </div>
      
    </div>
  )
}

export default ContactBanner
