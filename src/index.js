import React from 'react';
import {render} from 'react-dom';
import { Router, Route, IndexRedirect, IndexRoute } from 'react-router';

import { Provider } from 'react-redux';
import store, { history } from './store';

import auth from './Auth';

import App from './components/App';
import Brands from './components/Brands';
import Dashboard from './components/Dashboard';
import Categories from './components/Categories';
import Chat from './components/Chat';
import Main from './components/Main';
import Products from './components/Products';
import NotFound from './components/NotFound';

import * as firebase from 'firebase';

// Initialize Firebase
var config = {
  apiKey: "AIzaSyCQaTmr7C7KCteaGpskS9EvwE4eyrbCC5Y",
  authDomain: "fir-demo-e8e74.firebaseapp.com",
  databaseURL: "https://fir-demo-e8e74.firebaseio.com",
  storageBucket: "fir-demo-e8e74.appspot.com",
  messagingSenderId: "922764370366"
};

//Firebase
firebase.initializeApp(config);

/*** Routes ***/ 

const routes = (
  <Provider store={store}>
    <Router history={history}>
        <Route path="/" component={Main} />
        <Route path="dashboard" component={App} onEnter={auth.admin}>
          <IndexRoute component={Dashboard} />
          <IndexRedirect to="productos" />
          <Route path="productos" component={Products} />
          <Route path="categorias" component={Categories} />
          <Route path="marcas" component={Brands} />
          <Route path="conversaciones" component={Chat} />
        </Route>
      <Route path="*" component={NotFound} />
    </Router>
  </Provider>
)

render(routes, document.querySelector('#root'));
