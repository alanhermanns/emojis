const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  budget: {
    type: Number,
    required: true
  },
  genres: [String],
  datasetId: {
    type: Number,
    required: true
  },
  imdbId: {
    type: String,
    required: true
  },
  language: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  overview: String,
  popularity: {
    type: Number,
    required: true
  },
  releaseDate: Date,
  revenue: {
    type: Number,
    required: true
  },
  runtime: Number,
  tagline: String
});

schema.statics.getRevenueBudgetRatio = function(n = 10, order = 'desc') {
  return this.aggregate([
    {
      '$match': {
        'revenue': {
          '$gt': 10000
        },
        'budget': {
          '$gt': 10000
        }
      }
    }, {
      '$project': {
        'ratio': {
          '$divide': [
            '$revenue', '$budget'
          ]
        },
        'title': true,
        'revenue': true,
        'budget': true,
        'genres': true,
        'releaseDate': true
      }
    }, {
      '$sort': {
        'ratio': order === 'asc' ? 1 : -1
      }
    }, {
      '$limit': n
    }
  ]);
};

schema.statics.getGenreCount = function(n = 10, order = 'desc') {
  return this.aggregate([
    {
      '$unwind': {
        'path': '$genres'
      }
    }, {
      '$group': {
        '_id': '$genres',
        'count': {
          '$sum': 1
        }
      }
    }, {
      '$sort': {
        'count': order === 'asc' ? 1 : -1
      }
    }, {
      '$limit': n
    }
  ]);
};

schema.statics.getTopGenresByRatio = function() {
  return this.aggregate([
    {
      '$match': {
        'revenue': {
          '$gt': 10000
        },
        'budget': {
          '$gt': 10000
        }
      }
    }, {
      '$group': {
        '_id': {
          '$arrayElemAt': [
            '$genres', 0
          ]
        },
        'totalRevenue': {
          '$sum': '$revenue'
        },
        'totalBudget': {
          '$sum': '$budget'
        }
      }
    }, {
      '$addFields': {
        'ratio': {
          '$divide': [
            '$totalRevenue', '$totalBudget'
          ]
        }
      }
    }, {
      '$sort': {
        'ratio': -1
      }
    }, {
      '$limit': 10
    }
  ]);
};

module.exports = mongoose.model('Movie', schema);
