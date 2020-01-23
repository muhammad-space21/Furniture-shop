import React from 'react';

import './comments-part-2.styles.scss';

import { Container, Row, Col } from 'react-bootstrap';
import ImageCommentTwo from '../../assets/images/others/furniture1.jpg';


const CommentsPartTwo = () => (
    <div className='comments-part-two'>
        <Container>
            <Row>
                <Col><p className='comments-text-two'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod <br /> tempor incididunt ut labore et dolore magna aliqua. Netus et malesuada <br /> fames ac. </p></Col>
                <Col> <img className='image-comments-two' src={ImageCommentTwo} alt="ImageCommentTwo"/></Col>
            </Row>
        </Container>
    </div>
);

export default CommentsPartTwo; 