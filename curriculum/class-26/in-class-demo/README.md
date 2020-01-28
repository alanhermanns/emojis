# Webpack and React

* promises - put this in a function
  * console.log `oneSecond` see pending
  * console.log `oneSecond` after done
  * console.log when rejected
  * sleep in successive `then`s
    * convert to async/await
    * console.log the result
    * console.log after a `then`
    * console.log after a `then` with a return
    * console.log after a `then` with an await/return
  * sleep in a `Promise.all`
    * convert to async/await (without `Promise.all` oops)
    * convert with `Promise.all`
  * sleep in a `Promise.race`
* webpack
  * show entry/output `npm run build`
    * remove `[hash]` and add `[hash]`
    * change code, how does that change `[hash]`
    * explore the bundle js file
      * `console.log`
      * simple variable
      * computed variable
      * simple single use function
      * simple multi use function
      * import single use function
      * import multi use function
  * show dev server `npm start`
    * change ports
    * change js files
  * loaders
    * babel
      * optional chaining
      * class properties with `speak`
    * css
      * create `.red` class apply it to h1
        * see css in js
        * class name is randomized
    * images
      * import large image
      * import small image
  * plugins
    * html plugin
      * explore `index.html`
    * clean webpack plugin
      * remove it and watch files multiply
* react
  * jsx
    * create an h1
    * create an h1 with title variable
    * create a button
    * create a button with text variable
    * create a clickable button
  * components
    * create a `Dog` class component
    * create an `App` component with an h1
    * create an `App` component in its own file
    * put `Dog` in `App`
    * put `Dog` in `App` with a div
    * put `Dog` in `App` with a `Fragment`
    * put `Dog` in `App` with a `<>`
    * create a `Health` component and use in `Dog`
  * props
    * pass `name`, `age`, and `weight` to `Dog`
    * create a snapshot test for `Dog`
    * create a `Name`, `Age` and `Weight` component
    * create a `DescriptionListEntry` component
    * create a `DescriptionList` component
