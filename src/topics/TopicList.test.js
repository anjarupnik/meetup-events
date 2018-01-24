import React from 'react'
import {configure, shallow} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import {TopicList} from './TopicList'

configure({ adapter: new Adapter() })

const topics = [
  {name: 'foo', count: 5},
  {name: 'bar', count: 19}
]

describe('Topics List', () => {
  const list = shallow(<TopicList topics={topics}/>)

  it('has title Topics top 10', () => {
    expect(list.find('h1').text()).toEqual('Topics top 10')
  })

  it('has list with given topics', () => {
    expect(list.find('li').length).toEqual(2)
  })

  it('renders the name and count of the topic', () => {
    expect(list.find('li').first().text()).toEqual('foo (5)')
  })
})
