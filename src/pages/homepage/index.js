import React from 'react';
import './styles.scss';

import Header from '../../containers/header';
import Catalog from  '../../containers/catalog';
import Comments from '../../containers/comments';
import MarketingPage from '../../containers/marketing';
import Gallery from '../../containers/Gallery';
import Footer from '../../containers/footer';


const HomePage = () => (
    <div className='homepage'>
        <Header />
        <Catalog />
        <Comments />
        <MarketingPage />
        <Gallery />
        <Footer />
    </div>
);

export default HomePage;