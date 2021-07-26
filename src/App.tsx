import React from 'react';
import Home from './views/Home';
import Item from './views/Item';
import Nav from './components/Nav';
import CategoryTable from './components/CategoryTable';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

const App = () => {
  return (
    <>
    <Router>
      <Nav/>
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/item/:id" exact component={Item}/>
        <Route path="/category/:cat" component={CategoryTable}/>
      </Switch>
    </Router>
    </>
  )
}

export default App;
