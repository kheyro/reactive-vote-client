import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setState, vote } from '../actions';
import Vote from './Vote';
import Winner from './Winner';

export class Voting extends Component {
  render() {
    return (
      <div>
        {this.props.winner ? (
          <Winner winner={this.props.winner} />
        ) : (
          <Vote {...this.props} />
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  pair: state.getIn(['vote', 'pair']),
  hasVoted: state.get('hasVoted'),
  winner: state.get('winner'),
});

export const VotingContainer = connect(mapStateToProps, { setState, vote })(
  Voting
);
