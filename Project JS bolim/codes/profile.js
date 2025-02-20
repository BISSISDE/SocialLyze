document.getElementById("name").innerText =
  localStorage.getItem("Username") || "Fill in the login page!";
document.getElementById("username").innerText =
  "@" + localStorage.getItem("Username") || "Fill in the login page!";
document.getElementById("bio").innerText =
  localStorage.getItem("bioInfo") || "Fill in the login page!";

let website = "http://www.Socialize.com";
document.getElementById("website").innerText = website;
document.getElementById("website").href = website;

let email = localStorage.getItem("email") || "Fill in the login page!";
document.getElementById("email").innerText = email;
document.getElementById("email").href = "mailto:" + email;

let phone = localStorage.getItem("phone") || "Fill in the login page!";
document.getElementById("phone").innerText = phone;
