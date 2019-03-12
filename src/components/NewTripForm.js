import React from 'react';

export default class NewTripForm extends React.Component {
  render() {
    return (
      <div>
        <form class="ui form">
          <h4 class="ui dividing header">Create A New Trip</h4>
          <div class="field">
            <label>Name *</label>
            <div class="field">
              <input type="text" placeholder="Trip Name"/>
            </div>
            <label>Start Date *</label>
            <div class="field">
              <input type="text" placeholder="MM/DD/YYYY"/>
            </div>
            <label>End Date *</label>
            <div class="field">
              <input type="text" placeholder="MM/DD/YYYY"/>
            </div>
            <label>Image URL *</label>
            <div class="field">
              <input type="text" placeholder="Image URL"/>
            </div>
            <div class="ui button" tabindex="0">Create Trip</div>
          </div>
        </form>
      </div>
    )
  }
}
