import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './CSS/Title.css';

class Title extends Component {
  render() {
    const { headline } = this.props;
    return (
      <div className="card-title">
        <h2 className="title-secondary">{headline}</h2>
      </div>
    );
  }
}

Title.propTypes = {
  headline: PropTypes.string.isRequired,
};

export default Title;
