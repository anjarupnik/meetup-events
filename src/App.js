import React, { PureComponent } from 'react'
import RsvpList from './rsvps/RsvpList'
import TopicList from './topics/TopicList'


class App extends PureComponent {
  render() {
    return (
      <div>
        <TopicList />
        <RsvpList />
      </div>
    );
  }
}

export default App
