import '../App.css';
import React from "react";
import { useEffect } from "react";
import About1 from '../img/About1.jpeg'
import About2 from '../img/About2.jpeg'
import About3 from '../img/About3.jpeg'
import 'aos/dist/aos.css';
import AOS from 'aos';

function About() {
  useEffect(() => {
    AOS.init({duration: 2000});
}, [])
  return (
    <div className='about'>
       <div>
       <section id='sec-1' data-aos="fade-right">
        <div className='about-text1'>
        <h1 className='about-title'>LUXE</h1>
        <p>Welcome to Luxe, where exquisite design meets unparalleled craftsmanship. As a leading interior design company, we are dedicated to transforming spaces into captivating havens that reflect our clients' unique vision and lifestyle. With a team of highly skilled professionals, we strive to create exceptional environments that inspire and delight.</p><br></br>
        <p>At Luxe, our mission is to redefine the concept of luxury living through innovative design solutions. We believe that every space has the potential to become a work of art, and our goal is to unlock that potential, exceeding our clients' expectations with each project. We blend timeless elegance with contemporary flair, creating harmonious interiors that stand the test of time.</p>
        </div>
        <div>
      <img className="about-img1" src={About1} alt="About"/>
     </div>
      </section>
      <section id='sec-2' data-aos="fade-left">
      <img className="about-img2" src={About2} alt="About"/>
      <div className='about-text2'>
      <p>Our team consists of talented designers, architects, and artisans who bring a wealth of knowledge and expertise to every project. From concept development to the final execution, our dedicated workforce ensures seamless coordination and attention to detail at every stage. We collaborate closely with our clients, listening to their aspirations and desires, and translating them into stunning realities that surpass their imagination.</p><br></br>
      <p>Success at Luxe is not measured solely by the accolades we receive, but by the satisfaction and happiness of our clients. We take pride in our ability to create spaces that not only look breathtaking but also enhance the lives of those who inhabit them. Our portfolio is a testament to our commitment to excellence, with a diverse range of projects spanning luxury residences, commercial spaces, and hospitality establishments.</p><br></br>
      {/* <p>Throughout our journey, we have had the privilege of collaborating with discerning clients who appreciate our dedication to quality and craftsmanship. Our projects have been featured in prestigious publications and have garnered praise for their attention to detail and exquisite design. However, our true success lies in the lasting relationships we build with our clients, who trust us to transform their dreams into reality.</p> */}
      </div>
      </section>
      <section id='sec-3' data-aos="fade-right">
      <div className='about-text3'>
      <p>At Luxe, we believe in sustainability and responsible design practices. We strive to incorporate environmentally friendly materials and techniques whenever possible, ensuring that our projects not only look stunning but also have a positive impact on the planet. We continuously explore new technologies and innovations to stay at the forefront of the industry, delivering cutting-edge designs that are both aesthetically pleasing and environmentally conscious.</p><br></br>
      <p>As we continue to push boundaries and elevate the standards of interior design, Luxe remains committed to providing unparalleled service and exceptional design solutions. Whether you are seeking a breathtaking residential retreat or a captivating commercial space, our team of passionate professionals is ready to turn your vision into an extraordinary reality. Experience the Luxe difference and embark on a journey of timeless elegance and sophistication.</p>
      </div>
      <img className="about-img3" src={About3} alt="About"/>
      </section>
      </div>
    </div>
  );
}

export default About;