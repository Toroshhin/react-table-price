import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Dropdown } from 'semantic-ui-react';
import state from '../store'


class DropDown extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeValue: 0
    };
    const { values } = this.props;
    this.handleChange = this.handleChange.bind(this);
    this.activeChange = this.activeChange.bind(this);
  }

  handleChange(event, value) {
    this.setState({ activeValue: value });
  }

  activeChange() {
    const lengthEducation = state.selectEducation.length;
    for (let i = 0; i < lengthEducation; i++) {
      if (state.selectEducation[i].value == this.state.activeValue.value) {
        state.activeSelectEducation = state.selectEducation[i].key - 1;
      }
    }
    const lengthProject = state.selectEducation[state.activeSelectEducation].project.length
    for (let i = 0; i < lengthProject; i++) {
      if (state.selectEducation[state.activeSelectEducation].project[i].value == this.state.activeValue.value) {
        state.activeSelectProject = state.selectEducation[state.activeSelectEducation].project[i].key - 1;
      }
    }
  }
  render() {
    return (
      <>
        <Dropdown
          closeOnChange={true}
          onChange={this.handleChange}
          onBlur={this.activeChange}
          placeholder='Select'
          fluid
          options={this.props.values} />
      </>
    );
  }
}


DropDown.propTypes = {

};


export default DropDown;
