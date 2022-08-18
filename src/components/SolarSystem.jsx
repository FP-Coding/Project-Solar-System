import React, { Component } from 'react';
import Title from './Title';
import PlanetCard from './PlanetCard';

class SolarSystem extends Component {
  render() {
    return (
      <div data-testid="solar-system">
        <Title headline="Planetas" />
        <PlanetCard planetName="" planetImage="" />
      </div>
    );
  }
}

export default SolarSystem;
