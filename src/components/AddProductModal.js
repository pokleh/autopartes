import React from 'react';
import thumb from '../img/thumb.jpg';
import data from '../Queries';

export default class AddProductModal extends React.Component{

	autosize(ref) { 
		(ref === 'description') ? ref = this.refs.description : ref = this.refs.features;
		setTimeout(function(){
			ref.style.cssText = 'height:auto; padding:0';
			ref.style.cssText = 'height:' + ref.scrollHeight + 'px';
		},0);
	}


	createProduct(imgURL) {

  		//Create object to submit
		let product = {
			product: this.refs.product.value, 
			description: this.refs.description.value, 
			price: this.refs.price.value,
			imgURL: (imgURL === undefined) ? 'http://lightowerdesign.com/img/works-thumbs/dispatch-ads-web.png' : imgURL,
			category: this.refs.category.value,
			brand: this.refs.brand.value,
			features: this.refs.features.value
		}	

		//Push data to DB
		data.create('products', product);
		//Update products state
		data.read('products', this, {});
		//Reset Form
		this.refs.productForm.reset();
		//Exit modal 
		this.props.toggleModal(this.props.modal, this.props.modalView);
	}

	componentDidUpdate() {
		this.refs.imgPreview.src = thumb;
	}

	render() {
		return(
			<div id="addProductModal" className="modal center vertical-align">
				<form ref="productForm" onSubmit={data.uploadFile.bind(this, this.createProduct.bind(this), this.refs.imgURL)}>
					<div className="flex horizontal-start top-align product-top-info">
						<figure className="product-item-img">
							<label htmlFor="inputFile">
								<div className="flex center vertical-align img-preview-container">
									<img className="responsive-img" ref="imgPreview" src={thumb} alt="autopartes"></img>
								</div>
							</label>
							<input type="file" id="inputFile" className="input-file" ref="imgURL" onChange={this.props.handleImagePreview.bind(this, this.refs.imgPreview)} />
						</figure>
						<div className="product-item-info">
							<div className="flex horizontal-start vertical-align product-info-row">
								<div className="item-container product-item-container">
									<label htmlFor="product" className="product-item-label">Producto</label>
									<input id="product" className="product-item-input" ref="product" type="text"/>
								</div>
								<div className="item-container price-item-container">
									<label htmlFor="price" className="product-item-label">Precio</label>
									<input id="price" className="product-item-input" ref="price" type="text"/>
								</div>
							</div>
							<div className="flex horizontal-start vertical-align product-info-row">
								<div className="item-container">
									<label htmlFor="brand" className="product-item-label">Marca</label>
									<div className="select-style"> 
										<select id="brand" ref="brand" className="product-item-select">
											<option value="Total">Total</option>
											<option value="Bridgestone">Bridgestone</option>
											<option value="Toto">Toto</option>
											<option value="Shell">Shell</option>
										</select>
									</div>
								</div>
								<div className="item-container category-item-container">
									<label htmlFor="category" className="product-item-label">Categoría</label>
									<div className="select-style"> 
										<select id="category" ref="category" className="product-item-select">
											<option value="Accesorios">Accesorios</option>
											<option value="Llantas">Llantas</option>
											<option value="Motor">Motor</option>
											<option value="Aditivos">Aditivos</option>
										</select>
									</div>
								</div>
							</div>
						</div>
					</div>
					<p>
						<label htmlFor="description" className="product-item-label">Descripción</label>
						<textarea id="description" className="product-item-textarea" ref="description" onKeyDown={this.autosize.bind(this, 'description')}></textarea>
					</p>
					<p>
						<label htmlFor="features" className="product-item-label">Especificaciones</label>
						<textarea id="features" className="product-item-textarea" ref="features" onKeyDown={this.autosize.bind(this, 'features')}></textarea>
					</p>
					<div className="flex horizontal-end vertical-align">
						<button className="btn-action btn-add-product">Agregar</button>
					</div>
				</form>
			</div>
		)
	}
}