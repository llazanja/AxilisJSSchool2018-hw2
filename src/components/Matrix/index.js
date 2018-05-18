import React, { Component } from 'react';

import ColorCell from '../ColorCell';

class Matrix extends Component {
  render() {
    const matrix = this.props.matrix;
    
    return (
      <div className="wrapper">
        {matrix.map(cell => (
          <ColorCell
            key={cell.id}
            id={cell.id}
            color={cell.color}
            clickable={cell.clickable}
            handleCellClicked={this.props.handleMatrixCellClicked}
          />))}
      </div>
    );
  }
}

export default Matrix;
