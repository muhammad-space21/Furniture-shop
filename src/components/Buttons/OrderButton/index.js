import React from 'react';
import history from '../../../history';

import './styles.scss';

const OrderButton = () => {
	return (
		<div className='order-button'>
			<button className='custom' type='submit' onClick={() => history.push('/order')} >
				ORDER
			</button>
		</div>
	)
};

export default OrderButton;
