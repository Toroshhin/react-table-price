import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Input } from 'semantic-ui-react'


class InputPrice extends Component {
  render() {
    const { value, keys } = this.props;
    return (
      <>
        <Input key={keys} defaultValue={value} />
      </>
    );
  }
}


InputPrice.propTypes = {
  value: PropTypes.number,
  key: PropTypes.number
};


export default InputPrice;
