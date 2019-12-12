# Lecture Guide: API Server

## DRY up the code!
  * To this point, you have many (n) routes that all pretty much look the same
  * You also have many (n) models that all pretty much look the same.
  * We need to find some creative ways to DRY out the code where we can.
* Virtual model definition allows us to go down to 1 common route
  * Instead of many route files with `app.get('/api/v1/categories` and `app.get('/api/v1/products)`, we can use parameter middleware to clean that up.
  * `route.param('model', modelFinder)` will fire whenever a `:model` param is in a route.
  * that can allow us to fetch a **specified** model on the fly, rather than make many identical files.
  * DEMO!
* Extended Model Classes can help us clean up our models.
  * Imagine a world where you have 50 models like our products. They're all the same: A mongoose schema that is very specific, and the model class that has all of the REST style methods in it, that just calls the schema functions.
  * We could make a "mongo model" class that has those methods in it ...
  * And then for each actual model, they can simply extend that class and feed in their own schema.
  * Models become much smaller and easier to manage, and the interface is stable and only changes in that one file (the master class or interface), not every model
  * DEMO!

## Sub Documents vs Joins
  * Sub Documents are great for supportive data such as comments on a blog post
  * Joins are great for linking common/shared data such as players and baseball teams
* Note that noSQL Databases don't really join, and doing so generally is considered an anti-pattern. Ensure that you're modeling things in the most logical way for this data store.
* `populate()` is a method we can use in Mongoose to connect 2 collections
  * Method 1: physically joining using a reference to another collection
  * Method 2: Virtual Population
    * Create a virtual field in a document pointed to a field in another one.
    * In `pre('find')` you do a collection "on the fly" which can be more efficient than storing the relation.
* Pre and Post hooks (middleware)
  * Mongoose allows you to inject logic at various points in the lifecycle of a data record.
    * User can perform validation, normalization
    
    
### Subdocuments [docs](https://mongoosejs.com/docs/subdocs.html)
```
var childSchema = new Schema({ name: 'string' });

var parentSchema = new Schema({
  // Array of subdocuments
  children: [childSchema],
  
  // Single nested subdocuments.
  child: childSchema
});
```

### Direct Population (References)
Create a reference column in the collection and then when you save, you need to `push()` into the reference field with the _id of the referenced document.  This results in quicker `find()` but requires a lot more management on saves, updates, deletes.

```
const personSchema = Schema({
  _id: Schema.Types.ObjectId,
  name: String,
  age: Number,
  stories: [{ type: Schema.Types.ObjectId, ref: 'Story' }]
});

const storySchema = Schema({
  author: { type: Schema.Types.ObjectId, ref: 'Person' },
  title: String,
  fans: [{ type: Schema.Types.ObjectId, ref: 'Person' }]
});
```

### Virtual Joins

In this example, we create a virtual field in teams called "players" by connecting them with named fields, and then doing a populate as we find/load documents.
```
const teams = mongoose.Schema({
  name: { type:String, required:true },
}, { toObject:{virtuals:true}, toJSON:{virtuals:true} });

teams.virtual('players', {
  ref: 'players',
  localField: 'name',
  foreignField: 'team',
  justOne:false,
});

teams.pre('find', function() {
  this.populate('players');
});

```

