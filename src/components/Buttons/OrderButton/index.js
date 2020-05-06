import React from 'react';

import './styles.scss';

import { Button } from 'react-bootstrap';


const OrderButton = () => {
	return (
		<div className='order-button'>
			<Button className='primary custom' variant='primary'  type='submit' >
				ORDER
			</Button>
		</div>
	)
};

export default OrderButton;
