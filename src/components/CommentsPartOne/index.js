import React from 'react';
import { Link } from 'react-router-dom';
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
				<Link to='/comment'>
					<img src={ArrowRight} alt="ArrowRight" /> 
				</Link>
			</div>
		</div>
  </div>
);

export default CommentsPartOne;
