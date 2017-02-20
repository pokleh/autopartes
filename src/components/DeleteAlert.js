import React from 'react';
import data from '../Queries';

export default class DeleteAlert extends React.Component{
	delete() {
		//Delete data from DB
		data.delete(this.props.productId, 'products'); 
		//Update products state
		data.read('products', this, {});
		//Exit Modal
		this.props.toggleModal(this.props.modal, this.props.modalView); 
	}

	render() {
		return(
			<div id="deleteAlert" className="modal center vertical-align delete-alert">
				<h2>
					¿Seguro que quieres eliminar este producto?
				</h2>
				<div className="flex space-between vertical-align btn-group">
					<button className="btn-action" onClick={this.delete.bind(this)}> Si </button>
					<button className="btn-secondary" onClick={() => this.props.toggleModal(this.props.modal, this.props.modalView)}> No</button>
				</div>
			</div>
		)
	}
}