import React from 'react'
import EditTripForm from './EditTripForm'
import { ROOT_URL } from '../Config'

export default class TripInfo extends React.Component {

  state = {
    editClicked: false,
    deleteClicked: false
  }

  toggleEditForm = () => {
    this.setState({editClicked: !this.state.editClicked})
  }

  deleteTrip = () => {
    fetch(ROOT_URL + `/${this.props.trip._id}`, {
      method: "DELETE"
    })
    .then(response => response.json())
    .then(json => {
      this.props.changeTripId(null)
      this.props.deleteTrip(json._id)
    })
    .catch(err => console.error(err))
  }

  render() {
    const trip = this.props.trip
    return(
      <div className="ui segment">
        <div className="ui top attached label">Trip Information</div>
        <div className="ui grid">
          <div className="four wide column">
            <b>Trip Name:</b><p>{trip.name}</p>
            <b>Start Date:</b><p>{trip.start_date}</p>
            <b>End Date:</b><p>{trip.end_date}</p>
          </div>
          <div className="ten wide column">
            <img className="location_img" src={trip.img_url} alt=" - "/>
          </div>
        </div>
          {this.state.editClicked ? <EditTripForm
            trip={trip}
            toggleEditForm={this.toggleEditForm}
            editTrip={this.props.editTrip}/> : null}
        <div className="ui two buttons">
          <div
            className="ui basic blue button"
            onClick={this.toggleEditForm}>
              {this.state.editClicked ? "Close Form" : "Edit"}
          </div>
          <div
            className="ui basic red button"
            onClick={this.deleteTrip}>Delete</div>
        </div>
      </div>
    )
  }
}
