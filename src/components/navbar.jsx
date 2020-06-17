import React, { Component } from 'react';

import NavItem from './nav_item';

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
      <nav>
      <ul>
        <NavItem item='home' link="/" activec={this.activeItem} />
        <NavItem item='projects' link="/projects" activec={this.activeItem} />
        <NavItem item='about' link="/about" activec={this.activeItem} />
        <NavItem item='contact' link="/contact" activec={this.activeItem} />
      </ul>
      </nav>
    );
  }
}

export default Navbar;
