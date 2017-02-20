//Imports
import firebase from 'firebase';
import { browserHistory } from 'react-router';

// AUTH DEMO CREDENTIALS 
// User: admin@admin.com
// Pass: admin123

module.exports = {

	loginAdmin(username, password) {
		const auth = firebase.auth();

		//Login process
		const promise = auth.signInWithEmailAndPassword(username, password);
		promise.catch(e => console.log(e.message));

		//Redirect to dashboard
	  	firebase.auth().onAuthStateChanged(firebaseUser => {
    		if(firebaseUser) {
      			browserHistory.push('/dashboard');
    		} 
  		});
	},

	logoutAdmin() {
		firebase.auth().signOut();
	},

	admin() {
		firebase.auth().onAuthStateChanged(firebaseUser => {
		    if(!firebaseUser) {
		      browserHistory.push('/');
		    } 
	  	});
	}
};