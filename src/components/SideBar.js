import React from 'react';
import { Link } from 'react-router';

import auth from '../Auth';

import logo from '../img/logo.png';

export default class SideBar extends React.Component {

	componentDidUpdate() {
		const sidebar = this.refs.sidebar;
		if(this.props.toggle === true) {
			sidebar.classList.remove('close-menu');
			sidebar.classList.add('open-menu');
			sidebar.style.height = `${this.props.dashboard.offsetHeight}px`;
		} else {
			sidebar.classList.remove('open-menu');
			sidebar.classList.add('close-menu');
			sidebar.style.height = 'auto';
		}
		console.log(this.props.dashboard.offsetHeight);
	}

	activeLink(l) {
		let links = document.getElementsByClassName('menu-link');

		//Clean active class in all the links
		for(let link of links) {
			link.classList.remove('active');
		}

		//Add 'active' class to clicked link
		document.getElementById(l+'-link').classList.add('active');
	}

	render() {
		return(
			<div className="sidebar sidebar-width" ref="sidebar">
				<ul className="flex vertical-items menu">
					<figure className="logo flex center vertical-align sidebar-width sidebar-logo">
						<img src={logo} alt="React Logo" className="dashboard-logo" />
					</figure>
					<Link className="menu-link active" id="products-link" to='/dashboard' onClick={this.activeLink.bind(this, 'products')}>
				 		<span className="link-text flex horizontal-start"> 
				 			<i className="fa fa-cogs" aria-hidden="true"></i> 
				 			Poductos 
				 		</span> 
				 	</Link>
					<Link className="menu-link" id="categories-link" to='/dashboard/categorias' onClick={this.activeLink.bind(this, 'categories')}> 
						<span className="link-text flex horizontal-start"> 
							<i className="fa fa-tags" aria-hidden="true"></i>
							Categorías 
						</span>
					</Link>
					<Link className="menu-link" id="brands-link" to='/dashboard/marcas' onClick={this.activeLink.bind(this, 'brands')}> 
						<span className="link-text flex horizontal-start"> 
							<i className="fa fa-bullseye" aria-hidden="true"></i> 
							Marcas 
						</span>
					</Link>
					<Link className="menu-link" id="chat-link" to='/dashboard/conversaciones' onClick={this.activeLink.bind(this, 'chat')}> 
						<span className="link-text flex horizontal-start"> 
							<i className="fa fa-commenting-o" aria-hidden="true"></i> 
							Conversaciones 
						</span>
					</Link>

					<li className="menu-link menu-logout-link" onClick={auth.logoutAdmin}> 
						<span className="link-text flex horizontal-start"> 
							<i className="fa fa-sign-out" aria-hidden="true"></i>
							Cerrar Sesión 
						</span>
					</li>
				</ul>
			</div>
		)		
	}
}