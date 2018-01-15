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
          <img src={ rsvp.member.photo ? rsvp.member.photo : 'https://t4.ftcdn.net/jpg/01/17/95/91/240_F_117959178_mOp22kjhdhWdoSoePHPafN7GLUYyvFNY.jpg'} alt="member"/>
          <h5>{ rsvp.member.member_name }</h5>
          <br />
          <a href={rsvp.event.event_url} target="_blank">{ rsvp.event.event_name }</a>
        </div>
      )
    }
}

export default RsvpList
