const modal = document.querySelector(".modal");
const modalOpenBtn = document.querySelector(".nav__user__btn");
const modalCloseBtn = document.querySelector(".modal__close");
const modalOpenFooter = document.querySelector(".footer__user__btn");

modalOpenBtn.addEventListener("click", function () {
  modal.classList.add("modal__show");
});

modalOpenFooter.addEventListener("click", function () {
  modal.classList.add("modal__show");
});


modalCloseBtn.addEventListener("click", function (e) {
  modal.classList.remove("modal__show");
  e.preventDefault();
});

window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.classList.remove("modal__show");
  }
})
