import React from 'react';
import
{
BrowserRouter as Router,
Route,
} from "react-router-dom";

import './App.css';

import Navbar from './components/navbar';
import Home from './contents/home';
import Projects from './contents/projects';
// import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router basename={`${process.env.PUBLIC_URL}/`}>
      <div className='app'>
        <Navbar />
        <Route exact path="/" component={Home} >
          <Home />
        </Route>
        <Route path="/projects">
          <Projects />
        </Route>
      </div>
    </Router>
  );
}

export default App;
