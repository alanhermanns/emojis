# BONUS LAB: Mongoose Controllers

Create a `mongooseControllers` plugin that adds controller functions
to your mongoose models.

## Before you begin

Refer to *Getting Started*  in the [lab submission instructions](../../../reference/submission-instructions/labs/README.md) for complete setup, configuration, deployment, and submission instructions.


## Requirements

Once your plugin is loaded you should be able to:

```js
const MyModel = require('../models/MyModel');

module.exports = Router()
  .post('/', MyModel.post)
  .get('/:id', MyModel.getById)
  .get('/', MyModel.getAll)
  .patch('/:id', MyModel.patch)
  .delete(':id', MyModel.delete);
```

## Assignment Submission Instructions

Refer to the the [lab submission instructions](../../../reference/submission-instructions/labs/README.md) for the complete lab submission process and expectations
