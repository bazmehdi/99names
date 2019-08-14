import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.scss';
import Header from './components/header/Header';
import Grid from './components/grid/Grid';
import Name from './components/name/Name';
import Footer from './components/footer/Footer';
import Error from './components/Error';

class App extends Component { 
  render() {
    return (
      <Router>
        <div className="body">
          <Header />
          <Switch>
            <Route exact path="/" component={Grid} />
            <Route path="/:id" component={Name} />
            <Route component={Error} />
          </Switch>
          {/*<Footer />*/}
        </div>
      </Router>
    );
  }
}

export default App;
