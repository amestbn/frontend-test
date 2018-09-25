import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ItemActions } from '../actions';

const mapDispatchToProps = dispatch => {
  return {
    removeItem: id => dispatch(ItemActions.removeItem(id)),
    increment: id => dispatch(ItemActions.increment(id)),
    decrement: id => dispatch(ItemActions.decrement(id))
  }
};

class ListItem extends Component {
  constructor() {
    super();
    this.handleRemove = this.handleRemove.bind(this);
    this.handleIncrement = this.handleIncrement.bind(this);
    this.handleDecrement = this.handleDecrement.bind(this);
  }
  handleRemove() {
    this.props.removeItem(this.props.id)
  }
  handleIncrement() {
    this.props.increment(this.props.id)
  }
  handleDecrement() {
    this.props.decrement(this.props.id)
  }
  render() {
    const { count, title } = this.props;
    return(
      <li><button type="button" onClick={this.handleRemove}>x</button>{ title }<button type="button" onClick={this.handleIncrement}>^</button>{ count }<button type="button" onClick={this.handleDecrement}>v</button></li>
    );
  }
}

export default connect(null, mapDispatchToProps)(ListItem);
