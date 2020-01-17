import React from 'react';

import './buttons.styles.scss';
import { Button } from 'react-bootstrap';



const Buttons = () => (
    <div className='buttons'>
        <Button className='primary' variant='primary'> ORDER </Button>
        <Button  className='outline' variant='outline-primary'> OUR WORKS </Button>
    </div>
);

export default Buttons;