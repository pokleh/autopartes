
export default function updateProducts(state = [], action) {
	switch(action.type) {
		case 'UPDATE_PRODUCTS':
			// return the new state with the new comment
			return Object.assign({}, state.data, action.obj);
		case 'UPDATE_PRODUCT_VALUE':
			// return the new state with the new comment
			console.log(action.id, action.key, action.value);
		default:
			return state;
	}
}