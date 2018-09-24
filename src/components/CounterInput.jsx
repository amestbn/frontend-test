import React, { Component } from 'react';
import { connect } from 'react-redux';
import uuid from 'uuid';
import { ItemActions } from '../actions';

const mapDispatchToProps = dispatch => {
  return {
    addItem: item => dispatch(ItemActions.addItem(item))
  }
};

class CounterInput extends Component {
  constructor() {
    super();
    this.state = {
      title: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange (event) {
    this.setState({
      [event.target.id]: event.target.value
    });
  }
  handleSubmit (event) {
    event.preventDefault();
    const { title } = this.state;

    const id = uuid();
    this.props.addItem({ title, id, counter: 0 });
    this.setState({ title: '' });
  }
  render () {
    const { title } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" id="title" value={title} onChange={this.handleChange}/>
        <button type="submit">+</button>
      </form>
    );
  }
}

export default connect(null, mapDispatchToProps)(CounterInput);