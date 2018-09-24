import React, { Component } from 'react';
import { connect } from 'react-redux';

const mapStateToProps = state => {
  return {
    total: state.items.length
  }
};

class Footer extends Component {
  render() {
    const { total } = this.props;
    return(
      <div>
        Total: { total }
      </div>
    );
  }
}

export default connect(mapStateToProps)(Footer);
