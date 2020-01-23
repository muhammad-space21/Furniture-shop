import React from 'react';

import './gallery-items.styles.scss';

import { Container, Row, Col } from 'react-bootstrap';

import MainImage from '../../assets/images/gallery images/main-image.jpg';
import SecondaryImageOne  from '../../assets/images/gallery images/chair5.jpg';
import SecondaryImageTwo from '../../assets/images/gallery images/sofa1.jpg';
import SecondaryImageThree from '../../assets/images/gallery images/shelf3.jpg';
import SecondaryImageFour from '../../assets/images/gallery images/shelf.jpg';

import OutlineButton from '../gallery-outline-btn/outline-btn';


const GalleryItems = () => (
    <Container>
        <Row>
            <div className='gallery-items'>
                <Col>
                    <div className='main-image'>
                        <img src={MainImage} alt="MainImage"/>
                    </div>
                </Col>
                <Col>
                    <div className='secondary-images-part-one'>
                        <img src={SecondaryImageOne} alt="SecondaryImageOne"/>
                        <img src={SecondaryImageTwo} alt="SecondaryImageTwo"/>
                    </div>
                    <div className='secondary-images-part-two'>
                        <img src={SecondaryImageThree} alt="SecondaryImageThree"/>
                        <img src={SecondaryImageFour} alt="SecondaryImageFour"/>
                    </div>
                </Col>
            </div>
        </Row>
        <OutlineButton />
    </Container>
);


export default GalleryItems;