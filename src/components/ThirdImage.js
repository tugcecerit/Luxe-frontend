import { Parallax } from 'react-parallax';
import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import Kitchen from '../img/Kitchen3.jpg';
import Livingroom from '../img/Livingroom3.jpg'
import Bathroom from '../img/Bathroom3.jpg';
import MainPic from '../img/MainPic.png';

const ThirdImage = () => (
    <Parallax className='image' bgImage={MainPic} strength={800}>
        <div className='content'>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={Livingroom}
                        alt="Living Room"
                    />
                    <Carousel.Caption>
                        <h3>Living Room</h3>
                        <p>Elegant and cozy living room with a fireplace.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={Kitchen}
                        alt="Living Room 2"
                    />
                    <Carousel.Caption>
                        <h3>Kitchen</h3>
                        <p>Luxury kitchen with blue and white combination.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={Bathroom}
                        alt="Bathroom"
                    />
                    <Carousel.Caption>
                        <h3>Bathroom</h3>
                        <p>Goergous modern white bathroom.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    </Parallax>
);

export default ThirdImage;