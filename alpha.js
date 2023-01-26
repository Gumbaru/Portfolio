let theme = "light";

const toggleTheme = () => {
  const root = document.documentElement;
  if (theme === "light") {
    theme = "dark";
    root.style.setProperty("--bg-color", "black");
    root.style.setProperty("--text-color", "white");
  } else {
    theme = "light";
    root.style.setProperty("--bg-color", "white");
    root.style.setProperty("--text-color", "black");
  }
};

const themeButton = document.getElementById("theme-button");
themeButton.addEventListener("click", toggleTheme);


