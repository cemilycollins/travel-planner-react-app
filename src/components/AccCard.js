import React from 'react'
import { ROOT_URL } from '../Config'

export default class AccCard extends React.Component {

  deleteAcc = (id) => {
    fetch(ROOT_URL + `/accommodations/${id}`, {
      method: "DELETE"
    })
    .then(response => response.json())
    .then(json => {
      this.props.delete(json._id)
    })
    .catch(err => console.error(err))
  }

  render() {
    const acc = this.props.acc
    return(
      <div className="card">
        <div className="content">
          <div className="header">{acc.city}</div>
          <div className="meta">{acc.start_date} - {acc.end_date}</div>
          <div className="description">
            <b>Address: {acc.address}</b>
            <p>{acc.relevant_info}</p>
          </div>
        </div>
        <div className="extra content">
          <div className="ui two buttons">
            <div className="ui basic blue button"
              onClick={() => this.props.toggleEditForm(acc)}>
              Edit
            </div>
            <div className="ui basic red button"
              onClick={() => this.deleteAcc(acc._id)}>Delete</div>
          </div>
        </div>
      </div>
    )
  }
}
