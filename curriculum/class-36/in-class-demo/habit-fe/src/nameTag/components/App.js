import React from 'react';
import NameTag from '../containers/NameTag';
import { NameTagProvider } from '../hooks/nameTag';
import InputText from './InputText';
import InputColor from './InputColor';
import Shape from './Shape';

export default function App() {
  return (
    <NameTagProvider color="#00FF00" backgroundColor="#FF00FF">
      <InputText />
      <InputColor />
      <Shape />
    </NameTagProvider>
  );
}
