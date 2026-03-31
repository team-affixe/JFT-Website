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
