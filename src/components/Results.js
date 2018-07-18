import React, { Component } from 'react';
import Winner from '../components/Winner';

class Results extends Component {
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

export default Results;
