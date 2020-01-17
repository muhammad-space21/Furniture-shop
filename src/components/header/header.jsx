import React from 'react';

import './header.styles.scss';
import NavbarMain from '../navbar/navbar';
import Heading from '../heading/heading';
import HeaderImg from '../header-img/header-img';

const Header = () => (
    <div className='header'>
        <NavbarMain />
        <Heading />
        <HeaderImg />
    </div>
);

export default Header;