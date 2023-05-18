const obj = JSON.parse(sessionStorage.getItem('user'));
if (obj != null && obj.position != "Security Man" ) {
    document.querySelector("#attendance")?.remove()
}




