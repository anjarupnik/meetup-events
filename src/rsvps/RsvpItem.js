import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

class RsvpList  extends PureComponent {
  static propTypes = {
    rsvp: PropTypes.object.isRequired,
  }

    render() {
      const { rsvp } = this.props
      return (
        <div className="rsvpItem">
          <img src={ rsvp.member.photo } alt="member"/>
          <a href={rsvp.event.event_url} target="_blank">{ rsvp.event.event_name }</a>
          { rsvp.member.member_name }
        </div>
      )
    }
}

export default RsvpList
