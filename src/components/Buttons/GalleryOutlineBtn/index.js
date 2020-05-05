import React from 'react';

import './styles.scss';

import OutlineButtonLeft from '../../../assets/images/others/btn.left.PNG';
import OutlineButtonRight from '../../../assets/images/others/btn.right.PNG';

const OutlineButton = () => (
    <div className='outline-button'>
        <img src={OutlineButtonLeft} alt="OutlineButtonLeft"/>
        <img src={OutlineButtonRight} alt="OutlineButtonRight"/>
    </div>
);

export default OutlineButton;