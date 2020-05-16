import React from 'react';

import './styles.scss';

import ArrowRight from '../../assets/images/others/arrow.right.png';
import ImageCommentOne from '../../assets/images/others/furniture2.jpg';


const CommentsPartOne = () => (
  <div className='comments-part-one'>
		<div className='image-holder'>
			<img src={ImageCommentOne} alt=""/>
		</div>
		<div className='comments-holder'>
			<div className='comments'>
				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Netus et malesuada fames ac. </p>
				<img src={ArrowRight} alt="ArrowRight"/>
			</div>
		</div>
  </div>
);

export default CommentsPartOne;
