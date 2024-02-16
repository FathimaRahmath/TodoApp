document.addEventListener('DOMContentLoaded', function () {
    const loginForm = document.getElementById('login-form');
   

    loginForm.addEventListener('submit', function (event) {
        event.preventDefault();
        const uname = document.getElementById('username').value;
        const pswd = document.getElementById('password').value;

        // Check if login is successful 
        if (uname === 'admin' && pswd === '12345') {
            // Redirect to todo.html
            window.location.href = 'todo.html';
        } else {
            alert('Invalid username or password');
        }
    });
});
