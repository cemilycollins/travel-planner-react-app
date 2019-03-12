import React from 'react';
import { ROOT_URL } from '../Config'

export default class NewTripForm extends React.Component {

  state = {
    start_date: null,
    end_date: null,
    name: null,
    img_url: null
  }

  changeHandler = (val, key) => {
    this.setState({
      [key]: val
    })
  }

  createNewTrip = () => {
    fetch(ROOT_URL, {
      method: "POST",
      body: JSON.stringify({
        start_date: this.state.start_date,
        end_date: this.state.end_date,
        name: this.state.name,
        img_url: this.state.img_url
      }),
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      }
    })
    .then(response => response.json())
    .then(json => {
      this.props.changeTripId(json._id)
      this.props.showHideForm()
      this.props.addTrip(json)
    })
    .catch(err => console.error(err))
}
  render() {
    return (
      <div>
        <form className="ui form">
          <h4 className="ui dividing header">Create A New Trip</h4>
          <div className="field">
            <label>Name *</label>
            <div className="field">
              <input onChange={(e)=>this.changeHandler(e.target.value,'name')}
                type="text"
                placeholder="Trip Name"/>
            </div>
            <label>Start Date *</label>
            <div className="field">
              <input onChange={(e)=>this.changeHandler(e.target.value,'start_date')}
                type="text"
                placeholder="MM/DD/YYYY"/>
            </div>
            <label>End Date *</label>
            <div className="field">
              <input onChange={(e)=>this.changeHandler(e.target.value,'end_date')}
                type="text"
                placeholder="MM/DD/YYYY"/>
            </div>
            <label>Image URL *</label>
            <div className="field">
              <input onChange={(e)=>this.changeHandler(e.target.value,'img_url')}
                type="text"
                placeholder="Image URL"/>
            </div>
            <div className="ui button" tabindex="0" onClick= {this.createNewTrip}>
              Create Trip
            </div>
          </div>
        </form>
      </div>
    )
  }
}
