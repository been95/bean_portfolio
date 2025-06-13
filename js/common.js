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
