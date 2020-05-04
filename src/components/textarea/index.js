import React from './node_modules/react';

import './styles.scss';

import { Form } from './node_modules/react-bootstrap';


class Textarea extends React.Component {
    render() {
        return (
            <div className='textarea'>
                <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Control className='textarea-input' as="textarea" rows="3" placeholder='Type something...' />
                </Form.Group>
            </div>
        )
    }
};

export default Textarea; 