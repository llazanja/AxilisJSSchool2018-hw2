import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './style.css';

class NavbarLink extends Component {
  render() {
    return (
      <div className="navbar-link">
        <Link to={this.props.value}>{this.props.title}</Link>
      </div>
    );
  }
}

export default NavbarLink;
