import { Parallax } from 'react-parallax';
import Kitchen from '../img/Kitchen.jpg'
import React from "react";

const ThirdImage = () => (
    <Parallax className='image' bgImage={Kitchen} strength={800}>
        <div className='content'>
            <span className='img-txt'>
            </span>
        </div>
    </Parallax>
);

export default ThirdImage;