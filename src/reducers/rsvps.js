import { ADD_RSVP }  from '../actions/rsvps/add_rsvp'

export default (state = [], { type, payload } = {}) => {
	switch (type) {
      case  ADD_RSVP:
        return [{...payload}, ...state].slice(0,9)

    default :
     return state
	}
}
