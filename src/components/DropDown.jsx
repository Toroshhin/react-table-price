import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Dropdown } from 'semantic-ui-react';
import state from '../store'


class DropDown extends Component {
  constructor(props) {
    super(props);
    const { values } = this.props;
  }

  handleChange(event, activeValue) {

    const lengthEducation = state.selectEducation.length;
    for (let i = 0; i < lengthEducation; i++) {
      if (state.selectEducation[i].value == activeValue.value) {
        state.activeSelectEducation = state.selectEducation[i].key - 1
        state.onChangeSelect = false
      }
    }

    const lengthProject = state.selectEducation[state.activeSelectEducation].project.length
    for (let i = 0; i < lengthProject; i++) {
      if (state.selectEducation[state.activeSelectEducation].project[i].value == activeValue.value) {
        state.activeSelectProject = state.selectEducation[state.activeSelectEducation].project[i].key - 1
        state.onChangeSelect = true
      }
    }
  }

  render() {
    return (
      <>
        <Dropdown
          closeOnChange={true}
          onChange={this.handleChange}
          placeholder='Не выбрано'
          fluid
          options={this.props.values} />
      </>
    );
  }
}


DropDown.propTypes = {
  values: PropTypes.object,
};


export default DropDown;
