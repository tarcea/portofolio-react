import React, { Component } from 'react';

import Wildcard from '../components/wildcard';
// import Social from '../components/social';

class Projects extends Component {
  render() {
    return (
      <div className="condiv">
        <h1 className="subtopic">My projects</h1>
        <a href="https://stockholm376-rent-a-pet.herokuapp.com/" target="_blank">
          <Wildcard title="Rent a pet" about="1 week ROR project in a team of 4 developers" />
        </a>
        <a href="https://travel-worms.herokuapp.com/" target="_blank">
          <Wildcard title="Travel Worms" about="2 weeks ROR project in a team of 4 developers" />
        </a>
      </div>
    );
  }
}

export default Projects;
