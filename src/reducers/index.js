import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import modal from './modal';
import modalView from './modalView';
import products from './products';
import toggle from './toggle';
import product from './product';
import productId from './productId';
import message from './message';

const rootReducer = combineReducers({products, toggle, modal, modalView, product, productId, message, routing: routerReducer});

export default  rootReducer;