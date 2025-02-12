import ThemeToggle from "./ThemeToggle";

function Header() {
  return (
    <nav
      className="navbar navbar-expand-lg bg-primary navbar-custom"
      data-bs-theme="dark"
    >
      <div className="container-fluid">
        <button
          className="navbar-brand text-light brand-logo"
          onClick={() => {
            "#"; /* Add your logo click functionality here */
          }}
        >
          TAG Wordle
        </button>
        <button
          className="navbar-toggler custom-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarColor01"
          aria-controls="navbarColor01"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <ThemeToggle />
      </div>
    </nav>
  );
}

export default Header;
