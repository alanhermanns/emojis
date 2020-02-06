import React from 'react';

const RadioGroup = ({ children, onChange, name, checked }) => (
  React.Children.map(children, child => {
    return React.cloneElement(child, {
      isChecked: checked === child.props.value,
      name,
      onChange
    });
  })
);

const RadioOption = ({ children, name, value, isChecked, onChange }) => (
  <>
    <input type="radio" name={name} value={value} onChange={onChange} checked={isChecked} />
    <label>{children}</label>
  </>
);

export default function App() {
  return (
    <RadioGroup name="abc" checked="c" onChange={({ target }) => console.log(target.value)}>
      <RadioOption value="a">A</RadioOption>
      <RadioOption value="b">B</RadioOption>
      <RadioOption value="c">C</RadioOption>
      <RadioOption value="d">D</RadioOption>
    </RadioGroup>
  );
}
