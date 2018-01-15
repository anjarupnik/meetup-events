import React,  { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import '../styles/main.css'

class TopicList extends PureComponent {
	static propTypes = {
		topics: PropTypes.arrayOf(PropTypes.shape({
			topic: PropTypes.string.isRequired,
			count: PropTypes.number.isRequired
		}))
	}

	renderTopic(obj, index) {
		return (
			<li key={index}>{ obj.name } ({ obj.count })</li>
		)
	}

	render() {
		const {topics} = this.props
		return (
			<div className="topicsContainer">
				<h3>Topics top 10</h3>
				<ol>
					{ topics.map((obj, index) => this.renderTopic(obj, index)) }
				</ol>
			</div>
		)
	}
}

const mapStateToProps = ({ topics}) => ({ topics })

export default connect(mapStateToProps)(TopicList)
