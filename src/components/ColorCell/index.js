import React, { Component } from 'react';

import classNames from 'classnames';
import './style.css';

class ColorCell extends Component {
  onCellClick = () => {
    if(this.props.handleCellClicked === undefined) return;

    this.props.handleCellClicked(this.props.id);
  };

  render() {
    const { color, selected, clickable } = this.props;

    const cellClass = classNames({
      'cell': true,
      'clickable': clickable,
      'selected': selected
    });

    return (
      <div
        className={cellClass}
        onClick={this.onCellClick}
        style={{
          backgroundColor: color.string(),
          color: color.negate().string()
        }}>
      </div>
    );
  }
}

export default ColorCell;
