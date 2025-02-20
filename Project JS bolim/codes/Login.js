document.addEventListener("DOMContentLoaded", function () {
  const number = document.getElementById("number");

  function formatPhone() {
    number.addEventListener("input", () => {
      let phone = number.value.replace(/\D/g, "");

      if (phone.length <= 11) {
        let formattedPhone = phone;
        formattedPhone = "+" + phone.slice(0, 1);
        formattedPhone += "(" + phone.slice(1, 4) + ")";
        formattedPhone += phone.slice(4, 7);
        formattedPhone += "-" + phone.slice(7, 9);
        formattedPhone += "-" + phone.slice(9, 11);

        number.value = formattedPhone;
      }
    });
  }

  formatPhone();
});

const log = document.getElementById("signinForm");
const comment = document.getElementById("errorMessage");
let login = false;

log.addEventListener("submit", (sub) => {
  sub.preventDefault();
  const Username = document.getElementById("Username").value;
  const number = document.getElementById("number").value;
  const bioInfo = document.getElementById("bioInfo").value;
  const email = document.querySelector("input[type='email']").value;

  if (
    bioInfo.length >= 8 &&
    number.replace(/\D/g, "").length == 11 &&
    Username.length >= 1
  ) {
    login = true; 
    comment.style.color = "green";
    comment.textContent = "Thanks, please wait for our message";

    localStorage.setItem("Username", Username);
    localStorage.setItem("phone", number);
    localStorage.setItem("bioInfo", bioInfo);
    localStorage.setItem("email", email);
  } else {
    comment.style.color = "red";
    comment.textContent =
      "bioInfo must length 8 or Number is not correct or Name isn't full";
    document.getElementById("number").value = "";
    document.getElementById("bioInfo").value = "";
  }
});
