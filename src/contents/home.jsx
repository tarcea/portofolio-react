import React, { Component } from 'react';

import Typewriter from 'typewriter-effect';
import pic from '../img/g.tarcea1_112.png';


class Home extends Component {
  render() {
    return (
      <div className="condiv home">
        <img src={pic} className="profilepic" alt=''></img>
      <p></p> Skills: <Typewriter
          options={{
            strings: ['Ruby', 'Ruby on Rails', 'JS', 'React', 'Redux'],
            autoStart: true,
            loop: true,
          }}
        />
      </div>
    );
  }
}

export default Home;
