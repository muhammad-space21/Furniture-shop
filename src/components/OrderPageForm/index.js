import React from 'react';

import './styles.scss';

import ProgressBarForm  from '../ProgressBar';
import NameEmailForm from '../NameEmailForm';
import SelectBar from '../SelectBar';
import ButtonLong from '../Buttons/ButtonLong';
import Textarea  from '../textarea';


const OrderPageForm = () => (
	<div className='order-page-form'>
		<ProgressBarForm />
		<NameEmailForm />
		<SelectBar />
		<Textarea/>
		<div className='button-long-holder'>
			<ButtonLong />
		</div>
	</div>
);

export default OrderPageForm;