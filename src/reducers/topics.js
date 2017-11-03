import { UPDATE_TOPICS } from '../actions/topics/update_topics'

export default (state = [], { type, payload } = {}) => {
	switch (type) {
      case  UPDATE_TOPICS:
        return [...payload]

  default :
   return state
   	}
}
