import '../App.css';
import FirstImage from '../components/FirstImage';
import FirstText from '../components/FirstText';
import SecondImage from '../components/SecondImage';
import SecondText from '../components/SecondText';
import ThirdImage from '../components/ThirdImage';
import React from "react";

function Projects() {
  return (
    <div className='projects'>
      <FirstImage />
      <FirstText />
      <SecondImage />
      <FirstImage />
      <SecondText />
      <ThirdImage />
    </div>
  );
}

export default Projects;