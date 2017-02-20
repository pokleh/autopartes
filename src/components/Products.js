import React from 'react';
import message from '../Messages';
import data from '../Queries';
import h from '../Helpers';

let products = [],
	renderProducts;

export default class Products extends React.Component {

	componentWillMount() {
		data.read('products', this, {});
	}

	renderProducts(product) {
		return(
			<div key={product[0].toString()} className="data-container flex horizontal-start vertical-align">
				<div className="data-wrapper flex horizontal-start vertical-align">
					<figure className="data-img">
						<img className="item product-img responsive-img" src={product[1].imgURL} alt="product" />
					</figure>

					<div className="data-content">
						<div className="flex horizontal-start top-align">
							<div className="product-info">
								<div className="item product-item">{product[1].product}</div>
								<div className="item brand-item" placeholder="Marca">{product[1].brand}</div> 
							</div>
							<div className="product-price-container flex horizontal-end vertical-align">
								<span>$</span>
								<div className="item product-price">{h.formatPrice(product[1].price, 2)}</div>
							</div>
						</div>
						
						<div className="item description-item">{product[1].description}</div>
						<div className="item category-item">{product[1].category}</div>
					</div>
				</div>
				<div className="data-actions">
					<button className="btn-action btn-action-product btn-update" onClick={() => {this.props.toggleModal(this.props.modal, 'updateProducts'); this.props.storeProductId(product[0].toString()); this.props.retrieveProduct(product[1])}}><i className="fa fa-pencil-square-o" aria-hidden="true"></i></button>
					<button className="btn-action btn-action-product" onClick={() => {this.props.toggleModal(this.props.modal, 'deleteAlert'); this.props.storeProductId(product[0].toString())}}><i className="fa fa-trash-o" aria-hidden="true"></i></button>
				</div>

			</div>
		)
	}

	render() {
		//Store the products object into an array
		if(this.props.products != null) {
			products = Object.entries(this.props.products);	
		}

		renderProducts = products.map(this.renderProducts.bind(this));

		return(
			<div>
				{(renderProducts.length !== 0) ? renderProducts : message.retrieve(this.props.message, this)}
			</div>
		)
	}
}