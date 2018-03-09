import React from 'react';
import Location from './Location';

const LocationList = ({ id, city, state, location }) => (
  <div className="row">
    { location.map( location =>
      <Location
        key={location.id}
        />
    )
  }
  <LocationList />
</div>
)

export default LocationList;
