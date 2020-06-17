import React, { Component } from 'react';

import NavItem from './nav_item';
import Social from './social';
import WriteCall from './write_call';

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      'NavItemActive':''
    }
}

activeItem = (id) => {
  if(this.state.NavItemActive.length > 0) {
    document.getElementById(this.state.NavItemActive).classList.remove('active');
  }
  this.setState({'NavItemActive':id}, () => {
    document.getElementById(this.state.NavItemActive).classList.add('active');
  });
};
  render() {
    return (
      <div className="nav">
      <Social />
      <ul>
        <NavItem item='home' link="/" aktiv={this.activeItem} />
        <NavItem item='projects' link="/projects" aktiv={this.activeItem} />
        <NavItem item='about' link="/about" aktiv={this.activeItem} />
        <NavItem item='contact' link="/contact" aktiv={this.activeItem} />
      </ul>
      <WriteCall />
      </div>
    );
  }
}

export default Navbar;
