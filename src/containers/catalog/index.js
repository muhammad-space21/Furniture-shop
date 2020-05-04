import  React from './node_modules/react';

import './styles.scss';

import HeadingCenter from '../headingCenter';
import Cards from '../cards';


const Catalog = () => (
    <div className='catalog'>
        <HeadingCenter />
        <Cards />
    </div>
);

export default Catalog;