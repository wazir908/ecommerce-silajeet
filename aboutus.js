import React from 'react';
import './aboutus.css'; // Import your CSS file for styling
import image from './img/banner/BANNER.png'; // Import your image

const AboutUs = () => {
  return (
    <div className="AboutUs">
      <div className="content">
        <div className="image-container">
          <img src={image} alt="Salajeet" className="salajeet-image" />
        </div>
        <div className="text-container">
          <h2>Welcome to Baltistan Salajeet Hub</h2>
          <p>We are dedicated to delivering 100% pure organic natural Salajeet directly fetched from the mountains of Baltistan. Our mission is to provide you with the highest quality Salajeet, sourced responsibly and ethically.</p>
          <p>Salajeet, also known as Shilajit, is a natural substance formed from the decomposition of plant matter in the mountains over centuries. It is rich in minerals and nutrients and has been used for centuries in traditional medicine for its various health benefits.</p>
          <p>At Baltistan Salajeet Hub, we take pride in offering you authentic Salajeet that is free from any additives or artificial ingredients. Our Salajeet is carefully harvested and processed to ensure its purity and potency, so you can experience its natural goodness.</p>
          <p>Experience the wonders of Salajeet with us and unlock a healthier, more vibrant you!</p>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;