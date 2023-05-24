import { Parallax } from 'react-parallax';
import LivingRoom from '../img/LivingRoom.jpg'
import React from "react";

const SecondImage = () => (
    <Parallax className='image' bgImage={LivingRoom} strength={800}>
        <div className='content'>
            <span className='img-txt'>
            </span>
        </div>
    </Parallax>
);

export default SecondImage;