import React from 'react';
import { Table, Loader, Button, Message } from 'semantic-ui-react';
import PropTypes from 'prop-types';

const ApiaryTable = ({ apiaries, isLoading, error, reload, add, detail, edit }) => (
  <div>
    <Table attached={error ? 'top' : false}>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>Name</Table.HeaderCell>
          <Table.HeaderCell>Address</Table.HeaderCell>
          <Table.HeaderCell>Coords</Table.HeaderCell>
          <Table.HeaderCell style={{textAlign: 'right'}}>
            <Button icon="refresh" onClick={reload} disabled={isLoading} size="mini" />
            <Button icon="add" onClick={add} disabled={isLoading} size="mini" />
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
            <Table.Cell>
              <a style={{cursor: 'pointer'}} onClick={() => detail(apiary.id)} data-apiary-id={apiary.id}>{apiary.name}</a>
            </Table.Cell>
            <Table.Cell>{apiary.address}</Table.Cell>
            <Table.Cell>{apiary.latitude} {apiary.longitude}</Table.Cell>
            <Table.Cell style={{textAlign: 'right'}}>
              <Button onClick={() => edit(apiary.id)} icon="edit" size="mini" apiaryid={apiary.id} />
            </Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table>
    {error ? <Message error attached="bottom">
      <Message.Header>Loading failed</Message.Header>
      <p>{error.message}</p>
    </Message> : null}
  </div>
)

ApiaryTable.propTypes = {
  apiaries: PropTypes.array.isRequired,
  isLoading: PropTypes.bool.isRequired,
  reload: PropTypes.func.isRequired,
  add: PropTypes.func.isRequired,
  detail: PropTypes.func.isRequired,
  edit: PropTypes.func.isRequired,
  error: PropTypes.object
};

export default ApiaryTable;