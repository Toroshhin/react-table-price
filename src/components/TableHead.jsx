import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Table } from 'semantic-ui-react'
import state from '../store'
import { view } from '@risingstack/react-easy-state'
import DropDown from './DropDown'

class TableHead extends Component {
  render() {
    return (
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell >Уровень образования:</Table.HeaderCell>
          <Table.HeaderCell colSpan={3}>
            <DropDown values={state.selectEducation} />
          </Table.HeaderCell>
        </Table.Row>
        <Table.Row>
          <Table.HeaderCell>Проект:</Table.HeaderCell>
          <Table.HeaderCell colSpan={3}><DropDown values={state.selectEducation[state.activeSelectEducation].project} /></Table.HeaderCell>
        </Table.Row>
      </Table.Header>
    );
  }
}


TableHead.propTypes = {

};


export default view(TableHead)
