import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './CSS/PlanetCard.css';

class PlanetCard extends Component {
  render() {
    const { planetName, planetImage } = this.props;
    return (
      <div className="planetas" data-testid="planet-card">
        <img
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
