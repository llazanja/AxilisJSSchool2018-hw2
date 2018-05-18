import React, { Component } from 'react';

import Color from 'color';
import Matrix from '../components/Matrix';

class BWGrid extends Component {
  render() {
    const greyscaleMatrix = this.props.matrix.map(cell => ({
      ...cell, clickable: false, color: cell.color.grayscale()
    }));

    return (
      <div>
        <Matrix
          matrix={greyscaleMatrix}/>
      </div>
    );
  }
}

export default BWGrid;
