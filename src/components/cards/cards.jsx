import React from 'react';

import './cards.styles.scss';

import { Container, Row, Col } from 'react-bootstrap';
import OrderButton from '../order-button/order-button';


import  Image1  from '../../assets/images/catalog/chair2.jpg';
import  Image2  from '../../assets/images/catalog/chair1.jpg';
import  Image3  from '../../assets/images/catalog/bed3.3.jpg';

const Cards = () => (
    <Container>
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
    </Container>
        )

export default Cards;
