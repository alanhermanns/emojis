# React Quiz

Create a `NameTag` application.

## Components

* `App.js`
  * Uses `NameTag`
* `NameTag.js`
  * Container component
  * contains state
  * Uses the other components
* `ColorSelector.js`
  * Presentational/Functional component
  * Color input to change font color
  * Color input to change background color
* `TextSelector.js`
  * Presentational/Functional component
  * Text input
* `Shape.js`
  * Presentational/Functional component
  * takes `text`, `color` and `backgroundColor` props
  * Should display `text`
  * Should change `color` and `backgroundColor` based on props
  * HINT: Use `<div style={{ width: '100px', height: '100px' }}>` to pass in styles


## Tests

Snapshot test all presentational components. Use `toMatchSnapshot()`
to create a snapshot.

## Rubric

* Tests: 10pts
* Components: 20pts
* Clean style: 5pts
* State management: 15pts
