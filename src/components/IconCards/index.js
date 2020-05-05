import React from 'react';

import './styles.scss';

import IconOne from '../../assets/icons/quality.png';
import IconTwo from '../../assets/icons/shipped.png';
import IconThree from '../../assets/icons/armchair.png';
import IconFour from '../../assets/icons/tag.png';

import ButtonLong from '../Buttons/ButtonLong';


const IconCards = () => (
	<>
		<div className='marketing-heading'>
				<h1>
						Why to choose our products  
				</h1>
		</div>
		<div className='icon-cards-container'>
					<div className='cards'>
						<div className='rounded-cards' >
								<img src={IconOne} alt="IconOne"/>
								<p className='cards-text'>
										Lorem ipsum dolor sit amet, 
								<br /> 
										consectetur adipisicing elit.
								</p>
						</div>
					</div>
					<div className='cards'>
						<div className='rounded-cards' >
								<img src={IconTwo} alt="IconTwo"/>
								<p className='cards-text'>
										Lorem ipsum dolor sit amet, 
								<br /> 
										consectetur adipisicing elit.
								</p>
						</div>
						</div>
					<div className='cards'>
						<div className='rounded-cards' >
								<img src={IconThree} alt="IconThree"/>
								<p className='cards-text'>
										Lorem ipsum dolor sit amet, 
								<br /> 
										consectetur adipisicing elit.
								</p>
						</div>
					</div>
					<div className='cards'>
						<div className='rounded-cards' >
								<img src={IconFour} alt="IconFour"/>
								<p className='cards-text'>
										Lorem ipsum dolor sit amet, 
								<br /> 
										consectetur adipisicing elit.
								</p>
						</div>
					</div>
		</div>
		<div className='btn-lg-holder'>
				<ButtonLong />
		</div>
	</>
);

export default IconCards;
