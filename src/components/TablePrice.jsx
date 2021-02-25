import React, { Component } from 'react';
import { Container, Table } from 'semantic-ui-react'
import state from '../store'
import { view } from '@risingstack/react-easy-state'
import InputPrice from "./InputPrice"
import DropDown from './DropDown'

class TablePrice extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <Container>
        <Table celled>
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
            <Table.Row>
              <Table.HeaderCell> </Table.HeaderCell>
              <Table.HeaderCell>Один модуль</Table.HeaderCell>
              <Table.HeaderCell>Два модуля</Table.HeaderCell>
              <Table.HeaderCell>Три модуля</Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            {state.tablePrice.map(tablePriceCall => (
              <Table.Row key={tablePriceCall.id}>
                <Table.Cell>{tablePriceCall.people}</Table.Cell>
                <Table.Cell><InputPrice keys={String(state.activeSelectEducation) + String(state.activeSelectProject) + tablePriceCall.id + '1'} /></Table.Cell>
                <Table.Cell><InputPrice keys={String(state.activeSelectEducation) + String(state.activeSelectProject) + tablePriceCall.id + '2 '} /></Table.Cell>
                <Table.Cell><InputPrice keys={String(state.activeSelectEducation) + String(state.activeSelectProject) + tablePriceCall.id + '3'} /></Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table>

      </Container >
    );
  }
}

export default view(TablePrice);
