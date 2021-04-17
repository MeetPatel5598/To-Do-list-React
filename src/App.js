import './App.css';
import Header from './Components/Header/Header';
import List from './Components/List/list';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import React from 'react';

class App extends React.Component{
  render () {
    return (
      <Router>
        <Header/>
        <Switch>
        <Route path='/' component={List} />
        </Switch>
      </Router>
    )
  }
}

export default App;
