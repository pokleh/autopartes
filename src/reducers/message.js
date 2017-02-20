//Retrieve Single Product

export default function retrieveMessage(state = [], action) {
	switch(action.type) {
		case 'RETRIEVE_MESSAGE':
			return action.messageId;	
			break;		
		default:
			return state;
	}
}