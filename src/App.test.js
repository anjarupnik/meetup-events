import React from 'react'
import {App} from './App'
import { configure, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

configure({ adapter: new Adapter() })

describe('App', () => {
  let app

  beforeEach(() => {
    app = shallow(<App />)
  })

  it('renders the app', () => {
    expect(app.length).toBeTruthy()
  })
})
