import React from 'react';

module.exports = {
	retrieve(id, p) {
		switch(id) {
			case 0: 
				return <div className="products-message"><div className='uil-ripple-css'><div></div><div></div></div> Cargando Información... </div>;
			case 1:
				return(
					<div className="products-message">
						<span>No tienes ningun producto, empieza a agregar productos</span>
						<div className="add-product"> 	
							<button className="btn-action add-product-btn add-product-main" onClick={() =>  p.props.toggleModal(p.props.modal, 'addProductModal')}>AGREGAR PRODUCTO</button>
						</div>
					</div>
				)
				break;
			case 2:
				return <div className="products-message">No se pudo encontrar el producto</div>;
				break;
		}
	}
}