import React, { Component } from 'react';
import TripForm from './components/TripForm';
import TripList from './components/TripList';

class App extends Component {
  state = { trips: [], locations: [], address: []}

  componentDidMount() {
    fetch('/api/trips')
    .then( res => res.json() )
    .then( trips => this.setState({ trips }))

    fetch('/api/locations')
    .then( res => res.json() )
    .then( locations => this.setState({ locations }))
  }

  addTrip = (day, month, year) => {
    let trip = { day, month, year };
    fetch('/api/trips', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(trip)
    }).then( res => res.json() )
    .then( todo => {
      const { trips } = this.state;
      this.setState({ trips: [...trips, trip] });
    })
  }
  addLocation = (city, state) => {
    let location = { city, state };
    fetch('/api/locations', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(location)
    }).then( res => res.json() )
    .then( location => {
      const { locations } = this.state;
      this.setState({ locations: [...locations, location] });
    })
  }

  updateTrip = (id) => {
    fetch(`/api/trips/${id}`, { method: 'PUT' })
    .then( res => res.json() )
    .then( trip => {
      let trips = this.state.trips.map( t => {
        if (t.id === id)
        return trip
        return t;
      });

      this.setState({ trips });
    })
  }

  deleteTrip = (id) => {
    fetch(`/api/trips/${id}`, { method: 'DELETE' })
    .then( () => {
      const { trips } = this.state;
      this.setState({ trips: trips.filter( t => t.id !== id ) })
    })
  }

  render() {
    return (
      <div className="container">
        <TripForm addTrip={this.addTrip} />
        <TripList
          trips={this.state.trips}
          loactions={this.state.location}
          addLocation={this.addLocation}
          updateTrip={this.updateTrip}
          deleteTrip={this.deleteTrip}
          />
      </div>
    );
  }
}

export default App;
