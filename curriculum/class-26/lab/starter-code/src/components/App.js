import React, { Component } from 'react';
import styles from './App.css';

class Header extends Component {
  render() {
    return (
      <header className={styles.Header}>
        <nav>
          <ul>
            <li><a className={styles.active} href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Documentation</a></li>
          </ul>
        </nav>
        <section>
          <h1>The Rick And Morty Api</h1>
          <h2>Hey, did you ever want to hold a Terry fold?</h2>
        </section>
      </header>
    );
  }
};

class Footer extends Component {
  render() {
    return (
      <footer className={styles.Footer}>
        <section className={styles.stats}>
          <p>Characters: 493</p>
          <p>Locations: 76</p>
          <p>Episodes: 31</p>
        </section>
        <section className={styles.acknowledgment}>
          <p>❮❯ by <a href="#">Axel Fuhrmann</a> 2020</p>
        </section>
      </footer>
    );
  }
}

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <Footer />
      </React.Fragment>
    );
  }
};

export default App;
