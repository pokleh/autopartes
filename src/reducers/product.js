//Retrieve Single Product

export default function retrieveProduct(state = [], action) {
	switch(action.type) {
		case 'RETRIEVE_PRODUCT':
			return action.productId;	
			break;		
		default:
			return state;
	}
}