import '../App.css';
import FirstImage from '../components/FirstImage';
import FirstText from '../components/FirstText';
import SecondImage from '../components/SecondImage';
import SecondText from '../components/SecondText';
import ThirdImage from '../components/ThirdImage';
import React from "react";
import FourthImage from '../components/FourthImage';
import ThirdText from '../components/ThirdText';

function Projects() {
  return (
    <div className='projects'>
      <FirstImage />
      <FirstText />
      <SecondImage />
      <FirstImage />
      <SecondText />
      <ThirdImage />
      <ThirdText />
      <FourthImage />
    </div>
  );
}

export default Projects;