import React from 'react';

import './styles.scss';

import { Container, Row, Col } from 'react-bootstrap';

import ProgressBarForm from '../ProgressBar';
import NameEmailForm from '../NameEmailForm';
import Textarea from '../textarea';
import ButtonLong from '../Buttons/ButtonLong';

import ImageRight from '../../assets/images/others/furniture4.jpg';

const CommentForm = () => (
    <div className='comment-form'>
        <Container fluid={true} >
            <Row>
                <Col>
                    <ProgressBarForm />
                    <NameEmailForm />
                    <Textarea />
                    <div className='button-long-holder'>
                        <ButtonLong />
                    </div>
                </Col>
                <Col>
                    <div className='image-container'>
                        <img src={ImageRight} alt="ImageRight"/>
                    </div>
                </Col>
            </Row>
        </Container>
    </div>

);

export default CommentForm;