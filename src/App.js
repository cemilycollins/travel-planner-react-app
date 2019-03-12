import React, { Component } from 'react';
import { ROOT_URL } from './Config'
import SideBar from './components/SideBar'
import HomePage from './components/HomePage'
import TripInfo from './components/TripInfo'

class App extends Component {
  state = {
    trips: null,
    trip_id: null
  }

  componentDidMount() {
    if (!this.state.trips) {
      fetch(ROOT_URL, {
        method: "GET",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json"
        }
      })
        .then(res => res.json())
        .then(json => {
            console.log(json)
            if (json.length > 0) {
              this.setState({
                trips: json,
                trip_id: json[0]._id})
            }
        })
    }
  }

  addTrip = (trip) => {
    if (this.state.trips) {
      this.setState({trips: [...this.state.trips, trip]})
    }
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
            {!this.state.trip_id ? <HomePage /> : <div>
              <TripInfo trip={this.findTrip(this.state.trip_id)[0]}/>
            </div>}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
