import React from 'react';

import CommentsPartOne from '../../components/CommentsPartOne';
import CommentsPartTwo from '../../components/CommentsPartTwo';

const style = {
	width: '100%',
	height: '100%',
	fontFamily: 'Nunito Sans sans-serif'
};

const Comments = () => (
	<div style={style}>
		<CommentsPartOne />
		<CommentsPartTwo />
	</div>
);

export default Comments;
