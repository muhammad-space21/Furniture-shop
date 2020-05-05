import React from 'react';

import './styles.scss';

import ImageCommentTwo from '../../assets/images/others/furniture1.jpg';
import ArrowLeft from '../../assets/images/others/arrow.right.png';


const CommentsPartTwo = () => (
  <div className='comments-part-two'>
			<div className='comments-text-two'>
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod <br /> tempor incididunt ut labore et dolore magna aliqua. Netus et malesuada <br /> fames ac. </p>
					<img src={ArrowLeft} className='arrow-right' alt="ArrowLeft"/>
			</div>
    	<img className='image-comments-two' src={ImageCommentTwo} alt="ImageCommentTwo"/>
  </div>
);

export default CommentsPartTwo; 