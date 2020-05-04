import React from 'react';

import './styles.scss';

import { Form, Label, Control } from 'react-bootstrap';



const NameEmailForm = () => (
    <div className='name-email-form'>
        <Form>
            <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Control className='custom-input' type='name' placeholder="Name" />
            <Form.Control className='custom-input' type="email" placeholder="name@example.com" />
            </Form.Group>
        </Form>
    </div>
);

export default NameEmailForm;