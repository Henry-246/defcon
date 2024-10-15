document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById('login-form');
    const signupForm = document.getElementById('signup-form');
    const loginToggle = document.getElementById('login-toggle');
    const signupToggle = document.getElementById('signup-toggle');
    const loginButton = document.getElementById('login-button');

    // Toggle between login and signup forms
    loginToggle.addEventListener("click", function () {
        loginForm.classList.remove('hidden');
        signupForm.classList.add('hidden');
        loginToggle.classList.add('active');
        signupToggle.classList.remove('active');
    });

    signupToggle.addEventListener("click", function () {
        signupForm.classList.remove('hidden');
        loginForm.classList.add('hidden');
        signupToggle.classList.add('active');
        loginToggle.classList.remove('active');
    });

    // Handle login button click
    loginButton.addEventListener("click", function (event) {
        event.preventDefault();  // Prevents form from submitting
        window.location.href = "home.html";  // Navigates to home.html
    });
});
