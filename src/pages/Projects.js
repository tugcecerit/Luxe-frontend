import '../App.css';
import FirstImage from '../components/FirstImage';
import SecondImage from '../components/SecondImage';
import ThirdImage from '../components/ThirdImage';
import React from "react";

function Projects() {
  return (
    <div className='projects'>
      <FirstImage />
      <SecondImage />
      <ThirdImage />
    </div>
  );
}

export default Projects;