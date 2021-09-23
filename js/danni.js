//Login module
//console.log("js virker")

let name = ["Danni", "Tore", "Hedinn", "Simon", "Arton"];


function login() {
  let userName = document.getElementById('username').value;
  let passWord = document.getElementById('password').value;

  if (userName == name[0] && passWord == "123") {
    window.location.href = "../profil/index.html";
  }
  else if (userName == name[1] && passWord == "123") {
    window.location.href = "../profil/index.html";
  }
  else if (userName == name[2] && passWord == "123") {
    window.location.href = "../profil/index.html";
  }
  else if (userName == name[3] && passWord == "123") {
    window.location.href = "../profil/index.html";
  }
  else if (userName == name[4] && passWord == "123") {
    window.location.href = "../profil/index.html";
  }
  else {
    alert("username or password is missing/wrong");
  }
}
