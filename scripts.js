document.addEventListener('DOMContentLoaded', function () {
    const loginForm = document.getElementById('loginForm');
    const signupForm = document.getElementById('signupForm');

    loginForm.addEventListener('submit', function (event) {
        event.preventDefault();
        const username = event.target.username.value;
        const password = event.target.password.value;

        // Send AJAX request to the server for login
        // Implement this part in the backend (Express.js)
        fetch('/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, password }),
        })
        .then(response => response.json())
        .then(data => {
            console.log(data.message);
            // Handle the response as needed
        })
        .catch(error => console.error('Error during login:', error));
    });

    signupForm.addEventListener('submit', function (event) {
        event.preventDefault();
        const newUsername = event.target.newUsername.value;
        const newPassword = event.target.newPassword.value;

        // Send AJAX request to the server for signup
        // Implement this part in the backend (Express.js)
        fetch('/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ newUsername, newPassword }),
        })
        .then(response => response.json())
        .then(data => {
            console.log(data.message);
            // Handle the response as needed
        })
        .catch(error => console.error('Error during signup:', error));
    });
});
