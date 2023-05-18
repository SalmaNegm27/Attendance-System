import {isLoggedIn} from "./auth.js"
  if (!isLoggedIn()) {
    window.location.href = 'login.html';
  }
   document.addEventListener('DOMContentLoaded', displayInfo);
      
      function displayInfo() {
      
          const userObj = JSON.parse(sessionStorage.getItem('user'));
          const fullnameCon = userObj.firstname + " " + userObj.lastname;
      
          const fullname = document.getElementById('fullname');
          fullname.value = fullnameCon;
      
          const id = document.getElementById('id');
          id.value = userObj.id;
      
          const email = document.getElementById('email');
          email.value = userObj.email;
      
      
          const address = document.getElementById('address');
          address.value = userObj.address;
      
          const age = document.getElementById('age');
          age.value = userObj.age;
      
      
          const position = document.getElementById('position');
          position.value = userObj.position;
      
      
      
      }
  


