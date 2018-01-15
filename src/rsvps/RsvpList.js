import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import RsvpItem from './RsvpItem'
import { connect } from 'react-redux'

class RsvpList extends PureComponent {
  static propTypes = {
    rsvps: PropTypes.arrayOf(PropTypes.object)
  }

  render() {
      return (
      <div className="rsvpContainer">
          <h1>RSVP List </h1>
          { this.props.rsvps.map((rsvp, index) => <RsvpItem rsvp={rsvp} key={index} />) }
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
