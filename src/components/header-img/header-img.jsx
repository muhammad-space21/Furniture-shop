import React from 'react';

import './header-img.styles.scss';

import  Img1  from '../../assets/images/main.page/img.main1.jpeg';
import  Img2  from '../../assets/images/main.page/img.main2.jpg';
import  Img3  from '../../assets/images/main.page/img.main3.jpg';




const HeaderImg = () => (
    <div className='header-img'>
        <div className='img-1'>
            <img src={ Img1 } alt='img1' />
        </div>
        <div className='img-2'>
            <img src={ Img2 } alt='img2' />   
        </div>
        <div className='img-3'>
            <img src={ Img3 } alt='img3' />
        </div>
    </div>
);

export default HeaderImg; 

