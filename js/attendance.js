import {isLoggedIn} from "./auth.js"
  if (!isLoggedIn()) {
    window.location.href = 'login.html';
  }
const submitbtn = document.querySelector("#submit");

submitbtn.addEventListener('click', function () {
    attendanceRegestration();
    document.getElementById('inputUser').value = '';

});//end of eventlistner


function attendanceRegestration() {
    const arr = JSON.parse(localStorage.getItem('users'));
    const userName = document.getElementById('inputUser').value;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i].username === userName) {
            saveAtteendance();
            return;
        }
    }

    alert("There is no user with this User Name: " + userName);
}


function saveAtteendance() {
    const username = document.getElementById('inputUser').value;
    const date = new Date();
    const formatdate = date.toLocaleDateString();
    const formattime = date.toLocaleTimeString();

    const attendanceDate = new Date(formatdate);
    attendanceDate.setHours(8, 30, 0); // set start time to 8:30 AM on attendance date
    const diffInHours = (date.getTime() - attendanceDate.getTime()) / (1000 * 60 * 60);
     const late = Math.floor(diffInHours , 0);
  
   
  date.setHours(date.getHours() + 7);
  const formattedDepartureTime = date.toLocaleTimeString();
 




    let attendanceArr = JSON.parse(localStorage.getItem('attendanceArr')) || [];

    let lastAttensance = attendanceArr.find(a => a.username === username)

    if (lastAttensance) {
        lastAttensance.depeture = formattime;
    }
    else {

        const attendanceObj = {
            username: username,
            date: formatdate,
            arrival: formattime,
            depeture: formattedDepartureTime,
            lateHours:late

        };

        attendanceArr.push(attendanceObj);
        localStorage.setItem('attendanceArr', JSON.stringify(attendanceArr));

        // setTimeout(() => {
        //     let attendanceArr = JSON.parse(localStorage.getItem('attendanceArr'));
        //     let lastAttendance = attendanceArr.find(a => a.username === username);

        //     if (lastAttendance && lastAttendance.departure === null) {
        //         lastAttendance.departure = new Date().toLocaleTimeString();
        //         localStorage.setItem('attendanceArr', JSON.stringify(attendanceArr));
        //     }
        // }, 7 * 60 * 60 * 1000); 

    }

    localStorage.setItem('attendanceArr', JSON.stringify(attendanceArr));
}



