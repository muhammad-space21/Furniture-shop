import React from 'react';

import './styles.scss';

import ProgressBarForm from '../ProgressBar';
import NameEmailForm from '../NameEmailForm';
import Textarea from '../textarea';
import ButtonLong from '../Buttons/ButtonLong';


const CommentForm = () => (
	<div className='comment-form'>
		<ProgressBarForm />
		<NameEmailForm />
		<Textarea />
		<div className='button-long-holder'>
			<ButtonLong />
		</div>
	</div>
);

export default CommentForm;