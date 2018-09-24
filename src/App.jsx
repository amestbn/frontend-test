import React, { Component } from 'react';
import List from './components/List';
import CounterInput from './components/CounterInput';
import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
      <div>
        Hello!
        <CounterInput />
        <List />
        <Footer />
      </div>
    );
  }
}

export default App;
