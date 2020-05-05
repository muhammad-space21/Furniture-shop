import React from 'react';

import './styles.scss';

import ArrowRight from '../../assets/images/others/arrow.right.png';
import ImageCommentOne from '../../assets/images/others/furniture2.jpg';


const CommentsPartOne = () => (
  <div className='comments-part-one'>
      <img className='image-comment-one' src={ImageCommentOne} alt=""/>
			<div className='comments'>
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod <br /> tempor incididunt ut labore et dolore magna aliqua. Netus et malesuada <br /> fames ac. </p>
					<img src={ArrowRight} className='arrow-right' alt="ArrowRight"/>
			</div>
  </div>
);

export default CommentsPartOne;
