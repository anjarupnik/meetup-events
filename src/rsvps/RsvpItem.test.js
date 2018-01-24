import React from 'react'
import RsvpItem from './RsvpItem'
import { configure, mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

configure({ adapter: new Adapter() })

describe('RsvpItem', () => {
  let component
  let rsvp = {
    venue:
     { venue_name: 'Bar Kaiser Franz',
       lon: 8.525997,
       lat: 47.379536,
       venue_id: 24201341 },
    visibility: 'public',
    response: 'yes',
    guests: 0,
    member:
     { member_id: 236387666,
       photo: 'https://secure.meetupstatic.com/photos/member/2/1/b/7/thumb_270608631.jpeg',
       member_name: 'Ad.' },
    rsvp_id: 1709277801,
    mtime: 1516706855217,
    event:
     { event_name: 'Retrouvons-nous au bar Kaiser Franz',
       event_id: '246875687',
       time: 1516816800000,
       event_url: 'https://www.meetup.com/french-819/events/246875687/' },
    group:
     { group_topics: [ [Object], [Object], [Object] ],
       group_city: 'Zürich',
       group_country: 'ch',
       group_id: 1271994,
       group_name: 'French Table Zurich',
       group_lon: 8.54,
       group_urlname: 'french-819',
       group_lat: 47.38 }
    }

  beforeEach(() => {
    component = mount(<RsvpItem rsvp={rsvp}/>)
  })

  it('renders the component', () => {
    expect(component.length).toBeTruthy()
  })

  it('contains memeber photo and name', () => {
    expect(component.find('img').prop('src')).toEqual(rsvp.member.photo)
    expect(component.find('h5').text()).toEqual(rsvp.member.member_name)
  })

  it("contains the event's link", () => {
    const link = component.find('a')
    const url = rsvp.event.event_url
    expect(link.prop('href')).toEqual(url)
    expect(link.text()).toEqual(rsvp.event.event_name)
  })
})
