import './App.css';
import Header from './Components/Header/Header';
import List from './Components/List/list';
import Contact from './Components/Contact/Contact';
import Pagenotfound from './Components/Error/Error';
import About from './Components/AboutUs/About';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import React from 'react';
import Footer from './Components/Footer/Footer';

class App extends React.Component{
  render () {
    return (
      <Router>
        <Header/>
        <Switch>
        <Route exact path='/' component={List} />
        <Route exact path='/contact' component={Contact} />
        <Route exact path="/aboutus" component={About}/>
        <Route component={Pagenotfound} />
        </Switch>
      </Router>
    )
  }
}

export default App;
