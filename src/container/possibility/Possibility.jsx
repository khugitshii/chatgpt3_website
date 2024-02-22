import React from 'react';
import possibilityImage from '../../assets/possibility.png';
import './possibility.css';

const Possibility = () => (
  <div className="gpt3__possibility section__padding" id="possibility">
    <div className="gpt3__possibility-image">
      <img src={possibilityImage} alt="possibility" />
    </div>
    <div className="gpt3__possibility-content">
      <h1 className="gradient__text">The possibilities are <br /> beyond your imagination</h1>
      <p>Our imagination can often limit what we believe to be possible. However, by keeping an open mind and being willing to explore new ideas, we can unlock new opportunities and achieve greater things than we ever thought possible. The key is to embrace a sense of curiosity and adventure, and to be willing to take risks and try new things. By doing so, we can broaden our horizons and achieve remarkable things beyond what we initially thought was possible.</p>
      <h4>Request Early Access to Get Started</h4>
    </div>
  </div>
);

export default Possibility;