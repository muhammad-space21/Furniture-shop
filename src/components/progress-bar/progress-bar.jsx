import React from 'react';

import './progress-bar.styles.scss';

import { ProgressBar } from 'react-bootstrap';



const ProgressBarForm = () => (
    <div className='progress-barr' style={{width: 370}}>
        <ProgressBar animated now={33} className='progress' />
    </div>
);

export default ProgressBarForm;