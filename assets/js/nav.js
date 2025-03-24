document.addEventListener("DOMContentLoaded", function () {
  const menuIcon = document.querySelector(".fa-bars");
  const closeIcon = document.querySelector(".nav-element2 .fa-xmark");
  const navElement = document.querySelector(".nav-element2");

  menuIcon.addEventListener("click", function () {
    navElement.classList.add("show");
  });

  closeIcon.addEventListener("click", function () {
    navElement.classList.remove("show");
  });
});
