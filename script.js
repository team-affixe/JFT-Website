const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
  // Dark Mode aktivieren
  document.body.classList.add("dark-mode");
  document
    .querySelectorAll(".body")
    .forEach((el) => el.classList.add("dark-mode"));
  document
    .querySelectorAll(".content-box")
    .forEach((el) => el.classList.add("dark-mode"));
}

window.matchMedia("(prefers-color-scheme: dark)").addListener((e) => {
  if (e.matches) {
    document.body.classList.add("dark-mode");
    document
      .querySelectorAll(".body")
      .forEach((el) => el.classList.add("dark-mode")); // Dark Mode einschalten
    document
      .querySelectorAll(".content-box")
      .forEach((el) => el.classList.add("dark-mode"));
  } else {
    document.body.classList.remove("dark-mode");
    document
      .querySelectorAll(".body")
      .forEach((el) => el.classList.remove("dark-mode")); // Dark Mode ausschalten
    document
      .querySelectorAll(".content-box")
      .forEach((el) => el.classList.remove("dark-mode"));
  }
});

function ScrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}
function ScrollToNewProject() {
  const element = document.getElementById("NewProjectBox");
  element.scrollIntoView({ behavior: "smooth", block: "start" });
}
function ScrollToContact() {
  const element = document.getElementById("ContactBox");
  element.scrollIntoView({ behavior: "smooth", block: "start" });
}
function ScrollToSignIn() {
  const element = document.getElementById("SignInBox");
  element.scrollIntoView({ behavior: "smooth", block: "start" });
}
function OpenImpressum() {
  window.open("impressum.html", "_blank");
}
function menuToggle() {
  document.getElementById("menuToggle").checked = false;
}
function ProjectPopUp() {
  document
    .querySelectorAll(".new-project-box")
    .forEach((el) => el.classList.add("zoom"));
  NewProjectBox.innerHTML =
    '<h2 class="content-headline">Projekt einreichen:</h2><input type="text" name="name" size="20"><textarea id="w3review" name="w3review" rows="4" cols="50">At w3schools.com you will learn how to make a website. They offer free tutorials in all web development technologies.</textarea><button class="submit-btn">Absenden</button>';
}
