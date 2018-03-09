import React from 'react';

const Location = ({ id, city, state, location}) => (
  <div className="col s12">
  {city}-{state}
  </div>
)

export default Location;
