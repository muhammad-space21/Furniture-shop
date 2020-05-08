import React from 'react';

import GalleryItems from '../../components/GalleryItems';

const style = {
	width: '100%',
	height: '100%',
	backgroundColor: '#EFF2FA',
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'center',
	justifyContent: 'center'
}


const Gallery = () => (
	<div style={style}>
		<GalleryItems />
	</div>
);

export default  Gallery;