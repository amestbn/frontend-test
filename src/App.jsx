import React, { Component } from 'react';
import { Panel, PanelBlock } from 'bloomer';

import List from './components/List';
import CounterInput from './components/CounterInput';
import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
      <div className="container main">
        <h1 className="title has-text-centered has-text-primary">Tally</h1>
        <Panel className="counter-container">
          <PanelBlock>
            <CounterInput />
          </PanelBlock>
          <List />
          <PanelBlock>
            <Footer />
          </PanelBlock>
        </Panel>
      </div>
    );
  }
}

export default App;
