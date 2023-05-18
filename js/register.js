

function checkMail(email) {
  let myArray = JSON.parse(localStorage.getItem('users')) || [];
  const emailExists = myArray.find(obj => obj.email === email);
  return (emailExists !== undefined)

}
// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
  'use strict'

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  var form = document.getElementById('registerForm');

  // Loop over them and prevent submission
  // Array.prototype.slice.call(forms)
  //   .forEach(function (form) {
  form.addEventListener('submit', function (event) {
    event.preventDefault()
    event.stopPropagation()

    if (!form.checkValidity()) {
      event.preventDefault()
      event.stopPropagation()
    }
    else {
      const email = document.getElementById('email').value.trim();
      if (checkMail(email)) {
        event.preventDefault();
        event.stopPropagation();
        alert('Email already exists!');
      }
      else {
        // const inputs = form.querySelectorAll('input');
        // inputs.forEach(input => {
        //   localStorage.setItem(input.name, input.value);
        // });

        sendEmail(function () { window.location.href = "success.html"; });

        //  .then(function () {
        //   window.location.href = 'success.html';
        // });
        //}

      }
    }
    form.classList.add('was-validated')
  }, false)


})()
function sendEmail(callback) {
  console.log('sendEmail function called');
  const firstName = document.getElementById('firstName').value.trim();
  const lastName = document.getElementById('lastName').value.trim();
  const myInputValue = document.getElementById('email').value.trim();
  const username = firstName.toLowerCase() + lastName.toLowerCase() + generateUniqueString().substring(4,7);
  const password = generateUniqueString();

  // localStorage.setItem('username', username);
  // localStorage.setItem('password', password);

  try {
    Email.send({
      SecureToken: "042fb28a-59b2-463e-9c8d-ddca432c8fc8",
      To: myInputValue,
      From: "systemattendance0@gmail.com",
      Subject: "Attendce System",
      Body: `UserName: ${username}<br></br>Password:${password}.`
    }).then(function () {
      console.log("Email sent successfully");
      saveToLocalStorage(username, password);
      // saveUserandPass(username,password)
      callback();
    })
  }
  catch (error) {
    console.error("Error occurred while sending email: ", error);
  }

}
function saveToLocalStorage(username, password) {
  const firstname = document.getElementById('firstName').value;
  const lastname = document.getElementById('lastName').value;
  const email = document.getElementById('email').value;
  const age = document.getElementById('age').value;
  const id = document.getElementById('id').value;
  // const city = document.getElementById('city').value;
  const address = document.getElementById('address').value;
  const position = document.getElementById('position').value;



  let myArray = JSON.parse(localStorage.getItem('users')) || [];

  const newObj = {
    id: id,
    firstname: firstname,
    lastname: lastname,
    email: email,
    age: age,
    // city: city,
    address: address,
    position: position,
    username: username,
    password: password,
    isapproved: false,
    


  };
  myArray.push(newObj);
  localStorage.setItem('users', JSON.stringify(myArray));
}

function generateUniqueString() {
  const timestamp = new Date().getTime().toString(36);
  const randomStr = Math.random().toString(36).substring(2,8);
  return timestamp + randomStr;
}