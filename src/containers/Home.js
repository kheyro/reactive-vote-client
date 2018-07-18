import React from 'react';
import { connect } from 'react-redux';
import { List, Map } from 'immutable';
import Voting from '../components/Voting';

const pair = List.of('Brazil', 'France');
const tally = Map({ 'Brazil': 5, 'France': 4 });

const Home = () => (
  <div className="row">
    <Voting pair={pair} tally={tally} />
  </div>
);

export default connect(null, null)(Home);
