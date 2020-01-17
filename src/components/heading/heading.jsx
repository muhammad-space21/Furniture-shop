import React from 'react';

import './heading.styles.scss';
import Buttons from '../buttons/buttons';

const Heading = () => (
    <div className='heading'>
        <h1 className='offer-heading'> We offer high</h1>
        <h1 className='quality'> quality </h1>
        <Buttons />
    </div>
);

export default Heading;