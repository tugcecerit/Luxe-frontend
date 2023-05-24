import '../App.css';
import MainPic from '../img/MainPic.mp4'
import React from "react";

function Home() {
  return (
    <div className="home">
        <video src={MainPic} autoPlay loop muted />
    </div>
  );
}

export default Home;