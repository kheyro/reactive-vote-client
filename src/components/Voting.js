import React, { Component } from 'react';
import { connect } from 'react-redux';
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
  winner: state.get('winner'),
});

export const VotingContainer = connect(mapStateToProps)(Voting);
