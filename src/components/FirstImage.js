import { Parallax } from 'react-parallax';
import MainPic from '../img/MainPic.png'
import React from "react";

const FirstImage = () => (
    <Parallax className='image' bgImage={MainPic} strength={800}>
        <div className='content'>
            <span className='img-txt'>
            </span>
        </div>
    </Parallax>
);

export default FirstImage;