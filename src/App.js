import { React, Component } from 'react'
import { Container, Table } from 'semantic-ui-react'
import { view } from '@risingstack/react-easy-state'
import 'semantic-ui-css/semantic.min.css'
import TableBody from './components/TableBody'
import TableHead from './components/TableHead'
import state from './store'

class App extends Component {
  render() {
    return (
      <Container>
        <Table celled>
          <TableHead />
          {state.onChangeSelect == true ? <TableBody /> : ''}
        </Table>
      </Container>
    )
  }
}

export default view(App)
