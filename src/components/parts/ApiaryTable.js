import React from 'react';
import { Table, Loader, Button } from 'semantic-ui-react';
import PropTypes from 'prop-types';

const ApiaryTable = ({ apiaries, isLoading, reload }) => (
  <Table>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell>Name</Table.HeaderCell>
        <Table.HeaderCell>Address</Table.HeaderCell>
        <Table.HeaderCell>Coords</Table.HeaderCell>
        <Table.HeaderCell style={{textAlign: 'right'}}>
          <Button icon="refresh" onClick={reload}></Button>
        </Table.HeaderCell>
      </Table.Row>
    </Table.Header>

    <Table.Body>
      {isLoading ? <Table.Row>
        <Table.Cell colSpan={4}>
          <Loader active inline="centered" />
        </Table.Cell>
      </Table.Row> : apiaries.map(apiary => (
        <Table.Row key={apiary.id}>
          <Table.Cell>{apiary.name}</Table.Cell>
          <Table.Cell>{apiary.address}</Table.Cell>
          <Table.Cell>{apiary.latitude} {apiary.longitude}</Table.Cell>
          <Table.Cell>edit</Table.Cell>
        </Table.Row>
      ))}
    </Table.Body>
  </Table>
)

ApiaryTable.propTypes = {
  apiaries: PropTypes.array.isRequired,
  isLoading: PropTypes.bool.isRequired,
  reload: PropTypes.func.isRequired
};

export default ApiaryTable;