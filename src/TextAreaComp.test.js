jest.unmock('./TextAreaComp');

import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import TextAreaComp from './TextAreaComp';
import LetterList from './TextAreaComp';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<TextAreaComp />, div);
});

describe('<TextAreaComp />', () => {
  it('renders none <LetterList /> component when first time arrived', () => {
    const wrapper = shallow(<LetterList />);
    expect(wrapper.find(LetterList).length).toBe(0);
  });

  it('renders a sentence to write test', () => {
    const wrapper = shallow(<TextAreaComp />);
    expect(wrapper.contains("Testilause tässä")).toBe(true);
  });

  it('expects to change the value when typing', () => {
    const wrapper = shallow(<TextAreaComp />);
    
    expect(wrapper.state().value).toBe('');
  
    wrapper.find('input').simulate('change', {target: {value: 'Testilause'}});
    
    expect(wrapper.state().value).toBe('Testilause');
    
  });

});