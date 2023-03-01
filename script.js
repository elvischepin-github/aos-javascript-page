const burger = document.getElementById("burger");
const links = document.querySelector(".links");

burger.addEventListener("click", function () {
  this.classList.toggle("rotate");
  links.classList.toggle("open");
});

// Meniu links animation
const sections = document.querySelectorAll("section");
const anchors = document.querySelectorAll("a");
window.addEventListener("scroll", function () {
  let current;

  for (let section of sections) {
    if (window.pageYOffset >= section.offsetTop - 50) {
      current = section.getAttribute("id");
    }
  }

  for (let anchor of anchors) {
    anchor.classList.remove("active");
    if (anchor.getAttribute("href") === "#" + current) {
      anchor.classList.add("active");
    }
  }
});

// Mobile meniu suskleidimas paspausdus anchor
for (let anchor of anchors) {
  anchor.addEventListener("click", function () {
    links.classList.remove("open");
    burger.classList.remove("rotate");
  });
}
