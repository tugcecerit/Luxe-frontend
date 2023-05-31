import { Parallax } from 'react-parallax';
import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import Kitchen from '../img/Kitchen.jpg';

const ThirdImage = () => (
    <Parallax className='image' bgImage={Kitchen} strength={800}>
        <div className='content'>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={Kitchen}
                        alt="Living Room 1"
                    />
                    <Carousel.Caption>
                        <h3>Living Room 1</h3>
                        <p>Beautifully designed living room with modern furniture.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={Kitchen}
                        alt="Living Room 2"
                    />
                    <Carousel.Caption>
                        <h3>Living Room 2</h3>
                        <p>Elegant and cozy living room with a fireplace.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={Kitchen}
                        alt="Living Room 3"
                    />
                    <Carousel.Caption>
                        <h3>Living Room 3</h3>
                        <p>Spacious living room with panoramic views.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    </Parallax>
);

export default ThirdImage;