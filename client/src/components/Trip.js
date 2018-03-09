import React from 'react';

const Trip = ({ id, day, month, year, updateTrip, deleteTrip, addLocation }) => (
  <div className="col s12">
  {id}-{day}-{month}-{year}
  <button onClick={() => addLocation(id)}>Add Location</button>
  <button onClick={() => updateTrip(id)}>Edit Trip</button>
  <button onClick={() => deleteTrip(id)}>Delete Location</button>
  </div>
)

export default Trip;
