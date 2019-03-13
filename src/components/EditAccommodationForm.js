import React from 'react'
import { ROOT_URL } from '../Config'

export default class EditAccommodationForm extends React.Component {

  state = {
    start_date: this.props.acc.start_date,
    end_date: this.props.acc.end_date,
    city: this.props.acc.city,
    address: this.props.acc.address,
    relevant_info: this.props.acc.relevant_info
  }

  changeHandler = (val, key) => {
    this.setState({
      [key]: val
    })
  }

  editAcc = (id) => {
    fetch(ROOT_URL + `/accommodations/${id}`, {
      method: "PUT",
      body: JSON.stringify({
        start_date: this.state.start_date,
        end_date: this.state.end_date,
        city: this.state.city,
        address: this.state.address,
        relevant_info: this.state.relevant_info,
        trip_id: this.props.trip_id
      }),
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      }
    })
    .then(response => response.json())
    .then(json => {
      this.props.edit(json)
      this.props.toggleEditForm(null)
    })
    .catch(err => console.error(err))
  }

  render() {
    return (
      <div>
        <form className="ui form">
         <h4 className="ui dividing header">Edit Accommodation</h4>
         <div className="field">
           <label>City *</label>
           <div className="field">
             <input onChange={(e)=>this.changeHandler(e.target.value,'city')}
              type="text"
              placeholder="City"
              value={this.state.city}/>
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
           <label>Address *</label>
           <div className="field">
             <input onChange={(e)=>this.changeHandler(e.target.value,'address')}
              type="text"
              placeholder="Address"
              value={this.state.address}/>
           </div>
           <label>Relevant Info</label>
           <div className="field">
             <input onChange={(e)=>this.changeHandler(e.target.value,'relevant_info')}
              type="text"
              placeholder="Any Additional Details"
              value={this.state.relevant_info}/>
           </div>
           <div
            className="ui button"
            onClick={() => this.editAcc(this.props.acc._id)}>Edit Accommodation</div>
          </div>
        </form>
      </div>
    )
  }
}
