import React from 'react';

import '../styles/App.css';

import LoginForm from './LoginForm';

import appStore from '../img/appstore.png';
import playStore from '../img/playstore.png';

export default class Main extends React.Component {

  render() {

    return (
      <div className="App vertical-align">
          <LoginForm />
          <div className="container">
	          <div className="header-banner">
		          <h1>ENCUENTRA LOS MEJORES REPUESTOS</h1>
		          <h2>EN UN SOLO LUGAR</h2>
		          <div className="store-icons-container flex space-between">
		          		<figure className="store-icon">
							<img src={appStore} alt="Apple App Store" className="responsive-img" />
						</figure>
						<figure className="store-icon">
							<img src={playStore} alt="Google Play Store" className="responsive-img" />
						</figure>
		          </div>
	          </div>
          </div>
      </div>
      
    );
  }
};