import React from './node_modules/react';

import './styles.scss';

import CommentsPartOne from '../CommentsPartOne';
import CommentsPartTwo from '../CommentsPartTwo';



const Comments = () => (
    <div className='comments'>
        <CommentsPartOne />
        <CommentsPartTwo />
    </div>
);

export default Comments;
