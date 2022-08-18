import React, { Component } from 'react';
import Title from './Title';
import MissionCard from './MissionCard';
import missions from '../data/missions';
import './CSS/Missions.css';

class Missions extends Component {
  render() {
    const listMissions = missions.map(
      ({ name, year, country, destination }) => (<MissionCard
        key={ name }
        name={ name }
        year={ year }
        country={ country }
        destination={ destination }
      />),
    );
    return (
      <div data-testid="missions">
        <Title headline="Missões" />
        <div className="list-missions">
          { listMissions }
        </div>
      </div>
    );
  }
}

export default Missions;
