import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
class NavItem extends Component {
constructor(props) {
    super(props);
    this.state = {
      click: false
    }
}

activeItem = () => {
  this.setState({
    click: !this.state.click
  });
}

  render() {
    return (
      <li id={this.props.item}  className={this.state.click ? "active" : null}>
        <a href={this.props.link} onClick={this.activeItem} >
          {this.props.item}
        </a>
      </li>
    );
  }
}

export default NavItem;
