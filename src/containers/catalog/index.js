import  React from 'react';

import './styles.scss';

import HeadingCenter from '../../components/headingCenter';
import Cards from '../../components/cards';

const Catalog = () => (
	<div className='catalog'>
		<HeadingCenter />
		<Cards />
	</div>
);

export default Catalog;