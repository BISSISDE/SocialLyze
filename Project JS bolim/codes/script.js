const likeButtons = document.querySelectorAll(".heartIcon");
likeButtons.forEach((button) => {
  button.addEventListener("click", function () {
    button.classList.toggle("liked");
  });
});

const shareButtons = document.querySelectorAll(".shareIcon");
shareButtons.forEach((button) => {
  button.addEventListener("click", function () {
    alert("Shared!");
  });
});
document.querySelectorAll(".saveIcon").forEach((button) => {
  button.addEventListener("click", () => {
    button.classList.toggle("saved");
  });
});

const commentButtons = document.querySelectorAll(".commentIcon");
commentButtons.forEach((button) => {
  button.addEventListener("click", function () {
    alert("Commenting...");
  });
});

const CloseImg = document.getElementById("CloseImg");
const basket = document.getElementById("Basket");
const basketList = document.getElementById("basketList");
basket.addEventListener("click", () => {
  basketList.style.display = "block";
});
CloseImg.addEventListener("click", () => {
  basketList.style.display = "none";
});

const arrowUp = document.getElementById("arrowUp");
const arrowUp2 = document.getElementById("arrowUp2");
const nav = document.getElementById("nav-container");
window.addEventListener("scroll", () => {
  if (scrollY <= 250) {
    nav.style.position = "absolute";
    nav.style.top = "0px";
    nav.style.height = "80px";
  }
});
window.addEventListener("scroll", () => {
  if (scrollY > 0) {
    nav.style.position = "sticky";
    arrowUp.style.display = "block";
    arrowUp2.style.display = "block";
    nav.style.color = "white";
  }
});
window.addEventListener("scroll", () => {
  if (scrollY > 250) {
    nav.style.background = "rgb(0, 0, 0 , 0.5)";
    nav.style.backdropFilter = "blur(10px)";
    nav.style.height = "70px";
    nav.style.color = "white";
  } else {
    nav.style.background = "rgb(0, 0, 0 , 0.5)";
    arrowUp.style.display = "none";
    arrowUp2.style.display = "none";
    nav.style.position = "sticky";
    nav.style.color = "white";
  }
});
