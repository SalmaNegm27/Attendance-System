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
  
  const user= users.find(a =>a.username === element.username)
  const name = document.createElement('td');
  name.textContent =user.firstname+' '+ user.lastname;
  
  tr.appendChild(name);
  
  
  
  const date = document.createElement('td');
  date.textContent = element.date;
  tr.appendChild(date);
  
  const attendance = document.createElement('td');
  attendance.textContent = element.arrival;
  tr.appendChild(attendance);
  // appendChiletd(tr,element.date)
  // appendChiletd(tr,element.time)
  // appendChiletd(tr,element.depeture)


  const departure = document.createElement('td');
  departure.textContent = element.depeture;
  tr.appendChild(departure);


  tbody.appendChild(tr);



});

function appendChiletd(tr,value)
{
  
  const td = document.createElement('td');
  td.textContent = value;
  tr.appendChild(td);

}
