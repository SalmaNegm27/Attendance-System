import {isLoggedIn} from "./auth.js"
  if (!isLoggedIn()) {
    window.location.href = 'login.html';
  }
const attendances = JSON.parse(localStorage.getItem('attendanceArr'));
const username = JSON.parse(sessionStorage.getItem('user')).username;
const userAttendances = attendances.filter(a => a.username == username);

const table = document.querySelector('table');
const tbody = document.querySelector('tbody');
(userAttendances).forEach(element => {
    const tr = document.createElement('tr');

    const date = document.createElement('td');
    date.textContent = element.date;
    tr.appendChild(date);

    const attendance = document.createElement('td');
    attendance.textContent = element.arrival;
    tr.appendChild(attendance);


    const departure = document.createElement('td');
    departure.textContent = element.depeture;
  
    tr.appendChild(departure);


    tbody.appendChild(tr);



});