$(document).ready(function() {
	initializePage();
  login();
})



/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	console.log("Javascript connected!");
}

function login(){
  //get elements
  const txtEmail = document.getElementById('txtEmail');
  const txtPassword = document.getElementById('txtPassword');
  const btnLogin = document.getElementById('btnLogin');
  const btnSignup = document.getElementById('btnSignup');
	const btnLogout = document.getElementById('btnLogout');
	const goHome = document.getElementById('goHome');

	//Add login event
	btnLogin.addEventListener('click', e => {
		const email = txtEmail.value;
		const pass = txtPassword.value;
		const auth = firebase.auth();
		const promise = auth.signInWithEmailAndPassword(email, pass);
		promise.catch(e => console.log(e.message));
	});

	btnSignup.addEventListener('click', e =>{
		//TODO for email and pass requirements
		const email = txtEmail.value;
		const pass = txtPassword.value;
		const auth = firebase.auth();
		const promise = auth.createUserWithEmailAndPassword(email, pass);

		promise
			.catch(e => console.log(e.message));
	});

	btnLogout.addEventListener('click', e=> {
		firebase.auth().signOut();
	})

	//add realtime listener
	firebase.auth().onAuthStateChanged(firebaseUser => {
		if(firebaseUser){
			console.log(firebaseUser);
			btnLogout.classList.remove('hide');
			goHome.classList.remove('hide');
		}
		else{
			console.log("not logged in");
			btnLogout.classList.add('hide');
			goHome.classList.add('hide');
		}
	});
}
