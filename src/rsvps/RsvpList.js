import React, { PureComponent } from 'react'
import RsvpItem from './RsvpItem'
import { connect } from 'react-redux'
import Loader from '../components/loader'

export class RsvpList extends PureComponent {

  render() {
      return (
      <div className="rsvp-container">
          <h1>RSVP List </h1>
          <Loader />
          <div className="rsvp_list">
          { this.props.rsvps.length > 1 ? this.props.rsvps.map((rsvp, index) => <RsvpItem rsvp={rsvp} key={index} />) : null}
          </div>
      </div>
    )
  }
}

const mapStateToProps = function (state) {
  return {
    rsvps: state.rsvps
  }
}
export default connect(mapStateToProps)(RsvpList)
