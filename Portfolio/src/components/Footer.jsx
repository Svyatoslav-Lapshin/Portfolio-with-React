function Footer({ toggleTheme }) {
  return (
    <footer className="footer">
      <button id="colorBtn" onClick={toggleTheme}>
        Toggle theme
      </button>
      <p>&copy; 2026 Svyatoslav.</p>
      <p>Built with HTML, CSS & passion</p>
    </footer>
  );
}
export default Footer;
