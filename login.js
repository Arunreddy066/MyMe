function login() 
{
    window.location.href = "./home.html";
}
function toggleForm() {
    const loginForm = document.getElementById('login-form');
    const signupForm = document.getElementById('signup-form');
    const formTitle = document.getElementById('form-title');

    if (loginForm.style.display === 'none') 
    {
        loginForm.style.display = 'block';
        signupForm.style.display = 'none';
        formTitle.innerText = 'Login';
    } else {
        loginForm.style.display = 'none';
        signupForm.style.display = 'block';
        formTitle.innerText = 'Signup';
    }
}
