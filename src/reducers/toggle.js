export default function toggleMenu(state = [], action) {
	switch(action.type) {
		case 'TOGGLE_MENU':
			if(action.bool === false) {
				return true;
			} else {
				return false;
			}
		default:
			return state;
	}
}