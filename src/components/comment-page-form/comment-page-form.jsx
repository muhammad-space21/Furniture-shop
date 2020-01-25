import React from 'react';

import './comment-form.styles.scss';

import ProgressBarForm from '../progress-bar/progress-bar';
import ImageRight from '../../assets/images/others/furniture4.jpg';
import { Container, Row, Col } from 'react-bootstrap';
import NameEmailForm from '../name-email-form/name-email-form';
import Textarea from '../textarea/textarea';
import ButtonLong from '../button-long/button-long';


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