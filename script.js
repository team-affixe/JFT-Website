const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
  // Dark Mode aktivieren
  document.querySelectorAll(".body").forEach(el => el.classList.add("dark-mode"));
  document.querySelectorAll(".content-box").forEach(el => el.classList.add("dark-mode"));
}

window.matchMedia("(prefers-color-scheme: dark)").addListener((e) => {
  if (e.matches) {
    document.querySelectorAll(".body").forEach(el => el.classList.add("dark-mode")); // Dark Mode einschalten
    document.querySelectorAll(".content-box").forEach(el => el.classList.add("dark-mode"));
  } else {
    document.querySelectorAll(".body").forEach(el => el.classList.remove("dark-mode")); // Dark Mode ausschalten
    document.querySelectorAll(".content-box").forEach(el => el.classList.remove("dark-mode"));
  }
});
