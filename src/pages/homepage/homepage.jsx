import React from 'react';
import './homepage.styles.scss';

import Header from '../../components/header/header';
import Catalog from  '../../components/catalog/catalog';
import Comments from '../../components/comments/comments';
import MarketingPage from '../../components/marketing/marketing';
import Gallery from '../../components/gallery/gallery';
import Footer from '../../components/footer/footer';


const Homepage = () => (
    <div className='homepage'>
        <Header />
        <Catalog />
        <Comments />
        <MarketingPage />
        <Gallery />
        <Footer />
    </div>
);

export default Homepage;