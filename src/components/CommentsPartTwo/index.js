import React from 'react';

import './styles.scss';

import { Container, Row, Col } from 'react-bootstrap';

import ImageCommentTwo from '../../assets/images/others/furniture1.jpg';
import ArrowLeft from '../../assets/images/others/arrow.right.png';


const CommentsPartTwo = () => (
    <div className='comments-part-two'>
        <Container>
            <Row>
                <Col><p className='comments-text-two'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod <br /> tempor incididunt ut labore et dolore magna aliqua. Netus et malesuada <br /> fames ac. </p>
                    <img src={ArrowLeft} className='arrow-right' alt="ArrowLeft"/>
                </Col>
                <Col> <img className='image-comments-two' src={ImageCommentTwo} alt="ImageCommentTwo"/></Col>
            </Row>
        </Container>
    </div>
);

export default CommentsPartTwo; 