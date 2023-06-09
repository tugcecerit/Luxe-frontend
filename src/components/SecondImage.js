import { Parallax } from 'react-parallax';
import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import LivingRoom from '../img/Livingroom2.jpg';
import Bedroom from '../img/Bedroom2.jpg'
import Bathroom from '../img/Bathroom2.jpg'
import MainPic from '../img/MainPic.png'

const SecondImage = () => (
    <Parallax className='image' bgImage={MainPic} strength={800}>
        <div className='content'>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={LivingRoom}
                        alt="Living Room"
                    />
                    <Carousel.Caption>
                        <h3>Living Room</h3>
                        <p>Beautifully designed living room with modern furniture.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={Bathroom}
                        alt="Bedroom"
                    />
                    <Carousel.Caption>
                        <h3>Bathroom</h3>
                        <p>Elegant and cozy bathroom with bathtub.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={Bedroom}
                        alt="Bathroom"
                    />
                    <Carousel.Caption>
                        <h3>Bedroom</h3>
                        <p>Spacious bedroom with panoramic views.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    </Parallax>
);

export default SecondImage;
