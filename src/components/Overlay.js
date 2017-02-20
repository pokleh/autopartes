/* Modals Overlay Page Component */

import React from 'react';

import AddProductModal from './AddProductModal';
import DeleteAlert from './DeleteAlert';
import UpdateProductsModal from './UpdateProductsModal';

export default class Overlay extends React.Component {

	closeModal(e) {
		if(e.nativeEvent.target.id === 'modal-overlay') {
			this.props.toggleModal(this.props.modal, this.props.modalView);
		}
	}

	handleImagePreview(url, e) {
		e.preventDefault();

		let reader = new FileReader();
		let file = e.target.files[0];

		reader.onloadend = () => {
		  url.src = reader.result;
		}
		(file !== undefined) ? reader.readAsDataURL(file) : null;
	}

	render() {
		return (
			<div className="modal-overlay center vertical-align" id="modal-overlay" onClickCapture={this.closeModal.bind(this)}>
				<AddProductModal onClick={this.modal} {...this.props} handleImagePreview={this.handleImagePreview} />
				<DeleteAlert onClick={this.modal} {...this.props} />
				<UpdateProductsModal onClick={this.modal} {...this.props} handleImagePreview={this.handleImagePreview} />
			</div>
		)
	}
}