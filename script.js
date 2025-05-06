function createAccount() {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const securityPassword = document.getElementById("securityPassword").value;

  const user = {
    name,
    email,
    password,
    securityPassword,
    notes: ""
  };

  localStorage.setItem("user", JSON.stringify(user));
  alert("Account created! Reopen the website to log in.");
  location.reload();
}

window.onload = function () {
  const userData = localStorage.getItem("user");

  if (userData) {
    document.getElementById("createAccount").style.display = "none";
    document.getElementById("login").style.display = "block";
    const user = JSON.parse(userData);
    document.getElementById("userName").innerText = `Hello, ${user.name}`;
  }
};

function login() {
  const user = JSON.parse(localStorage.getItem("user"));
  const input = document.getElementById("loginSecurityPassword").value;

  if (user.securityPassword === "" || input === user.securityPassword) {
    document.getElementById("login").style.display = "none";
    document.getElementById("notebook").style.display = "block";
    document.getElementById("notes").value = user.notes;
  } else {
    alert("Wrong password.");
  }
}

function logout() {
  const user = JSON.parse(localStorage.getItem("user"));
  user.notes = document.getElementById("notes").value;
  localStorage.setItem("user", JSON.stringify(user));
  location.reload();
}
