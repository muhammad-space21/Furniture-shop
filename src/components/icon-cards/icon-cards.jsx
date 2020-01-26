import React from 'react';

import './icon-cards.styles.scss';

import { Container, Row, Col } from 'react-bootstrap';
import IconOne from '../../assets/icons/quality.png';
import IconTwo from '../../assets/icons/shipped.png';
import IconThree from '../../assets/icons/armchair.png';
import IconFour from '../../assets/icons/tag.png';

import ButtonLong from '../button-long/button-long';


const IconCards = () => (
    <Container>
        <div className='icon-cards'>
                <div className='marketing-heading'>
                <h1>
                Why to choose our products  
                </h1>
            </div>
            <Row>
                <Col><div className='cards-body'>
                        <div className='rounded-cards' >
                            <img src={IconOne} alt="IconOne"/>
                            <p className='cards-text'>
                                Lorem ipsum dolor sit amet, 
                            <br /> 
                                consectetur adipisicing elit.
                            </p>
                        </div>
                    </div>
                </Col>
                <Col><div className='cards-body'>
                        <div className='rounded-cards' >
                            <img src={IconTwo} alt="IconTwo"/>
                            <p className='cards-text'>
                                Lorem ipsum dolor sit amet, 
                            <br /> 
                                consectetur adipisicing elit.
                            </p>
                        </div>
                    </div>
                </Col>
                <Col><div className='cards-body'>
                        <div className='rounded-cards' >
                            <img src={IconThree} alt="IconThree"/>
                            <p className='cards-text'>
                                Lorem ipsum dolor sit amet, 
                            <br /> 
                                consectetur adipisicing elit.
                            </p>
                        </div>
                    </div>
                </Col>
                <Col><div className='cards-body' id='last-card'>
                        <div className='rounded-cards' >
                            <img src={IconFour} alt="IconFour"/>
                            <p className='cards-text'>
                                Lorem ipsum dolor sit amet, 
                            <br /> 
                                consectetur adipisicing elit.
                            </p>
                        </div>
                    </div>
                </Col>
            </Row>
    </div>
    <div className='btn-lg-holder'>
        <ButtonLong />
    </div>
    </Container>
);

export default IconCards;
