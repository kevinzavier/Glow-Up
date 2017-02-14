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
  const txtEmail = document.getElementById('username');
  const txtPassword = document.getElementById('password');
  const btnLogin = document.getElementById('login');
  const btnSignup = document.getElementById('signup');

  btnSignup.addEventListener('click', e => {
    window.location.replace('http://www.google.com');
    console.log("dsadsd   aasd");
  })

  btnLogin.addEventListener('click', e => {
    const email = txtEmail.value;
    const pass = txtPassword.value;
    const auth = firebase.auth();
    const promise = auth.signInWithEmailAndPassword(email, pass);
    promise.catch(e => console.log(e.message))
  })

}
