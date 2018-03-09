import React from 'react';

class TripForm extends React.Component {
  state = { city: '', state: '' }

  handleState = (e) => {
    this.setState({ state: e.target.value });
  }
  handleCity = (e) => {
    this.setState({ city: e.target.value });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addLocation(this.state.city, this.state.state);
    this.setState({ city: '', state ''})
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          placeholder="City"
          required
          value={this.state.city}
          onChange={this.handleCity}
        />
        <input
          placeholder="State"
          required
          value={this.state.state}
          onChange={this.handleState}
        />
      </form>
    )
  }
}

export default TodoForm;
