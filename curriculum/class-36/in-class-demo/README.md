# React useContext

* sharing state via parent
  * sharing number between components
    * Container pattern
    * Producer/Consumer pattern
  * `useNameTag`
    * container pattern
    * Producer/Consumer pattern
* habit tracker
  * show back-end
  * show list of habits
    * service
    * Presentational components
    * class container `AllHabits`
    * use hooks
    * custom hooks
  * create new habit
    * service
    * Presentational components
    * class container `CreateHabit`
    * use hooks
    * custom hooks
  * how do we share state between our create habit and and habit list
    * refactor to use context (we need a common parent)
      * if parents job is to connect state why not be explicit
