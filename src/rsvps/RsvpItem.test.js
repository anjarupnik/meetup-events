import React from 'react'
import RsvpItem from './RsvpItem'
import { configure, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

configure({ adapter: new Adapter() })

describe('RsvpItem', () => {
  let component

  beforeEach(() => {
    componenet = shallow(<RsvpItem />)
  })

  it('renders the component', () => {
    expect(component.length).toBeTruthy()
  })

})
