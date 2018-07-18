import React from 'react';
import { mount } from 'enzyme';
import Voting from '../components/Voting';
import Winner from '../components/Winner';

let wrapper;

beforeEach(() => {
  wrapper = mount(<Voting />);
});

afterEach(() => {
  wrapper.unmount();
});

describe('Vote', () => {
  it('renders a pair of buttons', () => {
    wrapper.setProps({ pair: ['Brazil', 'France'] });

    expect(wrapper.find('button').length).toEqual(2);
    expect(wrapper.find('button').at(0).text()).toContain('Brazil');
    expect(wrapper.find('button').at(1).text()).toContain('France');
  });

  it('invoke a callback when a button is clicked', () => {
    let voteWidth;
    const vote = entry => (voteWidth = entry);
    wrapper.setProps({ pair: ['Brazil', 'France'], vote });

    wrapper
      .find('button')
      .at(0)
      .simulate('click');
    expect(voteWidth).toEqual('Brazil');
  });

  it('adds label to the voted entry', () => {
    wrapper.setProps({
      pair: ['Brazil', 'France'],
      hasVoted: 'Brazil',
    });
    expect(
      wrapper
        .find('button')
        .at(0)
        .text()
    ).toContain('Voted');
  });

  it('renders the Winner component when there is one', () => {
    // wrapper = shallow(<Voting winner="France" />); // Could use shallow here
    wrapper.setProps({ winner: 'France' });
    expect(wrapper.find(Winner).length).toEqual(1);
  });

  it('renders the Winner component when there is one', () => {
    wrapper.setProps({ winner: 'France' });
    expect(wrapper.find('button').length).toEqual(0);
    expect(wrapper.text()).toContain('France');
  });
});
