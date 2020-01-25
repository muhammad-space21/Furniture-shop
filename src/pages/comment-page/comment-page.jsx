import React from 'react';

import './comment-page.styles.scss';

import CommentForm  from '../../components/comment-page-form/comment-page-form';



const CommentPage = () => (
    <div className='comment-page'>
        <CommentForm />
    </div>
);

export default CommentPage; 