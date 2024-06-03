import React from 'react';
import { Button } from '@material-ui/core';
import service1 from '../../assets/service1.png';
import service2 from '../../assets/service2.png';
import service3 from '../../assets/service3.png';
import service4 from '../../assets/service4.png';
import './ServicesSection.css';

const ServicesSection = () => {
  return (
    <section className="services-section" id="services">
      <h2>Nuestros servicios</h2>
      <div className="services">
        <div className="service">
          <img src={service1} alt="Odontología Cosmética" />
          <h3>Odontología Cosmética</h3>
          <Button component="a" href="#" style={{ textDecoration: 'none' }}>Más información ↗</Button>
        </div>
        <div className="service">
          <img src={service2} alt="Odontología Restaurativa" />
          <h3>Odontología Restaurativa</h3>
          <Button component="a" href="#" style={{ textDecoration: 'none' }}>Más información ↗</Button>
        </div>
        <div className="service">
          <img src={service3} alt="Odontopediatría" />
          <h3>Odontopediatría</h3>
          <Button component="a" href="#" style={{ textDecoration: 'none' }}>Más información ↗</Button>
        </div>
        <div className="service">
          <img src={service4} alt="Ortodoncia" />
          <h3>Ortodoncia</h3>
          <Button component="a" href="#" style={{ textDecoration: 'none' }}>Más información ↗</Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
