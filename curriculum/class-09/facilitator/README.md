# Facilitators Guide: API Server

## Learning Objectives

**Students will be able to ...**

* Describe and Define  
  * Virtual Joins
  * Sub Documents
  * :param middleware
* Execute
  * Manage the lifecycle of data model instances with pre and post hooks
  * Use param middleware in express
  
## Lab Notes

This is a paired assignment. We want the students talking this out.

There's no new code to be written in lab. This is considered to be the "final day" of APIs and Mongo as new topics.

As such, the lab will be purely on the delivery side of things, for the first time, students will execute something to be truly "done done"

* Writing Full JSDoc and Swagger
* Writing a full suite of tests (api, model, unit)
* In Depth UML
* Fully working deployment through CI/CD

## Preparation

The core takeaways from the day are introducing the students to
* Mongo Sub Documents
* Mongo Joins (populating using virtuals)
* Mongoose Pre and Post hooks (middleware)
* Parameterized API Routes

From a delivery standpoint, we will also be making our api more generic and using a dynamic parameter to pick the data model. Make sure you understand how the demo code works here.

* `/api/v1/:model/` - the model name is now in a param
  * `middleware/model-finder.js` - loads the right model file
    * `req.model` is now an instance of the right model, from the route, if it exists.
* You'll also be DRYing out the models today, so be well versed on classes and extension.

The demo shows each of the mongo modeling topics off in various ways, but this lecture is a good chance for the instructor to inject some real world use-cases into the discussion and inspire the students to really get in there and tinker.

Prepare for the day by tinkering a lot with setting up validations on schemas and doing interesting things pre and post save on the models.

Also, as with the previous day, we'll be writing tests with the Mongo in memory database, so be comfortable in how that spins up a virtual server while tests are running, and how it manages data state during testing.

## Past bugs, issues or surprises...

## General Comments and Notes
