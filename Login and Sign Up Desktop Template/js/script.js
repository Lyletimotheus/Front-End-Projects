const signUpButton = document.querySelector('#signUp');
const LoginButton = document.querySelector('#signIn');
const loginSignupContainer = document.querySelector('#login-signup-container');

signUpButton.addEventListener('click', () => loginSignupContainer.classList.add('right-panel-active'));
LoginButton.addEventListener('click', () => loginSignupContainer.classList.remove('right-panel-active'));
