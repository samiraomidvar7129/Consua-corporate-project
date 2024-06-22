import React from 'react';
import {Link} from 'react-router-dom'

const CounselingBtn = () => {
  return (
    <div className='counselingBtn-parent'>
        <div className='counselingBtn'>
            <Link to="https://demo.unlimitedweb.ir/Consua/new/about-us/" className='counselingBtn-link'>دریافت مشاوره</Link>
        </div>
      
    </div>
  )
}

export default CounselingBtn
