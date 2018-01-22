import Page from 'react-page-object'
import React from 'react'
import App from './App'
import { configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

configure({ adapter: new Adapter() })

describe('AppSpec', () => {
  let page

  beforeEach(() => {
    page = new Page(<App />)
  })

  afterEach(() => {
    page.destroy()
  })

  it('should pass', () => {
    expect(page.content()).toMatch("Topics top 10")
  })
})
