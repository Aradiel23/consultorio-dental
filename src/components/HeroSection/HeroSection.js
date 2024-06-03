import React from 'react';
import heroImage from '../../assets/hero-image.png';
import './HeroSection.css';

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <small>Clínica odontológica especializada</small>
        <h1>Atención para todas las edades</h1>
        <button>Reserva en línea</button>
        <small>o llama al 800-10-01-02</small>
      </div>
      <div className="hero-image-container">
        <img src={heroImage} alt="Odontología" className="hero-image" />
      </div>
    </section>
  );
};

export default HeroSection;
