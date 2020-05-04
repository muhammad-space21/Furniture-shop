import React from 'react';

import './styles.scss';

import { Button } from 'react-bootstrap';
import { Container, Row, Col } from 'react-bootstrap';



const ButtonLong = () => (
    <div className='button-long'>
        <Container>
            <Row>
                <Col>
                    <Button className='primary primary-long' variant='primary'>ORDER</Button>
                </Col>
            </Row>
        </Container>
    </div>
);

export default ButtonLong; 