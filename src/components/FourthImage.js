import { Parallax } from 'react-parallax';
import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import Kitchen from '../img/Kitchen1.jpg';
import Livingroom from '../img/Livingroom1.jpg'
import Bedroom from '../img/Bedroom1.jpg'
import MainPic from '../img/MainPic.png'

const FourthImage = () => (
    <Parallax className='image' bgImage={MainPic} strength={800}>
        <div className='content'>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={Livingroom}
                        alt="Living Room 1"
                    />
                    <Carousel.Caption>
                        <h3>Living Room</h3>
                        <p>Beautifully designed living room with modern furniture.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={Bedroom}
                        alt="Living Room 2"
                    />
                    <Carousel.Caption>
                        <h3>Bedroom</h3>
                        <p>Elegant and cozy bedroom.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={Kitchen}
                        alt="Living Room 3"
                    />
                    <Carousel.Caption>
                        <h3>Kitchen</h3>
                        <p>Spacious comtemporary kitchen.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    </Parallax>
);

export default FourthImage;