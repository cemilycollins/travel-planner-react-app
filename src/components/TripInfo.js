import React from 'react'

export default class TripInfo extends React.Component {

  state = {
    editClicked: false,
    deleteClicked: false
  }

  render() {
    const trip = this.props.trip
    console.log(trip)
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
            <img className="location_img" src={trip.img_url} />
          </div>
        </div>
        {this.state.editClicked ? null : null}
        <div className="ui two buttons">
          <div className="ui basic blue button">Edit</div>
          <div className="ui basic red button">Delete</div>
        </div>
      </div>
    )
  }
}
