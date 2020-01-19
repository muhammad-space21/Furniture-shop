import React from 'react';

import './cards-second.styles.scss';

import { Container, Row, Col } from 'react-bootstrap';
import OrderButton from '../order-button/order-button';


import  Image4  from '../../assets/images/catalog/shelf1.jpg';
import  Image5  from '../../assets/images/catalog/stool3.jpg';
import  Image6  from '../../assets/images/catalog/sofa.jpg';

const CardsSecond = () => (
    <Container>
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
                <div className='cards'>
                    <div className='image-holder'>
                        <img className='image' src={Image6} alt='Image6' />
                    </div>
                    <div className='footer'>
                        <OrderButton />
                    </div>
                </div>
            </Col>
        </Row>
    </Container>
        )

export default CardsSecond;