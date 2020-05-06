import React from 'react';

import './styles.scss';

import OrderPageForm from '../../components/OrderPageForm';

import ImageLeft from '../../assets/images/others/furniture3.jpg';


const OrderPage = () => (
	<div className='order-page'>
		<div className='image-container'>
			<img src={ImageLeft} alt="ImageLeft"/>
		</div>
		<OrderPageForm />
	</div>
);

export default OrderPage;