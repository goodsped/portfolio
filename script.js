window.addEventListener("scroll", function () {
    let navbar = document.querySelector("header");
    if (window.scrollY > 0) {
      navbar.classList.add("box-shadow");
    } else {
      navbar.classList.remove("box-shadow");
    }
  });
  