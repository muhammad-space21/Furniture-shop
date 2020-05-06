import React from 'react';

import './styles.scss';

import CommentForm  from '../../components/CommentPageForm';

import ImageRight from '../../assets/images/others/furniture4.jpg';

const CommentPage = () => (
	<div className='comment-page'>
		<CommentForm />
		<div className='image-container'>
			<img src={ImageRight} alt="ImageRight" />
		</div>
	</div>
);

export default CommentPage; 