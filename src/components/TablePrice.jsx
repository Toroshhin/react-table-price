import React, { Component } from 'react';
import { Container, Table, Input } from 'semantic-ui-react'
import state from '../store'
import { view } from '@risingstack/react-easy-state'
import InputPrice from "./InputPrice"

class TablePrice extends Component {
  render() {
    return (
      <Container>
        <Table celled>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Период участия в проекте</Table.HeaderCell>
              <Table.HeaderCell>Общая численность студентов,обучающихся в ОО</Table.HeaderCell>
              <Table.HeaderCell>Стоимость (руб.)</Table.HeaderCell>
            </Table.Row>
            <Table.Row>
              <Table.HeaderCell colSpan={3} textAlign='center'>Name</Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            <Table.Row>
              <Table.Cell rowSpan={7}>Общая клетка</Table.Cell>
            </Table.Row>
            {state.tablePrice.map(tablePriceCall => (
              <Table.Row key={tablePriceCall.id}>
                <Table.Cell>{tablePriceCall.people}</Table.Cell>
                <Table.Cell><InputPrice keys={tablePriceCall.id} /></Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table>

      </Container >
    );
  }
}

export default view(TablePrice);
