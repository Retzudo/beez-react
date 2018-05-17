import React from 'react';
import PropTypes from 'prop-types';
import { Header, Divider } from 'semantic-ui-react';
import { Map, Marker, TileLayer, Circle, Tooltip } from 'react-leaflet';

import HiveTable from '../hives/HiveTable';

const ApiaryDetails = ({ apiary }) => (
  <div>
    <Header content={apiary.name} />

    <Header sub content="Hives" />
    <HiveTable />

    <Divider />

    <Header sub content="Details" />

    {apiary.latitude && apiary.longitude ? <Map center={[apiary.latitude, apiary.longitude]} zoom={13} style={{height: '400px'}}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors" />
      <Marker position={[apiary.latitude, apiary.longitude]}>
        <Tooltip>
          <span>{apiary.name}</span>
        </Tooltip>
      </Marker>
      <Circle center={[apiary.latitude, apiary.longitude]} radius={apiary.radius * 1000} color="green" fillColor="green" opacity={0.2} />
    </Map> : null}
  </div>
)

ApiaryDetails.propTypes = {
  apiary: PropTypes.object.isRequired
}

export default ApiaryDetails;