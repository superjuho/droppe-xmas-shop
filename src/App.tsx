import React from 'react';
import Home from './views/Home';
import Item from './views/Item';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

const App = () => {
  return (
    <>
    <h1>Droppy XMAS!</h1>
    <Router>
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/item/:id" exact component={Item}/>
      </Switch>
    </Router>
    </>
  )
}

export default App;
