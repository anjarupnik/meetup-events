import React, { PureComponent } from 'react'
import {connect} from 'react-redux'

export class Loader extends PureComponent {
  render() {
    if (this.props.rsvps.length > 1) {return null}
    return (
      <div className="spinner">
        <div className="double-bounce1"></div>
        <div className="double-bounce2"></div>
      </div>
    )
  }
}

const mapStateToProps = ({rsvps}) => ({rsvps})
export default connect(mapStateToProps)(Loader)
