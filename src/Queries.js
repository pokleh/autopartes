//Imports
import firebase from 'firebase';

module.exports = {
	create(ref, obj) {
		//Data URL reference
		const dataRef = firebase.database().ref(ref);
		//Submit Object
		dataRef.push(obj);
	},
	read(ref, p, obj) {
		//Data URL reference
		const dataRef = firebase.database().ref(ref);
		//Check if there's data in the DB
		dataRef.on('value', snap => {
			if(snap.val() === null) {
				p.props.updateProducts(obj);
				p.props.retrieveMessage(1);
			}
		});
		//Store data in the state
		dataRef.orderByChild('product').on('child_added', snap => {
			obj[snap.key] = snap.val();
			p.props.updateProducts(obj);
		});
	},
	update(ref, obj) {
		//Data URL reference
		const dataRef = firebase.database().ref(ref);
		//Update Referenced ID
		dataRef.update(obj);
	},
	delete(id, ref) {
		//Data URL reference
		const dataRef = firebase.database().ref(ref);
		//Delete Referenced ID
		dataRef.child(id).remove();
	}, 
	retriveProduct(ref) {
		const dataRef = firebase.database().ref(ref);
		dataRef.on('value', snap => {
			snap.val();
		});
	},
	retrieveProducts(ref) {
		let obj = {};
		//Data URL reference
		const dataRef = firebase.database().ref(ref);
		//Store data in the state
		dataRef.on('value', snap => {
			obj = snap.val();
		});
		return obj;
	}, 
	uploadFile(fn, url, e) {
		//Prevent Form From Submitting
		e.preventDefault();

		let file = url.files[0];
		let uploadTask;
		
		if(file) {
			uploadTask = firebase.storage().ref().child('images/' + file.name).put(file);
			uploadTask.on('state_changed', function(snapshot) {
			  // Observe state change events such as progress, pause, and resume
			}, function(error) {
			  	console.log(error);
			}, function() {
			  // Handle successful uploads on complete
			  let downloadURL = uploadTask.snapshot.downloadURL;	
			  fn(downloadURL);	
			});
		} else {
			fn('http://lightowerdesign.com/img/iso.png');
		}
	}
}