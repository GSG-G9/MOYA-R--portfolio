const $openMenuBtn = document.getElementById("open-menu");
const $collapseNavbar = document.getElementsByClassName(
  "collapse-navbar--container"
)[0];

$openMenuBtn.addEventListener("click", (e) => {
  if (!$collapseNavbar.classList.contains("open")) {
    $collapseNavbar.classList.add("open");
  } else {
    $collapseNavbar.classList.remove("open");
  }
});
