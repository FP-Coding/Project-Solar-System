import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './CSS/PlanetCard.css';

class PlanetCard extends Component {
  render() {
    const { planetName, planetImage } = this.props;
    const idElement = planetImage.split('/')[3].split('.')[0].toLowerCase();
    return (
      <div data-testid="planet-card">
        <img
          className={ idElement }
          src={ planetImage }
          alt={ `Planeta ${planetName}` }
        />
        <p data-testid="planet-name">{planetName}</p>
      </div>
    );
  }
}

PlanetCard.propTypes = {
  planetName: PropTypes.string.isRequired,
  planetImage: PropTypes.string.isRequired,
};

export default PlanetCard;
