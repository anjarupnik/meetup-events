import React, { PureComponent } from 'react'
import RsvpList from './rsvps/RsvpList'
import TopicList from './topics/TopicList'
import './styles/main.css'

class App extends PureComponent {
  render() {
    return (
      <div className="app">
        <TopicList />
        <RsvpList />
      </div>
    );
  }
}

export default App
