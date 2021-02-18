import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Input } from 'semantic-ui-react'


class InputPrice extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: true,
      value: '1'
    };

  }

  render() {
    const { keys } = this.props;
    const onStorage = () => {
      localStorage.setItem(keys, this.state.value)
    }
    return (
      <>
        <Input
          onchange={(e) => { this.setState({ value: e.currentTarget.value }) }}
          onBlur={() => { onStorage(); this.setState({ active: true }) }}
          onDoubleClick={() => { this.setState({ active: false }) }}
          transparent
          disabled={this.state.active}
          key={keys}
          defaultValue={localStorage.getItem(keys)} />
      </>

    );
  }
}


InputPrice.propTypes = {
  value: PropTypes.number,
  key: PropTypes.number
};


export default InputPrice;
