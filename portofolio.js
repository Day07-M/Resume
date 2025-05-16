const checkbox = document.getElementById("checkbox");

// Detects system theme
function detectSystemTheme() {
  return window.matchMedia &&
    window.matchMedia('(prefers-color-scheme: light)').matches;
}

// Applies theme to body
function setTheme(isLight) {
  document.body.setAttribute("data-theme", isLight ? "light" : "dark");
  checkbox.checked = isLight;
}

// Load saved preference or detect system
const savedTheme = localStorage.getItem("theme");

if (savedTheme) {
  setTheme(savedTheme === "light");
} else {
  const systemPrefersLight = detectSystemTheme();
  setTheme(systemPrefersLight);
  localStorage.setItem("theme", systemPrefersLight ? "light" : "dark");
}

// Toggle listener
checkbox.addEventListener("change", function () {
  const isLight = this.checked;
  setTheme(isLight);
  localStorage.setItem("theme", isLight ? "light" : "dark");
});
