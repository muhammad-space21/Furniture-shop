import React from 'react';

import './order-page-form.styles.scss';

import { Container, Row, Col } from 'react-bootstrap';

import ImageLeft from '../../assets/images/others/furniture3.jpg';
import ProgressBarForm  from '../progress-bar/progress-bar';
import NameEmailForm from '../name-email-form/name-email-form';
import SelectBar from '../select-bar/select-bar';
import ButtonLong from '../button-long/button-long';
import Textarea  from '../textarea/textarea';



const OrderPageForm = () => (
    <div className='order-page-form'>
        <Container fluid={true} >
            <Row>
                <Col>
                    <div className='image-container'>
                        <img src={ImageLeft} alt="ImageLeft"/>
                    </div>
                </Col>
                <Col>
                    <ProgressBarForm />
                    <NameEmailForm />
                    <SelectBar />
                    <Textarea/>
                    <div className='button-long-holder'>
                        <ButtonLong />
                    </div>
                </Col>
            </Row>
        </Container>
    </div>
);

export default OrderPageForm;