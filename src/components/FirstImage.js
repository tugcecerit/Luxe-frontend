import { Parallax } from 'react-parallax';
import MainPic from '../img/MainPic.png'

const FirstImage = () => (
    <Parallax className='image' bgImage={MainPic} strength={800}>
        <div className='content'>
            <span className='img-txt'>
            </span>
        </div>
    </Parallax>
);

export default FirstImage;