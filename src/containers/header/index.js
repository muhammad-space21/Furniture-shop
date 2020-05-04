import React from 'react';

import './styles.scss';

import NavbarMain from '../../components/navbar';
import ButtonsHeader from '../../components/Buttons/ButtonsHeader';


import  Img1  from '../../assets/images/main.page/img.main1.jpeg';
import  Img2  from '../../assets/images/main.page/img.main2.jpg';
import  Img3  from '../../assets/images/main.page/img.main3.jpg';


const Header = () => (
    <div className='header'>
        <NavbarMain />
        <div className='header-row'>
            <div className='col1'>
                <h1 className='offer-heading'> We offer high</h1>
                <h1 className='quality'> quality </h1>
                <ButtonsHeader />
            </div>
            <div className='col2'>
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
        </div>
    </div>
);

export default Header;