import React, { Component } from 'react';
import { connect } from 'react-redux';

import { ItemActions } from '../actions';

import ListItem from './ListItem';

const mapStateToProps = state => {
  return {
    items: state.items,
    loading: state.loading,
    error: state.error
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
      return items.map((el, index) => {
        return <ListItem key={index} {...el}></ListItem>
      });
    }
  }
  render() {
    return(
      <ul>{ this.renderList() }</ul>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(List);
