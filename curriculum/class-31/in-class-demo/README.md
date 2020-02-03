# React Hooks

* presentation/container
  * `ColorPicker`, `ColorControls`, `ColorDisplay`
  * `Event`, `Events`, `ThisDay`
    * add `Link` and `Links`
* useState
  * `Title` with `useState`
    * don't destructure
    * destructure
    * pass nothing to `useState`
    * pass string to `useState`
    * update title
  * `Counter` with `useState`
    * don't destructure
    * destructure
    * pass nothing to `useState`
    * pass number to `useState`
    * increment count
    * increment count with arrow function
  * refactor `ColorPicker` to use `useState`
    * pass initialColor into `ColorPicker`
    * put `useState` into if block
* useEffect
  * `RandomBackground`
    * `useEffect` with `setInterval` to change background color
      * add console.log in `useEffect`
      * pass nothing to `useEffect`
      * pass empty array
      * pass array with timeInterval in it
      * return function to destroy old interval
  * refactor `ThisDay`
    * `useEffect` without second param
    * `useEffect` with empty array
    * `useEffect` with date in array
