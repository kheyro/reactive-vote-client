import React, { Fragment } from 'react';
import { Switch, Route } from 'react-router';

import Header from './containers/Header';
import Home from './containers/Home';
import Results from './components/Results';

import './styles/styles.scss';

const App = () => (
  <Fragment>
    <Header />
    <div className="container">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="results" component={Results} />
      </Switch>
    </div>
  </Fragment>
);

export default App;
