import React, { Component } from 'react';
import 'font-awesome/css/font-awesome.css';

class WriteCall extends Component {
  render() {
    return (
      <div className='call'>
        <a href="mailto:tarcea@gmail.com" target="blank"><i className="fa fa-envelope"></i></a>
        <a href="skype:gheorghe.tarcea?call"><i className="fa fa-skype"></i></a>
        <a href="tel://+46704024031" target="blank"><i className="fa fa-phone"></i></a>
      </div>
    );
  }
}

export default WriteCall;
