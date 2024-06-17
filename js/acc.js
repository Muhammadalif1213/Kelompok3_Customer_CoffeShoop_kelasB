document.addEventListener("DOMContentLoaded", function () {
    const loggedOutElements = document.querySelectorAll(".logged-out");
    const loggedInElements = document.querySelectorAll(".logged-in");

    function checkLoginStatus() {
        const isLoggedIn = localStorage.getItem("isLoggedIn");
        if (isLoggedIn) {
            loggedOutElements.forEach(element => element.style.display = "none");
            loggedInElements.forEach(element => element.style.display = "block");
        } else {
            loggedOutElements.forEach(element => element.style.display = "block");
            loggedInElements.forEach(element => element.style.display = "none");
        }
    }

    checkLoginStatus();

    document.getElementById("loginForm").addEventListener("submit", function (event) {
        event.preventDefault();
        localStorage.setItem("isLoggedIn", "true");
        $('#loginModal').modal('hide');
        checkLoginStatus();
    });

    document.getElementById("registrasiForm").addEventListener("submit", function (event) {
        event.preventDefault();
        // Registration logic here
        $('#registrasiModal').modal('hide');
    });

    document.getElementById("logoutButton").addEventListener("click", function () {
        localStorage.removeItem("isLoggedIn");
        checkLoginStatus();
    });
});
