import React from 'react';

import './textarea.styles.scss';

import { Form } from 'react-bootstrap';


class Textarea extends React.Component {
    // constructor () {
    //     super();

    //     this.state = [
    //         input =''
    //     ]
    // }

    // handleChange = event => (

    // );


    render() {
        return (
            <div className='textarea'>
                <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Control className='textarea-input' as="textarea" rows="3"  onChange={this.handleChange}  placeholder='Type something...' />
                </Form.Group>
            </div>
        )
    }
};

export default Textarea; 