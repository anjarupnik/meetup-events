import topics from './topics'
import { UPDATE_TOPICS } from '../actions/topics/update_topics'

describe('rsvps reducer', () => {
  const reducer = topics
  const initialState = []

  it('returns empty array for intial state', () => {
    expect(reducer()).toEqual(initialState)
  })

  it('update topics', () => {
    const eventualState = [
      {name: 'foo', count: 5},
      {name: 'bar', count: 19}
    ]

    const updateTopics = {
      type: UPDATE_TOPICS,
      payload: eventualState
    }

    expect(reducer(initialState, updateTopics)).toEqual(eventualState)
  })
})
