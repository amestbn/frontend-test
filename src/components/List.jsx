import React, { Component } from 'react';
import { connect } from 'react-redux';
import ListItem from './ListItem';

const mapStateToProps = state => {
  return {
    items: state.items
  }
};

class List extends Component {
  render() {
    const { items } = this.props;
    return(
      <ul>
        {
          items.map(el => {
            return <ListItem key={el.id} {...el}></ListItem>
          })
        }
      </ul>
    );
  }
}

export default connect(mapStateToProps)(List);
