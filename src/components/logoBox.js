import React from "react";

// import react-lazy-load-------------------------------->

import {LazyLoadImage} from 'react-lazy-load-image-component';

const LogoBox = () => {
  return (
    <div className="logo-box">
      <LazyLoadImage
        src="images/Logo/logo.png"
        className="logo"
        alt="logo"
        loading="lazy"
      />
    </div>
  );
};
export default LogoBox;
