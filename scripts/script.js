const hamburger = document.getElementById("hamburger");
const menuIcon = document.getElementById("hamburger");
const navLinksContainer = document.querySelector(".nav-links-container");

function toggleMenu() {
  navLinksContainer.classList.toggle("active");

  if (hamburger.classList.toggle("active")) {
    menuIcon.innerHTML = `<i class="fa-solid fa-x"></i>`; 
    menuIcon.alt = "Close Menu";
  } else {
    menuIcon.innerHTML = `<i class="fa-solid fa-bars"></i>`;
    menuIcon.alt = "Open Menu";
  }
}

// Add click event listener to the hamburger menu
hamburger.addEventListener("click", toggleMenu);

document.querySelectorAll(".nav-menu").forEach((n) =>
  n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navLinksContainer.classList.remove("active");
  })
);