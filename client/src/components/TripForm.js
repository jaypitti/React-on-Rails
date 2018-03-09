import React from 'react';

class TripForm extends React.Component {
  state = { day: '', month: '', year: ''}

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addTrip(this.state.day,this.state.month,this.state.year );
    this.setState({ day: '', month: '', year: ''})
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
      <input
      placeholder="Day"
      required
      name="day"
      value={this.state.day}
      onChange={this.handleChange}
      />
      <input
      placeholder="Month"
      name="month"
      required
      value={this.state.month}
      onChange={this.handleChange}
      />
      <input
      placeholder="Year"
      name="year"
      required
      value={this.state.year}
      onChange={this.handleChange}
      />
      <button type="submit">Submit</button>
      </form>
    )
  }
}

export default TripForm;
