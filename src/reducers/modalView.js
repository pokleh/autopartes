//Modal reducer

export default function modal(state = [], action) {
	switch(action.type) {
		case 'TOGGLEMODAL' :
			if(action.modalState) {
				return action.modalId;
			} 
		break;				
		default:
			return state;
	}
	return state;
}