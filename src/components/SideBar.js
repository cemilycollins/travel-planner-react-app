import React from 'react'
import NewTripForm from './NewTripForm'

export default class SideBar extends React.Component {

  state = {
    AddTripClicked: false
  }

  showHideForm = () => {
    this.setState({AddTripClicked: !this.state.AddTripClicked})
  }

  render() {
    return (
      <div>
        <div className= "ui inverted vertical menu">
          <div className="active item"
            onClick={() => this.props.changeTripId(null)}>
            Home
          </div>
          {this.props.trips ?
            this.props.trips.map(t => <div
              className="active item"
              onClick={() => this.props.changeTripId(t._id)}>
              {t.name}
            </div>)
          : null}
        </div>
        <div className="ui blue button" onClick={this.showHideForm}>
          {this.state.AddTripClicked ? "Close Trip Form" : "Add New Trip"}
        </div>
        {this.state.AddTripClicked ? <NewTripForm
          changeTripId={this.props.changeTripId}
          showHideForm={this.showHideForm}
          addTrip={this.props.addTrip}/> : null }
      </div>
    )
  }
}
