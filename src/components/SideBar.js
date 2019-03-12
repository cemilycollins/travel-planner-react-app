import React from 'react'
import NewTripForm from './NewTripForm'

export default class SideBar extends React.Component {

  state = {
    AddTripClicked: false
  }

  render() {
    return (
      <div>
        <div className= "ui inverted vertical menu">
          <a class="active item" id="homeButton">Home</a>
        </div>
        <div class="ui blue button" onClick={() => this.setState({AddTripClicked: !this.state.AddTripClicked})}>
          {this.state.AddTripClicked ? "Close Trip Form" : "Add New Trip"}
        </div>
        {this.state.AddTripClicked ? <NewTripForm /> : null }
      </div>
    )
  }
}
