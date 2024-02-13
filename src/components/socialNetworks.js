import React from 'react';
import "../index.css";
import { GrLinkedinOption } from "react-icons/gr";
import { RiTwitterLine } from "react-icons/ri";
import { TiSocialFacebook } from "react-icons/ti";
import { FaWhatsapp } from "react-icons/fa";
import { CiYoutube } from "react-icons/ci";




const SocialNetworks= () => {
  return (

      <div className='socialNetworks'>
        <ul>
        <li><a href='#'><CiYoutube className='social-icon'/> </a></li>
        <li><a href='#'><FaWhatsapp className='social-icon'/> </a></li>
        <li><a href='https://www.linkedin.com/in/samira-omidvar-6038ab234'><GrLinkedinOption className='social-icon'/></a></li>
        <li><a href='#'><RiTwitterLine className='social-icon'/>  </a></li>
        <li><a href='#'><TiSocialFacebook className='social-icon'/> </a></li>
      </ul>
      </div>
    
  )
}

export default SocialNetworks;

