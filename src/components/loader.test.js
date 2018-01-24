import React from 'react'
import {configure, mount} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import {Loader} from './loader'

configure({adapter: new Adapter()})

describe('loader', () => {
  const loaderOne = mount(<Loader rsvps={[1]}/>)
  const loaderTwo = mount(<Loader rsvps={[1,2]}/>)

  it('renders loader when there is not enough rsvps', () => {
    expect(loaderOne.find('div').length).toEqual(3)
  })

  it('returns null if there is more then 1 rsvp', () => {
    expect(loaderTwo.find('div').length).toEqual(0)
  })
})
