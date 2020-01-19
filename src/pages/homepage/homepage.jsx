import React from 'react';
import './homepage.styles.scss';

import Header from '../../components/header/header';
import Catalog from  '../../components/catalog/catalog';


const Homepage = () => (
    <div className='homepage'>
        <Header />
        <Catalog />
    </div>
);

export default Homepage;