import React,  { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

class TopicList extends PureComponent {
	static propTypes = {
		topics: PropTypes.arrayOf(PropTypes.shape({
			topic: PropTypes.string.isRequired,
			count: PropTypes.number.isRequired
		}))
	}

	renderTopic(obj) {
		return (
			<li>{ obj.name } ({ obj.count })</li>
		)
	}

	render() {
		const {topics} = this.props
		return (
			<div style={{width:300}}>
				<h3>Topics top 10</h3>
				<ol>
					{ topics.map(this.renderTopic) }
				</ol>
			</div>
		)
	}
}

const mapStateToProps = ({ topics}) => ({ topics })

export default connect(mapStateToProps)(TopicList)
