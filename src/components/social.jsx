import React, { Component } from 'react';
import 'font-awesome/css/font-awesome.css';

class Social extends Component {
  render() {
    return (
      <div className='social'>
        <a href="https://github.com/tarcea" target="blank"><i className="fa fa-github"></i></a>
        <a href="https://www.facebook.com/gheorghe.tarcea" target="blank"><i className="fa fa-facebook"></i></a>
        <a href="https://www.instagram.com/ghtarcea/" target="blank"><i className="fa fa-instagram"></i></a>
        <a href="https://www.linkedin.com/in/gheorghe-tarcea-0a2b4589" target="blank"><i className="fa fa-linkedin"></i></a>
      </div>
    );
  }
}

export default Social;
