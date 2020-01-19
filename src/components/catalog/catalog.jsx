import  React from 'react';

import './catalog.styles.scss';

import HeadingCenter from '../../components/headingCenter/headingCenter';
import CardsHolder from '../cards-holder-1/cards-holder-1';
import CardsHolderSecond from '../cards-holder-2/cards-holder-2';


const Catalog = () => (
    <div className='catalog'>
        <HeadingCenter />
        <CardsHolder />
        <CardsHolderSecond />
    </div>
);

export default Catalog;