const arrowImg = document.getElementById("arrowImgs");
const winHalf = window.innerHeight / 2;

window.addEventListener("scroll", () => {
  const scrollY = window.scrollY;
  if (scrollY >= winHalf) {
    arrowImg.classList.add("hide");
  } else {
    arrowImg.classList.remove("hide");
  }
});

arrowImg.addEventListener("click", () => {
  window.scrollTo({
    top: winHalf + 100,
    left: 0,
    // behavior: "smooth",
  });
});

const buttons = document.querySelectorAll(".work button");
buttons.forEach((button) => {
  button.addEventListener("mouseenter", (e) => {
    const img = e.currentTarget.querySelector("img");
    img.src = img.src.replace(".jpg", ".gif");
  });
  button.addEventListener("mouseleave", (e) => {
    const img = e.currentTarget.querySelector("img");
    img.src = img.src.replace(".gif", ".jpg");
  });
});

const navbar = document.getElementById("navbar");
window.addEventListener("scroll", () => {
  if (window.scrollY > 10) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

/*모달창 */

const btn = document.querySelector(".star");
const modalBox = document.querySelector(".modalBox");
const close = document.getElementById("close");
btn.addEventListener("click", (e) => {
  modalBox.style.display = "flex";
});
close.addEventListener("click", (e) => {
  modalBox.style.display = "none";
});

/* 아코디언창 */

/*
const btn = document.querySelector(".been");
btn.addEventListener("mouseenter", (e) => {
  const img = e.currentTarget.children[0];
  img.setAttribute("src", "./images/been.gif");
});
btn.addEventListener("mouseleave", (e) => {
  const img = e.currentTarget.children[0];
  img.setAttribute("src", "./images/been.jpg");
});

const star = document.querySelector(".star");
star.addEventListener("mouseenter", (e) => {
  const img = e.currentTarget.children[0];
  img.setAttribute("src", "./images/star.gif");
});
star.addEventListener("mouseleave", (e) => {
  const img = e.currentTarget.children[0];
  img.setAttribute("src", "./images/star.jpg");
});

const painting = document.querySelector(".painting");
painting.addEventListener("mouseenter", (e) => {
  const img = e.currentTarget.children[0];
  img.setAttribute("src", "./images/painting.gif");
});
painting.addEventListener("mouseleave", (e) => {
  const img = e.currentTarget.children[0];
  img.setAttribute("src", "./images/painting.jpg");
});
*/
