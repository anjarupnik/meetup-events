import React from 'react'
import {RsvpList} from './RsvpList'
import { configure, shallow, mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Loader from '../components/loader'
import RsvpItem from './RsvpItem'
import configureStore from 'redux-mock-store'
import ReduxThunk from 'redux-thunk'
import {Provider} from 'react-redux'

configure({ adapter: new Adapter() })
const mockStore = configureStore([ReduxThunk])

const rsvps = [{
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
  }]

  const rsvpsTwo = [
    { member:
       { member_id: 246195374,
         photo: 'https://secure.meetupstatic.com/photos/member/d/8/4/2/thumb_273895362.jpeg',
         member_name: 'Jon' },
      rsvp_id: 1709463620,
      mtime: 1516793007000,
      event:
       { event_name: 'Game Night 🎲',
         event_id: '245266248',
         time: 1517182200000,
         event_url: 'https://www.meetup.com/ItsAClassicBookClub/events/245266248/' },
    },
    { member:
       { member_id: 195967980,
         photo: 'https://secure.meetupstatic.com/photos/member/b/7/5/7/thumb_251626935.jpeg',
         member_name: 'Toxic Sun' },
      rsvp_id: 1702777838,
      mtime: 1516793009639,
      event:
       { event_name: 'You Don\'t Look Like an Engineer / Monica Sarbu',
         event_id: '244539984',
         time: 1516816800000,
         event_url: 'https://www.meetup.com/Women-Techmakers-Berlin/events/244539984/' },
    }
  ]


describe('Rsvp List', () => {
  const list = shallow(<RsvpList rsvps={rsvps}/>)
  const store = mockStore({rsvps})

  it('contains title RSVP List', () => {
    expect(list.find('h1').text()).toEqual('RSVP List ')
  })

  it('shows loading when there is no rsvps', () => {
    expect(list.contains(<Loader />)).toBeTruthy()
  })

  it('does not show rsvp items when list is smaller then 2', () => {
    const listOne = mount(<Provider store={store}><RsvpList rsvps={rsvps}/></Provider>)
    expect(listOne.find('img').length).toEqual(0)
  })

  it('shows rsvp items when list is bigger then 1', () => {
    const listTwo = mount(<Provider store={store}><RsvpList rsvps={rsvpsTwo} /></Provider>)
    expect(listTwo.find('img').length).toEqual(2)
  })
})
