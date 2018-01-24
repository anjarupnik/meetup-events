import React from 'react'
import {App} from './App'
import { configure, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import RsvpList from './rsvps/RsvpList'
import TopicList from './topics/TopicList'

configure({ adapter: new Adapter() })

describe('App', () => {
  let app

  beforeEach(() => {
    app = shallow(<App />)
  })

  it('renders the app', () => {
    expect(app.length).toBeTruthy()
  })

  it('contains Rsvp list and Topic list', () => {
    expect(app.contains(<RsvpList />)).toBeTruthy()
    expect(app.contains(<TopicList />)).toBeTruthy()
  })
})
