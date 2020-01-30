# React: Lists and Async

## Lists

Often lists are created by mapping through an array of items.
For each item in the array we return an element that will form
the list.

```js
import React from 'react';
import PropTypes from 'prop-types';
import Dog from './Dog';

function Dogs({ dogs }) {
  const dogList = dogs.map(({ name, age, weight }) => (
    <li>
      <Dog name={name} age={age} weight={weight} />
    </li>
  ));

  return (
    <ul>
      {dogList}
    </ul>
  )
}

Dogs.propTypes = {
  dogs: PropTypes.array.isRequired
};

export default Dogs;
```

### Keys

Keys are used internally by React to manage our list of items.
They let React identify which items have changed, been added,
or been removed, and prevent unnecessary re-rendering. Keys
should be a unique string in the list.

```js
import React from 'react';
import PropTypes from 'prop-types';
import Dog from './Dog';

function Dogs({ dogs }) {
  const dogList = dogs.map(({ name, age, weight }) => (
    <li key={`${name}-${age}-${weight}`}>
      <Dog name={name} age={age} weight={weight} />
    </li>
  ));

  return (
    <ul>
      {dogList}
    </ul>
  )
}

Dogs.propTypes = {
  dogs: PropTypes.array.isRequired
};

export default Dogs;
```

## Making a service

Make a separate services directory that will contain all API services.
This will keep our components simple, while making API calls reusable.

```js
// src/services/futuramaApi.js

export const getQuotes = (count = 10) => {
  return fetch(`https://futuramaapi.herokuapp.com/api/quotes/${count}`)
    .then(res => ([res.ok, res.json()]))
    .then(([ok, json]) => {
      if(!ok) throw 'Unable to fetch quote'

      return json
    });
}
```

## Using a service

```js
// src/containers/quotes/TopQuotes.js
import React, { PureComponent } from 'react';
import Quotes from '../../components/Quotes';
import { getQuotes } from '../../services/futuramaApi.js';

export default class TopQuotes extends PureComponent {
  state = {
    quotes: []
  }

  componentDidMount() {
    getQuotes()
      .then(quotes => this.setState({ quotes }));
  }

  render() {
    const { quotes } = this.state;
    return <Quotes quotes={quotes} />;
  }
}
```

## Refetch after update

```js
// src/components/quotes/TopQuotes.js
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Quotes from '../../components/quotes/Quotes';
import { getQuotes } from '../../services/futuramaApi.js';

export default class TopQuotes extends PureComponent {
  static propTypes = {
    count: PropTypes.number
  }

  static defaultProps = {
    count: 10
  }

  state = {
    quotes: []
  }

  fetchQuotes = () => {
    getQuotes(this.props.count)
      .then(quotes => this.setState({ quotes }));
  }

  componentDidMount() {
    this.fetchQuotes();
  }

  componentDidUpdate(prevProps) {
    if(prevProps.count  !== this.props.count) {
      this.fetchQuotes();
    }
  }

  render() {
    const { quotes } = this.state;
    return <Quotes quotes={quotes} />;
  }
}
```

## Loading

```js
// src/components/quotes/TopQuotes.js
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Quotes from '../../components/quotes/Quotes';
import Loading from '../../components/Loading'
import { getQuotes } from '../../services/futuramaApi.js';

export default class TopQuotes extends PureComponent {
  static propTypes = {
    count: PropTypes.number
  }

  static defaultProps = {
    count: 10
  }

  state = {
    quotes: [],
    loading: false
  }

  fetchQuotes = () => {
    this.setState({ loading: true })
    getQuotes(this.props.count)
      .then(quotes => this.setState({ quotes, loading: false }));
  }

  componentDidMount() {
    this.fetchQuotes();
  }

  componentDidUpdate(prevProps) {
    if(prevProps.count  !== this.props.count) {
      this.fetchQuotes();
    }
  }

  render() {
    const { quotes, loading } = this.state;
    if(loading) return <Loading />

    return <Quotes quotes={quotes} />;
  }
}
```
