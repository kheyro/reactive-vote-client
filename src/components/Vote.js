import React, { Component } from 'react';

class Vote extends Component {
  getPair = () => this.props.pair || [];

  isDisabled = () => !!this.props.hasVoted;

  hasVotedFor = entry => this.props.hasVoted === entry;

  render() {
    return (
      <div className="voting">
        {this.getPair().map(entry => (
          <button
            key={entry}
            onClick={() => this.props.vote(entry)}
            disabled={this.isDisabled()}
          >
            <h1>{entry}</h1>
            {this.hasVotedFor(entry)
              ? <div className="label">Voted</div>
              : null}
          </button>
        ))}
      </div>
    );
  }
}

export default Vote;
