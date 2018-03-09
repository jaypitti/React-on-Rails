import React from 'react';
import Trip from './Trip';
import LocationList from './LocationList';

const TripList = ({ trips, updateTrip, deleteTrip, addLocation }) => (
  <div className="row">
    { trips.map( trip =>
      <Trip
        key={trip.id}
        {...trip}
        updateTrip={updateTrip}
        deleteTrip={deleteTrip}
        addLocation={addLocation}
        />
    )
  }
    <LocationList />
</div>
)

export default TripList;
