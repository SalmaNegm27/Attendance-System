import { isLoggedIn } from "./auth.js"
if (!isLoggedIn()) {
    window.location.href = 'login.html';
}
const attendances = JSON.parse(localStorage.getItem('attendanceArr'));
const users = JSON.parse(localStorage.getItem('users'));
const table = document.querySelector('table');
const tbody = document.querySelector('tbody');
(attendances).forEach(element => {
    const tr = document.createElement('tr');

    const user = users.find(a => a.username === element.username)
    const name = document.createElement('td');
    name.textContent = user.firstname + ' ' + user.lastname;

    tr.appendChild(name);
    const date = document.createElement('td');
    date.textContent = element.lateHours;
    tr.appendChild(date);

    tbody.appendChild(tr);



});