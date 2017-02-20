import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../actions/actionCreators';
import Dashboard from './Dashboard';

function mapStateToProps(state) {
	return {
		products: state.products, 
		toggle: state.toggle, 
		modal: state.modal, 
		modalView: state.modalView, 
		productId: state.productId,
		product: state.product, 
		message: state.message
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators(actionCreators, dispatch);
}

const App = connect(mapStateToProps, mapDispatchToProps)(Dashboard);

export default App;