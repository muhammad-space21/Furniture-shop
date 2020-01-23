import React from 'react';

import './order-button.styles.scss';

import { Button } from 'react-bootstrap';


class OrderButton extends React.Component {


    handleClick = async event => (
        event.preventDefault()
    );

    render () {
        return (
            <div className='order-button'>
            <Button className='primary custom' variant='primary' text='SUBSCRIBE'  type='submit' onClick={this.handleClick}>
                ORDER
            </Button>
            </div>
        )
    }

};

export default OrderButton;
