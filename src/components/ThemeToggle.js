import { useState } from "react";

function ThemeToggle() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => {
      const newMode = !prevMode;
      if (newMode) {
        document.body.classList.add("dark-mode"); // Add dark mode class
      } else {
        document.body.classList.remove("dark-mode"); // Remove dark mode class
      }
      return newMode;
    });
  };

  return (
    <button className="btn btn-dark" onClick={toggleDarkMode}>
      {darkMode ? "Light Mode" : "Dark Mode"}
    </button>
  );
}

export default ThemeToggle;
