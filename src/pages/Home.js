import '../App.css';
import MainPic from '../img/MainPic.mov';
import React, { useRef } from 'react';
import HomeBg from '../img/Homebg.png'

function Home() {
  const videoRef = useRef(null);

  const handleVideoEnd = () => {
    videoRef.current.pause();
  };

  return (
    <div className="home">
      <div>
      <section id='section-1'>
      <video ref={videoRef} src={MainPic} autoPlay muted onEnded={handleVideoEnd} />
      <a href='#section-2'><div className='scroll-down'></div></a>
      </section>
      <section id='section-2'>
        <h1>hello</h1>
      </section>
      <section id='section-3'>
      <img className="d-block w-100" src={HomeBg} alt="Home"/>
      </section>
      </div>
    </div>
  );
}

export default Home;
