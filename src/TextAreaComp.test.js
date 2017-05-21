import React from 'react';
import ReactDOM from 'react-dom';
import TextAreaComp from './TextAreaComp';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<TextAreaComp />, div);
});

