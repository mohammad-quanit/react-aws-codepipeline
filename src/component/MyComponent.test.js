import React from 'react'
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import MyComponent from './MyComponent';
import CustomHook from '../CustomHooks/useCustomHook';


configure({ adapter: new Adapter() });

describe('MyComponent', () => {
  const onCountChange = jest.fn();
  let wrapper;
  beforeEach(() => {
    wrapper = mount(<MyComponent onCountChange={onCountChange} />);
  });

  it('renders', () => {
    expect(wrapper).not.toBeNull();
  });

  it('shows my default text', () => {
    expect(wrapper.find('p').text()).toEqual('Count: 0');
  });

  it('correctly increments the count by 1', () => {
    wrapper.find('button').simulate('click');
    expect(wrapper.find('p').text()).toEqual('Count: 1');
  });

  it('correctly increments the count by 4', () => {
    wrapper.find('button').simulate('click');
    wrapper.find('button').simulate('click');
    wrapper.find('button').simulate('click');
    wrapper.find('button').simulate('click');
    expect(wrapper.find('p').text()).toEqual('Count: 4');
  });

  it('rerender accordingly', () => {
    expect(onCountChange).toBeCalledTimes(10);
    wrapper.find('button').simulate('click');
    expect(onCountChange).toBeCalledTimes(11);
  });
});

describe.only('use custom hook', () => {
  it('cutom hook works', () => {
    let results;
    function HookWrapper() {
      results = CustomHook()
      console.log(results)
      return null
    }
    mount(<HookWrapper />)  
    expect(results.count).toEqual(0)
  })
})
