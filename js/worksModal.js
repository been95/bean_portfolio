function woksModal() {
  const modal = document.getElementById("modal");
  const modalImg = document.getElementById("modal-img");
  const modalTitle = document.getElementById("modal-title");
  const modalDesc = document.getElementById("modal-desc");
  const closeBtn = modal.querySelector(".close");
  const workItems = document.querySelectorAll(".work-item");

  workItems.forEach((item) => {
    item.addEventListener("click", () => {
      modalImg.src = item.dataset.img;

      modalTitle.textContent = item.dataset.title;
      modalDesc.textContent = item.dataset.desc;
      modal.classList.add("active");
    });
  });

  closeBtn.addEventListener("click", () => {
    modal.classList.remove("active");
  });
}
woksModal();
