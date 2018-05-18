import React, { Component } from 'react';

import ColorCell from '../ColorCell';

class ColorPalette extends Component {
  render() {
    const { paletteCells, selectedCell } = this.props;
    
    return (
      <div className="wrapper">
        {paletteCells.map(cell => (<ColorCell
          key={cell.id}
          color={cell.color}
          id={cell.id}
          selected={selectedCell === cell.id}
          clickable={cell.clickable}
          handleCellClicked={this.props.handlePaletteCellClicked}/>))}
      </div>
    );
  }
}

export default ColorPalette;
