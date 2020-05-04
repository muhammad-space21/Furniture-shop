import React from 'react';

import './styles.scss';

import { Button } from 'react-bootstrap';


class OrderButton extends React.Component {

    render () {
        return (
            <div className='order-button'>
            <Button className='primary custom' variant='primary' text='SUBSCRIBE'  type='submit' >
                ORDER
            </Button>
            </div>
        )
    }

};

export default OrderButton;
