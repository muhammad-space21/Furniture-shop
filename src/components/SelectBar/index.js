import React from 'react';

import './styles.scss';

import { Form } from 'react-bootstrap';


const SelectBar = () => {
	return (
		<div className='select-bar'>
			<Form>
				<Form.Group controlId="exampleForm.ControlSelect1">
					<Form.Control className='select' as="select">
						<option>Bed</option>
						<option>Sofa</option>
						<option>Shelf</option>
						<option>Chair</option>
						<option>Bookshelf</option>
					</Form.Control>
				</Form.Group>
			</Form>
		</div>
	);
};

export default SelectBar;