import React, { Component } from 'react';

import ColorPalette from '../components/ColorPalette';
import Matrix from '../components/Matrix';

class RGBGrid extends Component {
  render() {
    return (
      <div>
        <Matrix
          matrix={this.props.matrix}
          handleMatrixCellClicked={this.props.handleMatrixCellClicked}/>
        <ColorPalette
          paletteCells={this.props.paletteCells}
          handlePaletteCellClicked={this.props.handlePaletteCellClicked}
          selectedCell={this.props.selectedCell}/>
      </div>
    );
  }
}

export default RGBGrid;
