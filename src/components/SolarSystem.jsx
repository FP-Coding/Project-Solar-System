import React, { Component } from 'react';
import Title from './Title';
import PlanetCard from './PlanetCard';
import planets from '../data/planets';
import './CSS/SolarSystem.css';

class SolarSystem extends Component {
  render() {
    const listPlanets = planets.map(({ name, image }) => (
      <PlanetCard key={ name } planetName={ name } planetImage={ image } />
    ));
    return (
      <div data-testid="solar-system">
        <Title headline="Planetas" />
        <div className="flex-container">
          {listPlanets}
        </div>
      </div>
    );
  }
}

export default SolarSystem;
