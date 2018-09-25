import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Control, Field, Icon, PanelBlock } from 'bloomer';

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
    this.props.removeItem(this.props.id);
  }
  handleIncrement() {
    this.props.increment(this.props.id);
  }
  handleDecrement() {
    if(this.props.count > 0 ) {
      this.props.decrement(this.props.id);
    }
  }
  render() {
    const { count, title } = this.props;
    return(
      <PanelBlock>
          <div className="level list-item">
            <div className="title-container">
              <div className="remove-button-container">
                <Button isSize="small" isColor="danger" type="button" className="is-round" onClick={this.handleRemove}>
                  <Icon className="fa fa-times" />
                </Button>
              </div>
              <div className="title">
                { title }
              </div>
            </div>
            <div className="iterator-control-container">
              <div className="level-item">
                <Field hasAddons={true} className="iterator-control">
                  <Control className="down">
                    <Button onClick={this.handleDecrement} isColor="dark">
                      <Icon className="fas fa-angle-down" />
                    </Button>
                  </Control>
                  <Control className="count">
                    <span>{ count }</span>
                  </Control>
                  <Control className="up">
                    <Button onClick={this.handleIncrement} isColor="dark">
                      <Icon className="fas fa-angle-up" />
                    </Button>
                  </Control>
                </Field>
              </div>
            </div>
          </div>
      </PanelBlock>
    );
  }
}

export default connect(null, mapDispatchToProps)(ListItem);
