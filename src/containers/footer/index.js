import React from 'react';

import './styles.scss';

import { Container, Row, Col } from 'react-bootstrap';

import OrderButton from '../../components/Buttons/OrderButton';

import Facebook from '../../assets/images/others/facebook.png';
import Instagram from '../../assets/images/others/instagram.png';
import Location from '../../assets/images/others/map.PNG';
import ButtonTop from '../../assets/images/others/top.btn.PNG';



const Footer = () => (
    <div className='footer'>
        <Container>
            <Row>
                <Col>
                    <div className='contact-us'>
                        <h1>CONTACT US</h1>
                        <p>
                        +44 345 678 903
                        <br />
                        adobexd@mail.com
                        </p>
                    </div>
                </Col>
                <Col>
                    <div className='customer-service'>
                        <h1>CUSTOMER SERVICE</h1>
                        <p>
                        Contact Us
                        <br />
                        Ordering & Payment
                        <br />
                        Shipping
                        </p>
                    </div>
                </Col>
                <Col>
                    <div className='information'>
                        <h1>INFORMATION</h1>
                        <p>
                        About US
                        <br />
                        Work With US
                        </p>
                    </div>
                </Col>
                <Col>
                    <div className='subscribe'>
                        <h3>Subscribe to get our newly Updates</h3>
                        <p>
                        We design and make high quality
                        <br />
                        and performable furniture for you
                        </p>
                        <h4>Email Address</h4>
                        <OrderButton className='custom'> SUBSCRIBE </OrderButton>
                    </div>
                </Col>
                <Col>
                    <div className='social-media'>
                        <img src={Facebook} alt="Facebook"/>
                        <img src={Instagram} alt="Instagram"/>
                    </div>
                    <div className='map'>
                        <img className='location' src={Location} alt="Location"/>
                    </div>
                </Col>
                <Col>
                <div className='button-top'>
                        <img className='button-top' src={ButtonTop} alt="ButtonTop"/>
                        <h6>© Mebel Angren</h6>
                    </div>
                </Col>
            </Row>
    </Container>
</div>
);

export default Footer;