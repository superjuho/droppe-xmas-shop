import React from 'react';
import Home from './views/Home';
import Item from './views/Item';
import Nav from './components/Nav';
import Cart from './views/Cart';
import Snow from './components/Snow'
import CategoryTable from './components/CategoryTable';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import GlobalState from './contexts/GlobalState';
import ShopContext from './contexts/ShopContext';

const App = () => {
  return (
    <>
    <GlobalState>
    <Router>
      <ShopContext.Consumer>
        {context => (
          <><Nav cartItemNumber={context.cart.reduce((count : number, curItem : any) => {
            return count + curItem.quantity;
          }, 0)}/>
          </>
        )}
            </ShopContext.Consumer>
      <Snow/>
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/item/:id" exact component={Item}/>
        <Route path="/category/:cat" component={CategoryTable}/>
        <Route path="/cart" component={Cart}/>
      </Switch>
    </Router>
    </GlobalState>
    </>
  )
}

export default App;
