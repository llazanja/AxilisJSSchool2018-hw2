import React, { Component } from 'react';

import NavbarLink from '../NavbarLink';
import uuid from 'uuid/v1';

import './style.css';

class Navbar extends Component {
  constructor() {
    super();
    this.navbarLinks = [
      {
        id: uuid(),
        title: "RGB",
        value: "/rgb"
      },
      {
        id: uuid(),
        title: "BW",
        value: "/bw"
      }
    ];
  }
  render() {
    return (
      <nav className="navigation">
        {this.navbarLinks.map(link => (
          <NavbarLink
            key={link.id}
            value={link.value}
            title={link.title}
          />
        ))}
      </nav>
    );
  }
}

export default Navbar;
