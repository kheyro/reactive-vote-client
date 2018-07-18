import React from 'react';
import { List, Map } from 'immutable';
import { mount } from 'enzyme';
import Results from '../components/Results';

describe('Results', () => {
  it('renders entries with vote counts or zero', () => {
    const pair = List.of('Brazil', 'France');
    const tally = Map({ Brazil: 5 });

    const wrapper = mount(<Results pair={pair} tally={tally} />);

    expect(wrapper.find('.entry').length).toEqual(2);

    expect(wrapper.find('.entry').at(0).text()).toContain('Brazil');
    expect(wrapper.find('.entry').at(0).text()).toContain('5');

    expect(wrapper.find('.entry').at(1).text()).toContain('France');
    expect(wrapper.find('.entry').at(1).text()).toContain('0');

    wrapper.unmount();
  });

  it('invokes the next callback when next button is clicked', () => {
    let nextInvoked = false;
    const next = () => (nextInvoked = true);
    const wrapper = mount(<Results next={next} />);

    wrapper.find('button').simulate('click');
    expect(nextInvoked).toBe(true);
    wrapper.unmount();
  });
});
