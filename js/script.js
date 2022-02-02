const nav = document.querySelector("nav");

function handleScroll() {
  let scrollVal = window.scrollY;

  if (scrollVal > 50) {
    nav.classList.add("scrolled");
  } else {
    nav.classList.remove("scrolled");
  }
}

window.addEventListener("scroll", handleScroll);
