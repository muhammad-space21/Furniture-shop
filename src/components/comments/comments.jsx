import React from 'react';

import './comments.styles.scss';

import CommentsPartOne from '../comments-part-1/comments-part-1';
import CommentsPartTwo from '../comments-part-2/comments-part-two';



const Comments = () => (
    <div className='comments'>
        <CommentsPartOne />
        <CommentsPartTwo />
    </div>
);

export default Comments;
