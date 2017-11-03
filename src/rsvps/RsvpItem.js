import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

class RsvpList  extends PureComponent {
  static propTypes = {
    rsvp: PropTypes.object.isRequired,
  }

    render() {
      const { rsvp } = this.props
      return (
        <div>
          { rsvp.event.event_name }
          { rsvp.member.member_name }
          { rsvp.member.photo }
        </div>
      )
    }
}

export default RsvpList
