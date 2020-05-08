import React from 'react';

import './styles.scss';
import { Button } from 'react-bootstrap';


const ButtonsHeader = () => (
	<div className='buttons'>
		<Button className='primary' variant='primary'> ORDER </Button>
		<Button  className='outline' variant='outline-primary'> OUR WORKS </Button>
	</div>
);

export default ButtonsHeader;