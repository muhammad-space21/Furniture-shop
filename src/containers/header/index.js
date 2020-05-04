import React from './node_modules/react';

import './styles.scss';

import NavbarMain from '../navbar';
import Heading from '../heading';
import HeaderImg from '../HeaderImg';

const Header = () => (
    <div className='header'>
        <NavbarMain />
        <Heading />
        <HeaderImg />
    </div>
);

export default Header;