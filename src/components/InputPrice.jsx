import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Input } from 'semantic-ui-react'


class InputPrice extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: true,
      value: ''
    }
    const { keys } = this.props
    this.textInput = React.createRef()
    this.focusTextInput = this.focusTextInput.bind(this)
    this.handleKeyPress = this.handleKeyPress.bind(this)
  }

  onStorage = () => {
    localStorage.setItem(this.props.keys, this.state.value)
  }


  handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      this.onStorage();
    }
  }

  componentDidUpdate() {
    if (this.state.active == false) {
      this.textInput.current.focus()
    }
  }




  focusTextInput() {

    this.setState({ active: false })
  }

  render() {
    return (
      <div onClick={this.focusTextInput}>
        <Input
          style={{
            cursor: 'pointer'
          }}
          type={'number'}
          onChange={(e) => { this.setState({ value: e.currentTarget.value }); this.onStorage(); }}
          onKeyPress={this.handleKeyPress}
          onBlur={() => { this.onStorage(); this.setState({ active: true }) }}
          transparent
          disabled={this.state.active}
          ref={this.textInput}
          key={this.props.keys}
          defaultValue={localStorage.getItem(this.props.keys)} />
      </div >

    );
  }
}


InputPrice.propTypes = {
  value: PropTypes.number,
  key: PropTypes.number
};


export default InputPrice;
