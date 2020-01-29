# React Properties and State

## Properties

In React properties, or props, are our way to pass data to a
component. Props are passed to a component as an object. These
props are read-only, which means that we cannot (or should not)
change their values.

## Type Checking Props

In order to keep readability high, even in complex applications
and components, its often nice to add prop type checking. This
makes it easier for developers to know what types they can
pass as props as well as providing nice error messaging should
a developer pass in the wrong type.

## State

In React state is data that can change (e.g. form inputs). This
state is stored in an object instantiated inside of a class component.
This state can only be transformed by the class component who
instantiated it. This component is considered the owner of state.

### How state changes (change categories)

* state change is dependent on previous state (dependent)
* state change is independent of previous state (independent)

### Common state uses (use categories)

* forms
* toggles
* time (e.g. fetching data from server)

### use categories to change categories

* independent
  * forms
  * time
* dependent
  * toggles

### Passing state to other components

The owner of a piece of state can pass that state to other
components via props. As props the data transferred becomes
read-only.

### Updating state from other components

State is passed from owner (provider) to other components
(consumer) as props. Only the provider is authorized to change
state. If a consumer wants to change state it has to ask the
provider to change state. This is done by passing functions
from provider to consumer. The functions are invoked in the consumer,
but run in the provider. These function are often called events.

### Data Flow

In React data flows from parent to child, and event flow
from child to parent. Data down, events up.

## Components

### Container Components

As a rule of thumb, container components are stateful (class)
components which deal how things work. They are the owners of
state and provide that state to other components.

### Presentational Components

As a rule of thumb, presentational components are stateless
functional components which deal with how things look. They
are passed props that they display.

## React Testing

* **Snapshots** - Make assertions on the *exact* generated markup
  at any state of the application.
* **Render Testing** - Similar to snapshots, but allows for
  jQuery-like inspection of the virtual     DOM tree
* **Shallow Testing** - Executes and renders the called/container
  component, but does not compose children.
* **Mounting** - Executes the full component and children. Allows
  for inspection of rendered Virtual DOM as well as the current state

Using a combination of approaches, you can easily "use" your application
and ensure that things are changing both visually and physically
(elements and state) as you expect.

## Component Lifecycle

Components have a life. They come into existence (mount),
get updated, and get destroyed (unmount). You can hook into
these lifecycle events by defining instance methods on your
component class.

Method | Description
------ | -----------
`componentDidMount` | The component has rendered to the DOM
`componentWillUnmount` | The component has been removed from the DOM
`componentDidUpdate` | The components state or props have changed

```js
import React, { Component } from 'react'

export default class Dog extends Component {
  state = {
    name: 'spot',
    weight: '20 lbs',
    age: 5
  }

  componentDidMount() {
    console.log('Mounted');
  }

  componentDidUpdate() {
    console.log('Updated');
  }

  componentWillUnmount() {
    console.log('Unmounted');
  }

  handleClick = () => {
    this.setState(state => {
      return {
        age: state.age + 1
      }
    });
  }

  render() {
    return (
      <>
        <button onClick={this.handleClick}>Update Age</button>
        <dl>
          <dt>Name</dt>
          <dd>{this.state.name}</dd>

          <dt>Age</dt>
          <dd>{this.state.age}</dd>

          <dt>Weight</dt>
          <dd>{this.state.weight}</dd>
        </dl>
      </>
    )
  }
}
```

### One Way Data flow

State can only be passed from parent component to a child component through the use of `props`. This enforces the idea of one way data flow. One way data flow is a way of describing that state can only be passed down the component tree (not up). If a child wants to pass some data to a parent, the parent can pass a function to the child through `props` and the child may invoke that function and pass it data for the parent to manage.
