# DSA/Challenge Submission Instruction

**Create a new repository called `data-structures-and-algorithms`**

* At the root of this folder, you'll need a standard testable node setup (config files available in the class repo)
  * package.json
    * jest and eslint as dependencies
    * `test` and `doc` scripts
  * .travis.yml
  * .eslintrc.json
  * .gitignore
* Additionally, create a folder called `docs` with a subfolder `config`
  * In the config folder, place the jsdoc.config.json file found in the 'configs' folder of your class repository

**For each new data structure, create a folder**

* In this folder you will create your constructor/library module
  * i.e. `data-structures-and-algorithms/linked-lists`
  * Your importable module should be named `index.js`
  * Place your tests in a __tests__ folder within the module directory
  
## Daily Code Challenges

* Work in a folder called called `challenges` in your `data-structures-and-algorithms` repository
* For each challenge, create a sub-folder for that challenge (i.e. `arrayReverse` along with a `__tests__` folder
* Your files for the challenge should be named appropriately
* These challenges will generally require you to use a data structure module to solve the challenge. This structure should allow you to easily import those in, like so:
  * i.e. `let sll = require('../linked-lists');`
* **Time-Box your code challenge to 1 hour each day**
  * :20 at the whiteboard with your partner
  * :20 composing your code and tests
  
### Testing
 * Write a complete set of tests for all data structures
 * Your daily code challenges should also have tests as a means of running the actual code
 * Your tests must be running green on travis.com

## To Submit Your DSA Lab or Challenge

* Work in a new branch of the DSA repository
* Follow the assignment instructions
* Create a PR with your work
* Ensure that your PR is picked up by `travis-ci.com` and that your tests are visibly running and passing.
* Submit to canvas with a link to the PR.

Your folder structure should look like this:
```
  data-structures-and-algorithms
    |__ docs
    |
    ├── challenges
    │   └── arrayReverse
    │       ├── __tests__
    │       │   └── array-reverse.test.js
    │       └── array-reverse.js
    └── linked-lists
        ├── __tests__
        │   └── linked-lists.test.js
        └── index.js
```


 

