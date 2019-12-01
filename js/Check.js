function checkAnswers() {
	let el;
	el = document.querySelector('#zadan1 input:checked');
	if ( el.value==1 ) {
		document.querySelector('#zadan1 p.zadan').className += ' zadan-correct';
	} else {
		document.querySelector('#zadan1 p.zadan').className += ' zadan-wrong';
	}

	el = document.querySelector('#zadan2 input:checked');
	if ( el.value==1 ) {
		document.querySelector('#zadan2 p.zadan').className += ' zadan-correct';
	} else {
		document.querySelector('#zadan2 p.zadan').className += ' zadan-wrong';
	}

	el = document.querySelector('#zadan3 input:checked');
	if ( el.value==1 ) {
		document.querySelector('#zadan3 p.zadan').className += ' zadan-correct';
	} else {
		document.querySelector('#zadan3 p.zadan').className += ' zadan-wrong';
	}

	el = document.querySelector('#zadan4 input:checked');
	if ( el.value==1 ) {
		document.querySelector('#zadan4 p.zadan').className += ' zadan-correct';
	} else {
		document.querySelector('#zadan4 p.zadan').className += ' zadan-wrong';
	}

	el = document.querySelector('#zadan5 input:checked');
	if ( el.value==1 ) {
		document.querySelector('#zadan5 p.zadan').className += ' zadan-correct';
	} else {
		document.querySelector('#zadan5 p.zadan').className += ' zadan-wrong';
	}
	
	el = document.querySelector('#zadan6 input:checked');
	if ( el.value==1 ) {
		document.querySelector('#zadan6 p.zadan').className += ' zadan-correct';
	} else {
		document.querySelector('#zadan6 p.zadan').className += ' zadan-wrong';
	}
}
