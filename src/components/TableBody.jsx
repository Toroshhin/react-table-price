import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Table } from 'semantic-ui-react'
import state from '../store'
import { view } from '@risingstack/react-easy-state'
import InputPrice from "./InputPrice"



class TableBody extends Component {
  render() {
    return (
      <Table.Body>
        <Table.Row>
          <Table.HeaderCell> </Table.HeaderCell>
          <Table.HeaderCell>Один модуль</Table.HeaderCell>
          <Table.HeaderCell>Два модуля</Table.HeaderCell>
          <Table.HeaderCell>Три модуля</Table.HeaderCell>
        </Table.Row>
        {state.tablePrice.map(tablePriceCall => (
          <Table.Row key={tablePriceCall.id}>
            <Table.Cell>{tablePriceCall.people}</Table.Cell>
            <Table.Cell><InputPrice keys={String(state.activeSelectEducation) + String(state.activeSelectProject) + tablePriceCall.id + '1'} /></Table.Cell>
            <Table.Cell><InputPrice keys={String(state.activeSelectEducation) + String(state.activeSelectProject) + tablePriceCall.id + '2 '} /></Table.Cell>
            <Table.Cell><InputPrice keys={String(state.activeSelectEducation) + String(state.activeSelectProject) + tablePriceCall.id + '3'} /></Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    );
  }
}


TableBody.propTypes = {

};


export default view(TableBody)
