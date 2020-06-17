import React, { Component } from 'react';

class Wildcard extends Component {
  render() {
    return (
      <div className="wildcard">
        <div className="compdet">
          <h3>{this.props.title}</h3>
          <h4 className="secondtext">{this.props.about}</h4>
        </div>
      </div>
    );
  }
}

export default Wildcard;
