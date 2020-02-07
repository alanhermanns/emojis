import React from 'react';
import NameTag from '../containers/NameTag';
import NameTagFn from '../containers/NameTagFn';
import NameTagHook from './nameTag/NameTagHook';


export default function App() {
  return (
    <>
      <h1>Name Tag</h1>
      <h2>Container class</h2>
      <NameTag />

      <h2>Container function</h2>
      <NameTagFn />

      <h2>custom hook</h2>
      <NameTagHook />
    </>
  );
}
