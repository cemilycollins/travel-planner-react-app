import React from 'react'
import { ROOT_URL } from './Config'
import EditAccommodationForm from './components/EditAccommodationForm'
import AccCard from './components/AccCard'
import NewAccForm from './components/NewAccForm'

export default class AccInfo extends React.Component {

  state = {
    editFormData: null,
    newFormClicked: false,
    accommodations: null,
    trip_id: this.props.trip_id
  }

  toggleEditForm = (data) => {
    this.setState({editFormData: data})
  }

  toggleNewForm = () => {
    this.setState({newFormClicked: !this.state.newFormClicked})
  }

  delete = (id) => {
    let newArray = this.state.accommodations.filter(a => a._id !== id)
    this.setState({ accommodations: newArray })
  }

  edit = (json) => {
    let newArray = this.state.accommodations.map(a => {
      if (a._id === json._id) {
        return json
      }
      return a
    })
    this.setState({ accommodations: newArray })
  }

  add = (json) => {
    if (this.state.accommodations) {
      this.setState({ accommodations: [...this.state.accommodations, json] })
    } else {
      this.setState({ accommodations: [json]})
    }

  }

  componentDidMount() {
    fetch(ROOT_URL + `/accommodations/${this.props.trip_id}`, {
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
              accommodations: json})
          }
      }).catch(err => console.error(err))
  }

  componentDidUpdate() {
    if (this.state.trip_id !== this.props.trip_id) {
      fetch(ROOT_URL + `/accommodations/${this.props.trip_id}`, {
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
                accommodations: json,
                trip_id: this.props.trip_id
              })
            } else {
              this.setState({
                accommodations: null,
                trip_id: this.props.trip_id
              })
            }
        }).catch(err => console.error(err))
    }
  }

  render() {
    return(
      <div className="ui segment">
        <div className="ui top attached label">Accommodations</div>
        {this.state.editFormData ? <EditAccommodationForm
          acc={this.state.editFormData}
          edit={this.edit}
          toggleEditForm={this.toggleEditForm}
          trip_id={this.props.trip_id}/> : null}
        <div className="ui blue button"
          onClick={this.toggleNewForm}>
          {this.state.newFormClicked ? "Close Form" : "Add New"}
        </div>
          {this.state.newFormClicked ? <NewAccForm
            add={this.add}
            toggleNewForm={this.toggleNewForm}
            trip_id={this.props.trip_id}/> : null}
        {this.state.accommodations ?
        <div className="ui cards">
          {this.state.accommodations.map(a => {
            return <AccCard
              acc={a}
              toggleEditForm={this.toggleEditForm}
              delete={this.delete}
              trip_id={this.props.trip_id}/>
          })}
        </div> : <h2>No Accommodations Yet!</h2> }
      </div>
    )
  }
}
