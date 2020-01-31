import React from 'react';
import Quote from './quotes/Quote';
import Button from './commons/button/Button';
import RadioButton from './commons/radio/RadioButton';
import RadioButtons from './commons/radio/RadioButtons';
import QuoteFetcher from '../containers/QuoteFetcher';

export default function App() {
  const radioButtons = [
    { label: 'Red', value: 'red' },
    { label: 'Blue', value: 'blue' },
    { label: 'Yellow', value: 'yellow' }
  ];

  return (
    <QuoteFetcher />
  );
}
