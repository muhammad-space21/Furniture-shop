import React from 'react';

import './styles.scss';
import history from '../../../history';

const ButtonsHeader = () => {
	return (
		<div className='buttons'>
			<button className='primary' onClick={() => history.push('/order') }> ORDER </button>
			<button className='outline'> OUR WORKS </button>
		</div>
	)
};

export default ButtonsHeader;