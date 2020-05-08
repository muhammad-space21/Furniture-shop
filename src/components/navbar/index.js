import React from 'react';

import './styles.scss';

import { Nav, Navbar }  from 'react-bootstrap';

import logo from '../../assets/images/main.page/brand.png';

const NavbarMain = () => (
	<>
		<Navbar className='navbar-main' collapseOnSelect expand="lg" variant="default">
			<Navbar.Brand href="#home">
				<div className='logo-container'>
					<img src={logo} alt='logo'/>
				</div>
			</Navbar.Brand>
			<Navbar.Toggle aria-controls="responsive-navbar-nav" />
				<Navbar.Collapse className='collapse' aria-controls="responsive-navbar-nav">
					<Nav className='ml-auto'>
						<Nav.Item ><Nav.Link className='links' href="#">CATALOG</Nav.Link></Nav.Item> 
						<Nav.Item><Nav.Link  className='links' eventKey={2} href="#">
							GALLERY
						</Nav.Link></Nav.Item>
						<Nav.Item> <Nav.Link className='links' href="#">LOCATION</Nav.Link> </Nav.Item>
						<Nav.Item><Nav.Link className='contacts' href="#">
							+998993696841 
						</Nav.Link>
						<Nav.Link className='contact-email' href="#">
							zokirov.d@list.ru
						</Nav.Link></Nav.Item>
					</Nav>
			</Navbar.Collapse>
		</Navbar>
	</> 
);    

export default NavbarMain;