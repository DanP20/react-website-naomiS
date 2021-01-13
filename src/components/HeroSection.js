import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src='/videos/Spa_footage.mp4' autoPlay loop muted />
      <h1>Sound and massage therapist</h1>
      <p>in Berlin</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          Book Now
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;