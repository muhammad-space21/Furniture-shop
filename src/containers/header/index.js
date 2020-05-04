import React from 'react';

import './styles.scss';

import NavbarMain from '../../components/navbar';
import Heading from '../../components/heading';
import HeaderImg from '../../components/HeaderImg';

const Header = () => (
    <div className='header'>
        <NavbarMain />
        <Heading />
        <HeaderImg />
    </div>
);

export default Header;