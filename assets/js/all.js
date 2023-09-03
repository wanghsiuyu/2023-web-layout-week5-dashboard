const links = document.querySelectorAll(".side-nav-item");
function clickActive(e) {
  e.preventDefault();
  links.forEach((item) => {
    item.classList.remove("side-nav-item-active");
  });
  e.target.classList.add("side-nav-item-active");
}
links.forEach((link) => link.addEventListener("click", clickActive));
