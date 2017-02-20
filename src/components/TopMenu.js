import React from 'react';
import data from '../Queries';
import logo from '../img/logo.png';

let searchProducts = {};

export default class TopMenu extends React.Component {

	productActions() {
		if(this.props.location.pathname.slice(11) === 'productos'){
			return(
				<div className="action-top-buttons flex horizontal-start vertical-align">
					<div className="add-product flex horizontal-start vertical-align">
						<button className="btn-seondary add-product-icon" onClick={() =>  this.props.toggleModal(this.props.modal, 'addProductModal')}> <i className="fa fa-plus" aria-hidden="true"></i> </button>
						<button className="btn-secondary add-product-btn" onClick={() =>  this.props.toggleModal(this.props.modal, 'addProductModal')}>AGREGAR PRODUCTO</button>
					</div>
					<div className="searchbox flex horizontal-start vertical-align">
						<input type="text" className="search-input" placeholder="Buscar producto..." onChange={this.searchProducts.bind(this)} /> <i className="fa fa-search" aria-hidden="true"></i>
					</div>
				</div>
			)
		}
	}
	
	searchProducts(e) {
		let products = this.props.products;

		(Object.keys(products).length === 0) ? products = data.retrieveProducts('products') : null;

		if(e.target.value.length > 0) {

			//Push items to new search products obj
			for (let value in products) {
				if(products.hasOwnProperty(value)) {
					if(products[value].product) {
						if(!products[value].product.indexOf(e.target.value) || 
						   !products[value].product.toLowerCase().indexOf(e.target.value) || 
						   !products[value].product.toUpperCase().indexOf(e.target.value) ||
						   !products[value].brand.indexOf(e.target.value) ||
						   !products[value].brand.toLowerCase().indexOf(e.target.value) ||
						   !products[value].brand.toUpperCase().indexOf(e.target.value) ||
						   !products[value].category.indexOf(e.target.value) ||
						   !products[value].category.toLowerCase().indexOf(e.target.value) ||
						   !products[value].category.toUpperCase().indexOf(e.target.value)) {
							searchProducts[value] = products[value];
						} else {
							this.props.retrieveMessage(2);
						}
					}
				}
			}
			//Update products state with search object results
			this.props.updateProducts(searchProducts);
			//Reset search products obj
			searchProducts = {};
		} else {
			data.read('products', this, {});
		}

	}

	toggleMenu() {
		this.props.toggleMenu(this.props.toggle);
	}

	render() {
		return (
			<nav className="flex">
				<div className="flex horizontal-start vertical-align full-width">
				<figure className="top-menu-logo flex center vertical-align sidebar-width">
					<i className="fa fa-bars" aria-hidden="true" onClick={this.toggleMenu.bind(this)}></i>
					<img src={logo} alt="React Logo" />
				</figure>
				<div className="top-menu-container flex horizontal-start vertical-align">
					<span className="section-title">{this.props.location.pathname.slice(11)}</span>
					{this.productActions(this)}
				</div>
				</div>
			</nav>
		)
	}
}