import React from 'react';
import './landingpage.css'; // Import your CSS file for styling
import silajeetImage from './img/banner/baltistansalajeet.png'; // Import the Aftabi Silajeet image
import videoSource from './img/video/video.mp4'; // Import the video source

function LandingPage() {
  return (
    <div className="container-landingpage">
      <video autoPlay loop muted className="video-background">
        <source src={videoSource} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="container-1">
        <div className="row g-5 align-items-center">
          <div className="col-lg-6 text-center text-lg-start">
            <h3 className="fw-light text-white animated slideInRight">Premium Organic</h3>
            <h1 className="display-4 text-white animated slideInRight">Aftabi Salajeet <span className="fw-light text-dark">Extract</span> For Natural Vitality</h1>
            <div className='buttonmy'>
              <button id="shopNowBtn" className="btn btn-outline-light btn-lg animated slideInLeft">Shop Now</button>
            </div>
          </div>
          <div className="col-lg-6 text-center">
            <img className="img-fluid animated pulse infinite" src={silajeetImage} alt="Aftabi Silajeet" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;