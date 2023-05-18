// import { adminProfile } from "./adminProfile.js"

// if (!adminProfile.getAdmin()) {
//     adminProfile.setAdmin();

// }
const submission = document.querySelector('button[type="submit"]');
submission.addEventListener('click', function (event) {

    event.preventDefault();


    login();
}) //end of eventlistner



function login() {

    const enteredUserName = document.getElementById('username').value.trim();
    const enteredPassword = document.getElementById('password').value.trim();

    if (enteredUserName ==='admin@admin.com'&& enteredPassword==='admin123') {
        sessionStorage.setItem('user', JSON.stringify({
            username: enteredUserName,
            password: enteredPassword,
            position: 'admin'
        }));

        window.location.href = 'Users.html';
    }
    else {

        const user = getUser(enteredUserName, enteredPassword);
        if (user) {

            const sessionobj = JSON.stringify(user);
            sessionStorage.setItem('user', sessionobj);
            window.location.href = "index.html";

        } else {

            alert('Wait For Admin Approvment');
        }

    }

}

function getUser(username, password) {
    const usersarr = JSON.parse(localStorage.getItem('users'));

    for (let i = 0; i < usersarr.length; i++) {
        if (usersarr[i].username === username && usersarr[i].password === password && usersarr[i].isapproved === true) {
            return usersarr[i];
        }
    }
    return false;

}

function setAdmin() {
    localStorage.setItem('adminEmail', 'admin@admin.com');
    localStorage.setItem('adminPassword', 'admin123');
}

