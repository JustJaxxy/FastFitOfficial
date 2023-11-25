let currentWidth;
const hamburgerMenuCourses = document.getElementById(
  "hamburger-menu-container-js"
);

function updateWidth() {
  currentWidth = window.innerWidth;
  navBar();
}

function navBar() {
  const nav = document.getElementById("nav-js");

  if (currentWidth <= 700) {
    nav.style.visibility = "hidden";
  } else {
    nav.style.visibility = "visible";
  }
}

window.addEventListener("resize", updateWidth);
window.addEventListener("load", () => {
  updateWidth();
});

function scrollToTop() {
  const logo = document.getElementById("landing-page-header-logo-js");

  logo.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
}

function hamburgerMenu() {
  const hamburgerMenuButton = document.getElementById("hamburger-icon-js");
  const hamburgerMenuContainer = document.getElementById(
    "hamburger-menu-container-js"
  );
  const closeButton = document.getElementById("close-button-js");

  hamburgerMenuButton.addEventListener("click", () => {
    hamburgerMenuContainer.style.visibility = "visible";
    hamburgerMenuContainer.style.animation = "hamburgerIn 1.7s ease-in-out";
    hamburgerMenuContainer.style.animationFillMode = "forwards";
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });

  closeButton.addEventListener("click", () => {
    hamburgerMenuContainer.style.visibility = "hidden";
    hamburgerMenuContainer.style.animation = "hamburgerOut 1.7s ease-in-out";
    hamburgerMenuContainer.style.animationFillMode = "forwards";
  });
}

function setHeight() {
  const pageHeight =
    (document.documentElement.scrollHeight, document.body.scrollHeight);

  hamburgerMenuCourses.style.height = pageHeight + "px";

  console.log(pageHeight);
}

hamburgerMenu();
scrollToTop();

window.addEventListener("resize", setHeight);
window.addEventListener("load", setHeight);
