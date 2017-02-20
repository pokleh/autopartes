import React from 'react';
import data from '../Queries';
import h from '../Helpers';

export default class UpdateProductsModal extends React.Component{

	autosize(ref) { 
		(ref === 'description') ? ref = this.refs.description : ref = this.refs.features;
		setTimeout(function(){
			ref.style.cssText = 'height:auto; padding:0.2rem 0.25rem 0.65rem 0.25rem';
			ref.style.cssText = 'height:' + ref.scrollHeight + 'px';
		},0);
	}

	loadOptions(sel, val, key) {
		return (
			(val === sel) ? <option key={key} value={val} selected>{val}</option> : <option key={key} value={val}>{val}</option>
		)
	}

	updateProduct(imgURL) {
		//Create object to submit
		let product = {
			product: (this.refs.product.value === '') ? this.props.product.product : this.refs.product.value, 
			description: (this.refs.description.value === '') ? this.props.product.description : this.refs.description.value, 
			price: (this.refs.price.value === '') ? this.props.product.price : this.refs.price.value,
			imgURL: (imgURL === 'http://lightowerdesign.com/img/iso.png') ? this.props.product.imgURL : imgURL,
			category: this.refs.category.value,
			brand: this.refs.brand.value,
			features: (this.refs.features.value === '') ? this.props.product.features : this.refs.features.value
		}
		//Push data to DB
		data.update(`products/${this.props.productId}`, product);
		//Update products state
		data.read('products', this, {});
		//Reset Form
		this.refs.productForm.reset();
		//Exit modal 
		this.props.toggleModal(this.props.modal, this.props.modalView);
	}


	render() {
		let brandOptions = ['Total', 'Bridgestone', 'Toto', 'Shell'];
		let categoryOptions = ['Accesorios', 'Aditivos', 'Llantas', 'Mecánica'];
		return(
			<div id="updateProducts" className="modal center vertical-align update-products">
				<form ref="productForm" onSubmit={data.uploadFile.bind(this, this.updateProduct.bind(this), this.refs.updateImgURL)}>
					<div className="flex horizontal-start top-align product-top-info">
						<figure className="product-item-img">
							<label htmlFor="thumbFile">
								<div className="flex center vertical-align img-preview-container">
									<img className="responsive-img" ref="imgThumb" src={this.props.product.imgURL} alt="autopartes"></img>
								</div>
							</label>
							<input type="file" id="thumbFile" className="input-file" ref="updateImgURL" onChange={this.props.handleImagePreview.bind(this, this.refs.imgThumb)} />
						</figure>
						<div className="product-item-info">
							<div className="flex horizontal-start vertical-align product-info-row">
								<div className="item-container product-item-container">
									<label htmlFor="product" className="product-item-label">Producto</label>
									<input className="product-item-input" ref="product" type="text" defaultValue={this.props.product.product} placeholder={this.props.product.product} />
								</div>
								<div className="item-container price-item-container">
									<label htmlFor="price" className="product-item-label">Precio</label>
									<div className="flex horizontal-start top-align">
										<span>$</span>
										<input id="price" className="product-item-input price-item-input" ref="price" type="number" defaultValue={(this.props.product.price !== undefined) ? h.formatPrice(this.props.product.price, 2) : ''}  placeholder={(this.props.product.price !== undefined) ? h.formatPrice(this.props.product.price, 2) : ''} />
									</div>
								</div>
							</div>
							<div className="flex horizontal-start vertical-align product-info-row">
								<div className="item-container">
									<label htmlFor="brand" className="product-item-label">Marca</label>
									<div className="select-style"> 
										<select id="brand" ref="brand" defaultValue={this.props.product.brand}>
											{brandOptions.map(this.loadOptions.bind(this, this.props.product.brand))}
										</select>
									</div>
								</div>
								<div className="item-container category-item-container">
									<label htmlFor="category" className="product-item-label">Categoría</label>
									<div className="select-style">
										<select id="category" ref="category" defaultValue={this.props.product.category}>
											{categoryOptions.map(this.loadOptions.bind(this, this.props.product.category))}
										</select>
									</div>
								</div>
							</div>
						</div>
					</div>
					<p>
						<label htmlFor="description" className="product-item-label">Descripción</label>
						<textarea id="description" className="product-item-textarea" ref="description" defaultValue={this.props.product.description} placeholder={this.props.product.description} onFocus={this.autosize.bind(this, 'description')}></textarea>
					</p>
					<p>
						<label htmlFor="features" className="product-item-label">Especificaciones</label>
						<textarea id="features" className="product-item-textarea" ref="features" defaultValue={this.props.product.features} placeholder={this.props.product.features} onFocus={this.autosize.bind(this, 'features')}></textarea>
					</p>
					<div className="flex horizontal-end vertical-align">
						<button className="btn-action btn-add-product">Actualizar</button>
					</div>
				</form>
			</div>
		)
	}
}