import  React from 'react';

import './catalog.styles.scss';

import HeadingCenter from '../../components/headingCenter/headingCenter';
import Cards from '../cards/cards';


const Catalog = () => (
    <div className='catalog'>
        <HeadingCenter />
        <Cards />
    </div>
);

export default Catalog;