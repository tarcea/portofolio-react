import React, { Component } from 'react';

import NavItem from './nav_item';
import Social from './social';
import WriteCall from './write_call';

class Navbar extends Component {


  render() {

    return (
      <div className="nav">
      <Social />
      <ul>
        <NavItem item='home' link="/" />
        <NavItem item='projects' link="/projects" />
        <NavItem item='about' link="/about" />
        <NavItem item='contact' link="/contact" />
      </ul>
      <WriteCall />
      </div>
    );
  }
}

export default Navbar;
