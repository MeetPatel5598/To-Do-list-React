import './App.css';
import Header from './Components/Header/Header';
import List from './Components/List/list';
import Pagenotfound from './Components/Error/Error'
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import React from 'react';

class App extends React.Component{
  render () {
    return (
      <Router>
        <Header/>
        <Switch>
        <Route exact path='/' component={List} />
        <Route component={Pagenotfound} />
        </Switch>
      </Router>
    )
  }
}

export default App;
