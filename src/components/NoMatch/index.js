import React, { Component } from 'react';

import './style.css';

class NoMatch extends Component {
  render() {
    return (
      <div className="container">
        <h1>Route not found!</h1>
      </div>
    );
  }
}

export default NoMatch;
