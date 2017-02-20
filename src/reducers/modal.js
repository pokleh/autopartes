//Modal reducer

export default function modal(state = [], action) {
	switch(action.type) {
		case 'TOGGLEMODAL' :
			if(action.modalState) {
				document.getElementById(action.modalId).classList.remove('out');
				document.getElementById(action.modalId).classList.add('in');
				document.getElementById('modal-overlay').classList.remove('out');
				document.getElementById('modal-overlay').classList.add('in');
				return false;
			} else {
				document.getElementById(action.modalId).classList.remove('in');
				document.getElementById(action.modalId).classList.add('out');
				document.getElementById('modal-overlay').classList.remove('in');
				document.getElementById('modal-overlay').classList.add("out");
				//document.getElementById('modal-overlay').style.display = "none";
				return true;	
			}				
		default:
			return state;
	}
}