import React from 'react';

import auth from '../Auth';

import logo from '../img/logo.png';

export default class LoginForm extends React.Component {

	render() {
		return (
			<div className="container"> 
				<div className="main-menu flex vertical-align">
					<figure className="logo-container">
						<img src={logo} alt="Logo Auto Partes" className="responsive-img" />
					</figure>
					<div className="login-form-container flex vertical-align horizontal-end">
						<div className="login-form flex vertical-align space-between">
							<input ref="txtEmail" type="email" onChange={this.handleChange} placeholder="Usuario" className="dark-input" /> 
							<input ref="txtPassword" type="password" onChange={this.handleChange} placeholder="Contraseña" className="dark-input" /> 
							<div className="buttonContainer"> 
								<button ref="btnLogin" className="btn btn-action" onClick={() => auth.loginAdmin(this.refs.txtEmail.value, this.refs.txtPassword.value)}>INICIAR SESIÓN</button> 
							</div>
						</div>
					</div>
				</div> 
			</div>
		)
	}

};