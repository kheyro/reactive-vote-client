import React, { Fragment } from 'react';
import { Switch, Route } from 'react-router';

import Home from './containers/Home';
import { ResultsContainer } from './components/Results';

import './styles/styles.scss';

const App = () => (
  <Fragment>
    <div className="container">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/results" component={ResultsContainer} />
      </Switch>
    </div>
  </Fragment>
);

export default App;
