import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import Color from 'color';
import BWGrid from './containers/BWGrid';
import Navbar from './components/Navbar';
import NoMatch from './components/NoMatch';
import RGBGrid from './containers/RGBGrid';

class App extends Component {
  constructor(){
    super();

    this.paletteCells = [
      {
        id: 0,
        clickable: true,
        color: Color.rgb(0, 0, 0)
      }, // black
      {
        id: 1,
        clickable: true,
        color: Color.rgb(255, 255, 255)
      }, // white
      {
        id: 2,
        clickable: true,
        color: Color.rgb(0, 128, 0)
      }, // green
      {
        id: 3,
        clickable: true,
        color: Color.rgb(255, 255, 0)
      }, // yellow
      {
        id: 4,
        clickable: true,
        color: Color.rgb(0, 0, 255)
      }, // blue
      {
        id: 5,
        clickable: true,
        color: Color.rgb(255, 0, 0)
      }, // red
      {
        id: 6,
        clickable: true,
        color: Color.rgb(128, 0, 128)
      }, // purple
      {
        id: 7,
        clickable: true,
        color: Color.rgb(0, 255, 255)
      }, // aqua
      {
        id: 8,
        clickable: true,
        color: Color.rgb(255, 165, 0)
      }, // orange
      {
        id: 9,
        clickable: true,
        color: Color.rgb(255, 0, 255)
      } // fuchsia
    ];

    this.CELL_COUNT = 100;
    const matrix = [];

    for(let i = 0; i < this.CELL_COUNT; i++) {   
      const randomColor = this.paletteCells[Math.floor(Math.random() * this.paletteCells.length)].color;

      matrix.push({
        id: i,
        color: randomColor,
        clickable: true,
      });
    }

    this.state = {
      selectedCell: -1,
      matrix
    };
  }

  handleMatrixCellClicked = (cellId) => {
    if(this.state.selectedCell === -1) return;

    this.setState({
      matrix: this.state.matrix.map(cell => {
        if(cell.id === cellId) return {...cell, color: this.paletteCells[this.state.selectedCell].color}
        else return cell;
      })
    });
  };

  handlePaletteCellClicked = (cellId) => {
    this.setState({ selectedCell: cellId });
  };

  render() {
    return (
      <div className="container">
        <BrowserRouter>
          <div>
            <Navbar/>    
            <Switch>
              <Redirect exact from="/" to="/rgb" />
              <Route exact path="/rgb"
                render={() => <RGBGrid 
                  matrix={this.state.matrix}
                handleMatrixCellClicked={this.handleMatrixCellClicked}
                handlePaletteCellClicked={this.handlePaletteCellClicked}
                paletteCells={this.paletteCells}
                selectedCell={this.state.selectedCell}
                />}
              />
              <Route exact path="/bw"
                render={() => <BWGrid
                  matrix={this.state.matrix}
                />}
              />
              <Route component={NoMatch} />
            </Switch>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
