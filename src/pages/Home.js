import '../App.css';
import MainPic from '../img/MainPic.mov';
import React, { useRef, useEffect } from 'react';
import HomeBg from '../img/Homebg.png'
import HomeBg2 from '../img/Homebg2.png'
import Card from 'react-bootstrap/Card';
import Home1 from '../img/Home1.jpeg'
import Home2 from '../img/Home2.jpeg'
import Home3 from '../img/Home3.jpeg'
import Home4 from '../img/Home4.jpeg'
import Home5 from '../img/Home5.jpeg'
import Home12 from '../img/Home12.jpeg'
import Home13 from '../img/Home14.png'
import Home14 from '../img/Home13.png'
import { Link } from 'react-router-dom';
import 'aos/dist/aos.css';
import AOS from 'aos';

function Home() {
  const videoRef = useRef(null);

  const handleVideoEnd = () => {
    videoRef.current.pause();
  };
  useEffect(() => {
    AOS.init({duration: 2000});
}, [])
  useEffect(() => {
    AOS.init({duration: 2000});
}, [])

  return (
    <div className="home">
      <div>
      <section id='section-1'>
      <video ref={videoRef} src={MainPic} autoPlay muted onEnded={handleVideoEnd} />
      <a href='#section-2'><div className='scroll-down'></div></a>
      </section>
      <section id='section-2'>
        <div className='left-side'>
        <img src={Home13} alt="Home"/>
        </div>
        <div className='right-side'>
          <div data-aos="fade-left">
        <h1>WHO WE ARE</h1>
        <p className='home-text'> As a leading interior design company, we are dedicated to transforming spaces into captivating havens that reflect our clients' unique vision and lifestyle. With a team of highly skilled professionals, we strive to create exceptional environments that inspire and delight.</p>
        <p className='home-text'>Throughout our journey, we have had the privilege of collaborating with discerning clients who appreciate our dedication to quality and craftsmanship. However, our true success lies in the lasting relationships we build with our clients, who trust us to transform their dreams into reality.</p>
        <p className='home-text'>Read more <Link to='/about' onClick={() => window.scrollTo(0, 0)}>
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="100" fill="rgb(210, 210, 210)" className="bi bi-arrow-right" viewBox="0 0 16 16">
        <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
        </svg>
        </Link></p>
        </div>
        </div>
      </section>
      <section id='section-3'>
      <img className="d-block w-100" src={HomeBg} alt="Home"/>
      </section>
      <section id='section-2'>
      <div className='right-side'>
          <div data-aos="fade-right">
        <h1>WHAT PEOPLE SAY</h1>
        <p className='home-text'> At Luxe, we take great pride in our ability to create stunning and functional interior spaces that leave a lasting impression. But don't just take our word for it. We invite you to explore the testimonials from our satisfied clients who have experienced the transformative power of our design services.</p>
        <p className='home-text'>These testimonials showcase the unique stories and experiences of our clients, highlighting how our design solutions have enhanced their lives and businesses. Each testimonial offers a glimpse into the collaborative process we engage in, ensuring that every project reflects the client's vision and exceeds their expectations.</p>
        <p className='home-text'>Click to see what people say
        <Link to='/testimonials' onClick={() => window.scrollTo(0, 0)}>
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="100" fill="rgb(210, 210, 210)" className="bi bi-arrow-right" viewBox="0 0 16 16">
        <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
        </svg>
        </Link></p>
        </div>
        </div>
        <div className='left-side'>
        <img src={Home14} alt="Home"/>
        </div>
      </section>
      <section id='section-3'>
      <img className="d-block w-100" src={HomeBg2} alt="Home"/>
      </section>
      <section id='section-4'>
      <div className="card-container">
      <h1>PHOTO GALLERY</h1>
        <div className="row custom-row">
          <div className="col-md-4">
            <Card className='home-card' style={{ width: '100%', height: '10rem', background:"rgba(0, 0, 0, 0.03)", boxShadow: "0 15px 35px rgba(0,0,0,.9)", backdropFilter: "blur(40px)", borderRadius: "8px" }}>
              <Card.Img variant="top" src={Home1} />
              <Card.Body>
                <Card.Text className="home-card-text" style={{ fontSize: "25px", fontFamily: "Satisfy" }}>
                 Embrace the industrial aesthetic and open-concept living in this spacious loft residence.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div className="col-md-4">
            <Card className='home-card' style={{ width: '100%', height: '10rem', background:"rgba(0, 0, 0, 0.03)", boxShadow: "0 15px 35px rgba(0,0,0,.9)", backdropFilter: "blur(40px)", borderRadius: "8px" }}>
              <Card.Img variant="top" src={Home3} />
              <Card.Body>
                <Card.Text className="home-card-text" style={{ fontSize: "25px", fontFamily: "Satisfy" }}>
                 Experience simplicity and clean lines in this sleek urban home designed for a minimalist lifestyle.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div className="col-md-4">
            <Card className='home-card' style={{ width: '100%', height: '10rem', background:"rgba(0, 0, 0, 0.03)", boxShadow: "0 15px 35px rgba(0,0,0,.9)", backdropFilter: "blur(40px)", borderRadius: "8px" }}>
              <Card.Img variant="top" src={Home12} />
              <Card.Body>
                <Card.Text className="home-card-text" style={{ fontSize: "25px", fontFamily: "Satisfy" }}>
                Luxury living with sleek interiors and city views and with modern finishes and rooftop deck.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        </div>
        <div className="row custom-row">
          <div className="col-md-4">
            <Card className='home-card' style={{ width: '100%', height: '10rem', background:"rgba(0, 0, 0, 0.03)", boxShadow: "0 15px 35px rgba(0,0,0,.9)", backdropFilter: "blur(40px)", borderRadius: "8px" }}>
              <Card.Img variant="top" src={Home4} />
              <Card.Body>
                <Card.Text className="home-card-text" style={{ fontSize: "25px", fontFamily: "Satisfy" }}>
                  Indulge in the opulence and glamour of the Art Deco era in this exquisite residence.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div className="col-md-4">
            <Card className='home-card' style={{ width: '100%', height: '10rem', background:"rgba(0, 0, 0, 0.03)", boxShadow: "0 15px 35px rgba(0,0,0,.9)", backdropFilter: "blur(40px)", borderRadius: "8px" }}>
              <Card.Img variant="top" src={Home2} />
              <Card.Body>
                <Card.Text className="home-card-text" style={{ fontSize: "25px", fontFamily: "Satisfy" }}>
                Modern residence showcasing innovative design and sustainable features.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div className="col-md-4">
            <Card className='home-card' style={{ width: '100%', height: '10rem', background:"rgba(0, 0, 0, 0.03)", boxShadow: "0 15px 35px rgba(0,0,0,.9)", backdropFilter: "blur(40px)", borderRadius: "8px" }}>
              <Card.Img variant="top" src={Home5} />
              <Card.Body>
                <Card.Text className="home-card-text" style={{ fontSize: "25px", fontFamily: "Satisfy" }}>
                 Experience the epitome of modern luxury in this expansive mansion featuring beautiful design.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
      </section>
      </div>
    </div>
  );
}

export default Home;
