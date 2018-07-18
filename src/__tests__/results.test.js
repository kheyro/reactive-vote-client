import React from 'react';
import { List, Map } from 'immutable';
import { mount } from 'enzyme';
import Results from '../components/Results';
import Winner from '../components/Winner';

let wrapper;

beforeEach(() => {
  wrapper = mount(<Results />);
});

afterEach(() => {
  wrapper.unmount();
});

describe('Results', () => {
  it('renders entries with vote counts or zero', () => {
    const pair = List.of('Brazil', 'France');
    const tally = Map({ Brazil: 5 });
    wrapper.setProps({ pair, tally });

    expect(wrapper.find('.entry').length).toEqual(2);

    expect(wrapper.find('.entry').at(0).text()).toContain('Brazil');
    expect(wrapper.find('.entry').at(0).text()).toContain('5');

    expect(wrapper.find('.entry').at(1).text()).toContain('France');
    expect(wrapper.find('.entry').at(1).text()).toContain('0');
  });

  it('invokes the next callback when next button is clicked', () => {
    let nextInvoked = false;
    const next = () => (nextInvoked = true);
    wrapper.setProps({ next });
    wrapper.find('button').simulate('click');
    expect(nextInvoked).toBe(true);
  });

  it('renders the winner when there is one', () => {
    wrapper.setProps({
      pair: List.of('Brazil', 'France'),
      tally: Map(),
      winner: 'France',
    });

    expect(wrapper.find(Winner).length).toEqual(1);
    expect(wrapper.render().text()).toContain('France');
  });
});
