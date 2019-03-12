import React, { Component } from 'react';
import { ROOT_URL } from './Config'
import SideBar from './components/SideBar'

class App extends Component {
  state = {
    trips: null,
    trip_id: null
  }

  componentDidMount() {
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
            this.setState({trips: json, trip_id: json[1].trip_id})
          }
      })
  }

  changeTripId(id) {
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
              changeTripId={this.changeTripId}/>
          </div>
          <div className="twelve wide column">
          </div>
        </div>
      </div>
    );
  }
}

export default App;
