import React, { Component } from 'react';
import { connect } from 'react-redux';

const mapStateToProps = state => {
  return {
    total: state.items.reduce((accumulator, value) => accumulator + value.count, 0)
  }
};

class Footer extends Component {
  render() {
    const { total } = this.props;
    return(
      <div className="total">
        <span>Total:</span>
        <span>{ total }</span>
      </div>
    );
  }
}

export default connect(mapStateToProps)(Footer);
