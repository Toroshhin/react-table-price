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
    const { keys } = this.props;
  } 

  onStorage = () => (
    localStorage.setItem(this.props.keys, this.state.value)
  )

  render() {
    return (
      <>
        <Input
          onСhange={(e) => { this.setState({ value: e.currentTarget.value }) }}
          onBlur={() => {this.onStorage(); this.setState({ active: true })}}
          onDoubleClick={() => { this.setState({ active: false }) }}
          transparent
          disabled={this.state.active}
          key={this.props.keys}
          defaultValue={localStorage.getItem(this.props.keys)} />
      </>

    );
  }
}


InputPrice.propTypes = {
  value: PropTypes.number,
  key: PropTypes.number
};


export default InputPrice;
