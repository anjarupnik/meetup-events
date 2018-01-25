import React,  { PureComponent } from 'react'
import { connect } from 'react-redux'
import '../styles/main.css'

export class TopicList extends PureComponent {

	renderTopic(obj, index) {
		return (
			<li key={index}>{ obj.name } ({ obj.count })</li>
		)
	}

	render() {
		const {topics} = this.props
		return (
			<div className="topics-container">
				<h1>Topics top 10</h1>
				<ol>
					{ topics.map((obj, index) => this.renderTopic(obj, index)) }
				</ol>
			</div>
		)
	}
}

const mapStateToProps = ({ topics}) => ({ topics })

export default connect(mapStateToProps)(TopicList)
