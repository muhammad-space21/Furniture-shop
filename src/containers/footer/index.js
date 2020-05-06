import React from 'react';

import './styles.scss';

import ButtonSubscribe from '../../components/Buttons/ButtonSubscribe';

import Facebook from '../../assets/images/others/facebook.png';
import Instagram from '../../assets/images/others/instagram.png';
import Location from '../../assets/images/others/map.PNG';
import ButtonTop from '../../assets/images/others/top.btn.PNG';



const Footer = () => (
	<div className='footer'>
		<div className='contact-us'>
				<h1>CONTACT US</h1>
				<h5>+44 345 678 903</h5>
				<h5>adobexd@mail.com</h5>
		</div>
		<div className='customer-service'>
				<h1>CUSTOMER SERVICE</h1>
				<h5>Contact Us</h5>
				<h5>Ordering & Payment</h5>
				<h5> Shipping</h5>
		</div>
		<div className='information'>
				<h1>INFORMATION</h1>
				<h5> About us</h5>
				<h5> Work with us</h5>
		</div>
		<div className='subscribe'>
				<h3>Subscribe to get our newly Updates</h3>
				<h5>We design and make high quality
					<br/>
					and performable furniture for you
				</h5>
				<h4>Email Address</h4>
				<div className='btn-holder'>
					<ButtonSubscribe className='custom-btn'> SUBSCRIBE </ButtonSubscribe>
				</div>
		</div>
		<div className='container-map-icons'>
			<div className='social-media'>
					<img src={Facebook} alt="Facebook"/>
					<img src={Instagram} alt="Instagram"/>
			</div>
			<div className='map'>
					<img className='location' src={Location} alt="Location"/>
			</div>
		</div>
		<div className='button-top'>
				<img className='button-top' src={ButtonTop} alt="ButtonTop"/>
				<h6>© Mebel Angren</h6>
		</div>
	</div>
);

export default Footer;