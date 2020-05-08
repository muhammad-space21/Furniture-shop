import React from 'react';

import Header from '../../containers/header';
import Catalog from  '../../containers/catalog';
import Comments from '../../containers/comments';
import MarketingPage from '../../containers/marketing';
import Gallery from '../../containers/Gallery';
import Footer from '../../containers/footer';

const style = {
	display: 'flex',
	flexDirection: 'column',
	flexWrap: 'wrap'
}


const HomePage = () => (
	<div style={style}>
		<Header />
		<Catalog />
		<Comments />
		<MarketingPage />
		<Gallery />
		<Footer />
	</div>
);

export default HomePage;