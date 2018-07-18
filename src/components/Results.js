import React, { Component } from 'react';
import { connect } from 'react-redux';
import Winner from '../components/Winner';

export class Results extends Component {
  getPair = () => this.props.pair || [];

  getVotes = entry => {
    if (this.props.tally && this.props.tally.has(entry)) {
      return this.props.tally.get(entry);
    }
    return 0;
  };

  render() {
    return this.props.winner ? (
      <Winner winner={this.props.winner} />
    ) : (
      <div className="results">
        <div className="tally">
          {this.getPair().map(entry => (
            <div key={entry} className="entry">
              <h1>{entry}</h1>
              <div className="voteCount">{this.getVotes(entry)}</div>
            </div>
          ))}
        </div>
        <div className="management">
          <button className="next" onClick={this.props.next}>
            next
          </button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  pair: state.getIn(['vote', 'pair']),
  tally: state.getIn(['vote', 'tally']),
  winner: state.get('winner'),
});

export const ResultContainer = connect(mapStateToProps)(Results);
