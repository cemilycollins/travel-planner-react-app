import React, { Component } from 'react';
import { ROOT_URL } from './Config'
import SideBar from './components/SideBar'
import HomePage from './components/HomePage'
import TripInfo from './components/TripInfo'
import AccommodationInfo from './components/AccommodationInfo'

class App extends Component {
  state = {
    trips: null,
    trip_id: null
  }

  componentDidMount() {
    if (this.state.trips === null) {
      fetch(ROOT_URL, {
        method: "GET",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json"
        }
      })
        .then(res => res.json())
        .then(json => {
            if (json.length > 0) {
              this.setState({
                trips: json})
            }
        })
    }
  }

  addTrip = (trip) => {
    if (this.state.trips) {
      this.setState({trips: [...this.state.trips, trip]})
    }
  }
  editTrip = (newTrip) => {
    let tripsArray = this.state.trips.map(t => {
      if (t._id === newTrip._id) {
        return newTrip
      }
      return t
    })
    this.setState({trips: tripsArray})
  }

  deleteTrip = (id) => {
    let trips = this.state.trips.filter(t => t._id !== id)
    this.setState({trips: trips})
  }

  findTrip = (id) => {
    return this.state.trips.filter(t => t._id === id)
  }

  changeTripId = (id) => {
    this.setState({trip_id: id})
  }

  render() {

    return (
      <div>
        <div className="top-header">
          <h1 className="header-text">Travel Planner</h1>
        </div>
        <div className="ui grid">
          <div className="four wide column">
            <SideBar
              trips={this.state.trips}
              trip_id={this.state.trip_id}
              changeTripId={this.changeTripId}
              addTrip={this.addTrip}/>
          </div>
          <div className="twelve wide column">
            {!this.state.trip_id ? <HomePage /> : null }
            {this.state.trip_id && this.state.trips.length > 0 ? <div>
              <TripInfo
                trip={this.findTrip(this.state.trip_id)[0]}
                editTrip={this.editTrip}
                deleteTrip={this.deleteTrip}
                changeTripId={this.changeTripId}/>
            </div> : null}
            {this.state.trip_id && this.state.trips.length > 0 ? <div>
              <AccommodationInfo
                trip_id={this.state.trip_id}/>
            </div> : null}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
