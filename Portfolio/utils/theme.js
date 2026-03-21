export function applySavedTheme() {
  if (localStorage.getItem("theme") == "enabled") {
    document.body.classList.add("light-background");
  }
}

export function toggleTheme() {
  document.body.classList.toggle("light-background");

  //Saving choise of the background color
  if (document.body.classList.contains("light-background")) {
    localStorage.setItem("theme", "enabled");
  } else {
    localStorage.setItem("theme", "disabled");
  }
}
