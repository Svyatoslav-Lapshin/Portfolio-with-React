import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <nav>
      <ul className="nav-container">
        <li>
          <NavLink to="/">Start</NavLink>
        </li>
        <li>
          <NavLink to="/cv">Cv</NavLink>
        </li>
        <li>
          <NavLink to="/projects">Projects</NavLink>
        </li>
        <li>
          <NavLink to="/contact">Contact</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
