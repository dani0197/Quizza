import React, { Component } from 'react';
import './App.css';
import NavBar from './components/General/NavBar';
import { inject, observer } from 'mobx-react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import QuizzesScreen from './components/Quiz_Catalog/QuizzesScreen';
import LandingPage from './components/Landing/LandingPage';

@inject('store')
@observer
class App extends Component {
  render() {
    return (
    <Router>
      <div className="App">
        <NavBar />
        <Route path="/home" exact render={() => <QuizzesScreen />} />
        <Route path="/login" exact render={() => <LandingPage />} />

      </div>
    </Router>
    );
  }
}

export default App;
