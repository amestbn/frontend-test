import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ItemActions } from '../actions';
import { Field, Control, Input, Button, Icon } from 'bloomer';

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
      title: event.target.value
    });
  }
  handleSubmit (event) {
    event.preventDefault();
    const { title } = this.state;
    if(!title.trim().length) { return; }
    this.props.addItem({ title });
    this.setState({ title: '' });
  }
  render () {
    const { title } = this.state;

    return (
      <form onSubmit={this.handleSubmit} className="counter-form">
        <Field hasAddons={true}>
          <Control className="input-control">
            <Input type="text" value={title} placeholder="Add an item" onChange={this.handleChange} />
          </Control>
          <Control className="button-add-container">
            <Button isColor="primary" type="submit"><Icon isSize="small" className="fa fa-plus"></Icon></Button>
          </Control>
        </Field>
      </form>
    );
  }
}

export default connect(null, mapDispatchToProps)(CounterInput);