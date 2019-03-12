import React from 'react'
import { ROOT_URL } from '../Config'

export default class EditTripForm extends React.Component {

  state = {
    start_date: this.props.trip.start_date,
    end_date: this.props.trip.end_date,
    name: this.props.trip.name,
    img_url: this.props.trip.img_url
  }

  changeHandler = (val, key) => {
    this.setState({
      [key]: val
    })
  }

  editTrip = () => {
    fetch(ROOT_URL + `/${this.props.trip._id}`, {
      method: "PUT",
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
      this.props.editTrip(json)
      this.props.toggleEditForm()
    })
    .catch(err => console.error(err))
  }

  render() {
    return (
      <div id="edit-trip-form"><form className="ui form">
         <h4 className="ui dividing header">Edit Trip</h4>
         <div className="field">
           <label>Name *</label>
           <div className="field">
             <input onChange={(e)=>this.changeHandler(e.target.value,'name')}
              type="text"
              placeholder="Trip Name"
              value={this.state.name}/>
           </div>
           <label>Start Date *</label>
           <div className="field">
             <input onChange={(e)=>this.changeHandler(e.target.value,'start_date')}
              type="text"
              placeholder="MM/DD/YYYY"
              value={this.state.start_date}/>
           </div>
           <label>End Date *</label>
           <div className="field">
             <input onChange={(e)=>this.changeHandler(e.target.value,'end_date')}
              type="text"
              placeholder="MM/DD/YYYY"
              value={this.state.end_date}/>
           </div>
           <label>Image URL *</label>
           <div className="field">
             <input onChange={(e)=>this.changeHandler(e.target.value,'img_url')}
              type="text"
              placeholder="Image URL"
              value={this.state.img_url}/>
           </div>
           <div
            className="ui button"
            onClick={this.editTrip}>Edit Trip</div>
          </div>
        </form>
      </div>
    )
  }
}
