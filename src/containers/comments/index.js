import React from 'react';

import './styles.scss';

import CommentsPartOne from '../../components/CommentsPartOne';
import CommentsPartTwo from '../../components/CommentsPartTwo';



const Comments = () => (
    <div className='comments'>
        <CommentsPartOne />
        <CommentsPartTwo />
    </div>
);

export default Comments;
