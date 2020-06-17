import React, { Component } from 'react';

class Wildcard extends Component {
  render() {
    return (
      <div className="wildcard">
        <div className="compdet">
          <h3>{this.props.title}</h3>
          <p>{this.props.about}</p>
        </div>
      </div>
    );
  }
}

export default Wildcard;
