import React from 'react';

import './styles.scss';

import { Container, Row, Col } from 'react-bootstrap';

import ImageLeft from '../../assets/images/others/furniture3.jpg';

import ProgressBarForm  from '../ProgressBar';
import NameEmailForm from '../NameEmailForm';
import SelectBar from '../SelectBar';
import ButtonLong from '../Buttons/ButtonLong';
import Textarea  from '../Textarea';



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