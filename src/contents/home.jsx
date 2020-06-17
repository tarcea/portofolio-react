import React, { Component } from 'react';

import Typewriter from 'typewriter-effect';
import pic from '../img/gh.jpeg';
import Social from '../components/social';

class Home extends Component {
  render() {
    const options = {
            strings: ['Full-stack', 'Ruby', 'Ruby on Rails', 'JS', 'React', 'Redux'],
            autoStart: true,
            loop: true,
          }
    return (
      <div className="condiv home">

        <img src={pic} className="profilepic" alt=''></img>
        <div className='bloc'>Hi, I am Gheorghe Tarcea,
        <Typewriter options={options} className='minibloc' /> developer.
        </div>
        <Social />
      </div>
    );
  }
}

export default Home;
