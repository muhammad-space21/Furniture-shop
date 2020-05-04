import React from 'react';

import './styles.scss';

import { Container, Row, Col } from 'react-bootstrap';

import ArrowRight from '../../assets/images/others/arrow.right.png';
import ImageCommentOne from '../../assets/images/others/furniture2.jpg';


const CommentsPartOne = () => (
    <div className='comments-part-one'>
        <Container >
            <Row>
                <Col><img className='image-comment-one' src={ImageCommentOne} alt=""/></Col>
                <Col><p className='comments'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod <br /> tempor incididunt ut labore et dolore magna aliqua. Netus et malesuada <br /> fames ac. </p>
                    <img src={ArrowRight} className='arrow-right' alt="ArrowRight"/>
                </Col>
            </Row>
        </Container>
    </div>
);

export default CommentsPartOne;
