import React from 'react';

import './cards.styles.scss';

import { Container, Row, Col } from 'react-bootstrap';
import OrderButton from '../order-button/order-button';


import  Image1  from '../../assets/images/catalog/chair2.jpg';
import  Image2  from '../../assets/images/catalog/chair1.jpg';
import  Image3  from '../../assets/images/catalog/bed3.3.jpg';
import  Image4  from '../../assets/images/catalog/shelf1.jpg';
import  Image5  from '../../assets/images/catalog/stool3.jpg';
import  Image6  from '../../assets/images/catalog/sofa.jpg';

const Cards = () => (
    <Container>
        <div className='first-row-cards'>
            <Row>
                <Col>
                    <div className='cards'>
                        <div className='image-holder'>
                            <img className='image' src={Image1} alt='Image1' />
                        </div>
                        <div className='footer'>
                    
                            <OrderButton />
                        </div>
                    </div> 
                </Col>
                <Col>
                    <div className='cards'>
                        <div className='image-holder'>
                            <img className='image' src={Image2} alt='Image2' />
                        </div>
                        <div className='footer'>
            
                            <OrderButton />
                        </div>  
                    </div>  
                </Col>
                <Col>
                    <div className='cards'>
                        <div className='image-holder'>
                            <img className='image' src={Image3} alt='Image3' />
                        </div>
                        <div className='footer'>
                
                            <OrderButton />
                        </div>
                    </div>
                </Col>
            </Row>
        </div>
        <div className='second-row-cards'>
            <Row>
            <Col>
                    <div className='cards'>
                        <div className='image-holder'>
                            <img className='image' src={Image4} alt='Image4' />
                        </div>
                        <div className='footer'>
                            <OrderButton />
                        </div>
                    </div> 
                </Col>
                <Col>
                    <div className='cards'>
                        <div className='image-holder'>
                            <img className='image' src={Image5} alt='Image5' />
                        </div>
                        <div className='footer'>
                            <OrderButton />
                        </div>  
                    </div>  
                </Col>
                <Col>
                    <div className='cards' id='cards-second-row'>
                        <div className='image-holder'>
                            <img className='image' src={Image6} alt='Image6' />
                        </div>
                        <div className='footer'>
                            <OrderButton />
                        </div>
                    </div>
                </Col>
            </Row>
        </div>
    </Container>
        )

export default Cards;
