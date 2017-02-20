//Product ID reducer

export default function storeProductId(state = [], action) {
	switch(action.type) {
		case 'PRODUCTID' :
			return action.productId;			
		default:
			return state;
	}
}