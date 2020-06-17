import React, { Component } from 'react';

import Typewriter from 'typewriter-effect';
import pic from '../img/gh.jpeg';
// import Social from '../components/social';

class Home extends Component {
  render() {
    const options = {
            strings: ['Full-stack', 'Ruby', 'Ruby on Rails', 'JS', 'React', 'Redux'],
            autoStart: true,
            loop: true,
          }
    return (
      <div className="condiv home">
        <img src={pic} className="profilepic" alt='' width="110px"></img>

        <p>Hi, I am Gheorghe Tarcea... and I'm ready to jump in a <strong>Junior Developer</strong> position and
      start building amazing applications and make this world more and more beautiful.
      Right now I am working on small projects just for learning purposes.
      </p>
      <Typewriter options={options} />
      </div>
    );
  }
}

export default Home;
