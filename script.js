document.addEventListener("DOMContentLoaded", () => {
    const users = {}; // In-memory user storage

    const registerForm = document.getElementById("registerForm");
    const loginForm = document.getElementById("loginForm");
    const registerMessage = document.getElementById("registerMessage");
    const loginMessage = document.getElementById("loginMessage");
    const securedPage = document.getElementById("securedPage");
    const logoutButton = document.getElementById("logoutButton");

    // Password hashing function
    function hashPassword(password) {
        return btoa(password); // Simple base64 encoding for demo purposes
    }

    // Handle user registration
    registerForm.addEventListener("submit", (event) => {
        event.preventDefault();
        const username = document.getElementById("regUsername").value;
        const password = document.getElementById("regPassword").value;
        if (users[username]) {
            registerMessage.textContent = "User already registered!";
        } else {
            users[username] = hashPassword(password);
            registerMessage.textContent = "User registered successfully!";
        }
        registerForm.reset();
    });

    // Handle user login
    loginForm.addEventListener("submit", (event) => {
        event.preventDefault();
        const username = document.getElementById("loginUsername").value;
        const password = document.getElementById("loginPassword").value;
        if (users[username] && users[username] === hashPassword(password)) {
            loginMessage.textContent = "";
            loginForm.style.display = "none";
            registerForm.style.display = "none";
            securedPage.style.display = "block";
        } else {
            loginMessage.textContent = "Invalid username or password!";
        }
        loginForm.reset();
    });

    // Handle user logout
    logoutButton.addEventListener("click", () => {
        securedPage.style.display = "none";
        loginForm.style.display = "block";
        registerForm.style.display = "block";
    });
});
