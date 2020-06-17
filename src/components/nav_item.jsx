import React, { Component } from 'react';
// import { Link } from 'react-router-dom';

class NavItem extends Component {
  render() {
    return (
      <li id={this.props.item}>
        <a href={this.props.link} onClick={this.props.aktiv.bind(this,this.props.item)}>
          {this.props.item}
        </a>
      </li>
    );
  }
}

export default NavItem;
