import React from 'react';

import './navbar.styles.scss';

import { Nav, Navbar }  from 'react-bootstrap';
import logo from '../../assets/images/main.page/brand.png';

class NavbarMain extends React.Component {
    constructor() {
        super();
    }
    

    render() {
        return (
            <div className='navbar'>
                <Navbar className='navbar-main' expand="lg" variant="dark">
                    <Navbar.Brand href="#home">
                        <div className='logo-container'>
                            <img src={logo} alt='logo'/>
                        </div>
                    </Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className='ml-auto'>
                            <Nav.Item><Nav.Link className='links' href="#">CATALOG</Nav.Link></Nav.Item> 
                            <Nav.Item><Nav.Link  className='links' eventKey={2} href="#">
                            GALLERY
                            </Nav.Link></Nav.Item>
                            <Nav.Item> <Nav.Link className='links' href="#">LOCATION</Nav.Link> </Nav.Item>
                            <Nav.Item><Nav.Link className='links contacts' href="#">
                            +998993696841 
                            zokirov.d@list.ru
                            </Nav.Link></Nav.Item>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div> 
        )
    }
    
};

export default NavbarMain;