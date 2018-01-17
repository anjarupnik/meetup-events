import React, { PureComponent } from 'react'
import {connect} from 'react-redux'

class Loader extends PureComponent {
  render() {
    if (this.props.rsvps.length > 1) {return null}
    return (
      <div class="spinner">
        <div class="double-bounce1"></div>
        <div class="double-bounce2"></div>
      </div>
    )
  }
}

const mapStateToProps = ({rsvps}) => ({rsvps})
export default connect(mapStateToProps)(Loader)
