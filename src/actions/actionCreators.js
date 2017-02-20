//Update Products State 

export function updateProducts(obj){
	return {
		type: 'UPDATE_PRODUCTS',
		obj
	}
}

export function updateProductValue(id, key, value){
	return {
		type: 'UPDATE_PRODUCT_VALUE',
		id,
		key,
		value
	}
}


export function toggleMenu(bool){
	return {
		type: 'TOGGLE_MENU', 
		bool
	}
}

export const toggleModal = (modalState, modalId) => {
	return {
		type: "TOGGLEMODAL",
		modalState,
		modalId
	}
}


export const storeProductId = (productId) => {
	return {
		type: "PRODUCTID",
		productId
	}
}

export const retrieveProduct = (productId) => {
	return {
		type: "RETRIEVE_PRODUCT",
		productId
	}
}

export const retrieveMessage = (messageId) => {
	return {
		type: "RETRIEVE_MESSAGE",
		messageId
	}
}