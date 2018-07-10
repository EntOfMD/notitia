import { FETCH_USER } from '../actions/types';
/* basically there's 3 possible states,
app starts with null
it can be false if the user isn't logged in (empty payload),
or user info (payload) */

export default function(state = null, action) {
	switch (action.type) {
		case FETCH_USER:
			return action.payload || false;

		default:
			return state;
	}
}
