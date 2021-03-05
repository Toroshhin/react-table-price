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
          {state.selectEducation[state.activeSelectEducation].project[state.activeSelectProject].tableHead.map(tableHeads => (
            <Table.HeaderCell > {tableHeads} </Table.HeaderCell>
          ))}
        </Table.Row>


        {state.selectEducation[state.activeSelectEducation].tableBody.map(tablePriceCall => (
          <Table.Row key={tablePriceCall.id}>
            <Table.Cell>{tablePriceCall.people}</Table.Cell>
            {state.selectEducation[state.activeSelectEducation].project[state.activeSelectProject].tableHead.map(tableHeads => (
              <Table.Cell><InputPrice keys={String(state.activeSelectEducation) + String(state.activeSelectProject) + String(tablePriceCall.id) + tableHeads.length} /></Table.Cell>
            ))}
          </Table.Row>
        ))}
      </Table.Body>
    );
  }
}


TableBody.propTypes = {

};


export default view(TableBody)
