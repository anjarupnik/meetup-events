import Page from 'react-page-object'
import React from 'react'
import {App} from './App'
import TestUtils from 'react-dom/test-utils'
import { configure, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import {TopicList} from './topics/TopicList'

configure({ adapter: new Adapter() })

describe('AppSpec', () => {
  let app

  beforeEach(() => {
    app = shallow(<App />)
  })

  it('renders the app', () => {
    expect(app.length).toBeTruthy()
  })
})
