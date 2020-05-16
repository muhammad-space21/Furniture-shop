import React from 'react';

import './styles.scss';

import ImageCommentTwo from '../../assets/images/others/furniture1.jpg';
import ArrowLeft from '../../assets/images/others/arrow.right.png';


const CommentsPartTwo = () => (
  <div className='comments-part-two'>
		<div className='comments-holder'>
			<div className='comments'>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Netus et malesuada fames ac. 
					</p>
					<img src={ArrowLeft} className='arrow-right' alt="ArrowLeft"/>
			</div>
		</div>
		<div className='image-holder'>
				<img src={ImageCommentTwo} alt="ImageCommentTwo"/>
		</div>
  </div>
);

export default CommentsPartTwo; 