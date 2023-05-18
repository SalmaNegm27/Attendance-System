
const obj = JSON.parse(sessionStorage.getItem('user'));
if (obj != null && obj.position != "admin") {
  window.location.href = "login.html"
}
const notApprovedUser = getNotApprovedUsers();
if (notApprovedUser) {

  const table = document.querySelector('table');
  const tbody = document.querySelector('tbody');
  notApprovedUser.forEach(element => {
    const fullname = element.firstname + " " + element.lastname;

    const tr = document.createElement('tr');

    const tdID = document.createElement('td');
    tdID.textContent = element.id;
    tr.appendChild(tdID);

    const tdFullName = document.createElement('td');
    tdFullName.textContent = fullname;
    tr.appendChild(tdFullName);

    const tdApprovement = document.createElement('td');
    tdApprovement.classList.add('text-center');
    const button = document.createElement("button");
    button.textContent = "Approve";
    button.classList.add("btn", "btn-primary");

    button.addEventListener("click", function () {
      const users = JSON.parse(localStorage.getItem('users'));
      const userId = element.id;
      for (let i = 0; i < users.length; i++) {
        if (users[i].id === userId) {
          users[i].isapproved = true;
          button.textContent = "Approved";
          button.classList.remove("btn-primary");
          button.classList.add("btn-success");
          break;
        }
      }
      localStorage.setItem('users', JSON.stringify(users));
    });





    tdApprovement.appendChild(button);
    tr.appendChild(tdApprovement);

    tbody.appendChild(tr);

  });
}

function getNotApprovedUsers() {
  const users = JSON.parse(localStorage.getItem('users'));
  return users.filter(a => !a.isapproved)
}







