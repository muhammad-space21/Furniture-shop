import React from 'react';

import './styles.scss';

import OrderButton from '../Buttons/OrderButton';

import  Image1  from '../../assets/images/catalog/chair2.jpg';
import  Image2  from '../../assets/images/catalog/chair1.jpg';
import  Image3  from '../../assets/images/catalog/bed3.3.jpg';
import  Image4  from '../../assets/images/catalog/shelf1.jpg';
import  Image5  from '../../assets/images/catalog/stool3.jpg';
import  Image6  from '../../assets/images/catalog/sofa.jpg';

const Cards = () => (
  <>
		<div className='first-row-cards'>
				<div className='cards'>
						<div className='image-holder'>
								<img className='image' src={Image1} alt='Image1' />
						</div>
						<div className='footer'>
								<OrderButton />
						</div>
				</div> 
				<div className='cards'>
						<div className='image-holder'>
								<img className='image' src={Image2} alt='Image2' />
						</div>
						<div className='footer'>
								<OrderButton />
						</div>  
				</div>  
				<div className='cards'>
						<div className='image-holder'>
								<img className='image' src={Image3} alt='Image3' />
						</div>
						<div className='footer'>
								<OrderButton />
						</div>
				</div>
		</div>
		<div className='second-row-cards'>
				<div className='cards'>
						<div className='image-holder'>
								<img className='image' src={Image4} alt='Image4' />
						</div>
						<div className='footer'>
								<OrderButton />
						</div>
				</div> 
				<div className='cards'>
						<div className='image-holder'>
								<img className='image' src={Image5} alt='Image5' />
						</div>
						<div className='footer'>
								<OrderButton />
						</div>  
				</div>  
				<div className='cards' id='cards-second-row'>
						<div className='image-holder'>
								<img className='image' src={Image6} alt='Image6' />
						</div>
						<div className='footer'>
								<OrderButton />
						</div>
				</div>
		</div>
	</>
);

export default Cards;
