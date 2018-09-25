import React, { Component } from 'react';
import { connect } from 'react-redux';

import { ItemActions } from '../actions';

import ListItem from './ListItem';

const mapStateToProps = state => {
  return {
    items: state.items
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getItems: () => dispatch(ItemActions.getItems())
  };
};

class List extends Component {
  componentDidMount() {
    this.props.getItems();
  }
  renderList() {
    const { loading, items } = this.props;
    if(loading) {
      return <li>Loading...</li>
    } else {
      return items.map(el => {
        return <ListItem key={el.id} {...el}></ListItem>
      });
    }
  }
  render() {
    return this.renderList();
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(List);
