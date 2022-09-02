import { Link, NavLink } from "react-router-dom";
import logo from "../icons/logo.png";

export default function NavBar() {
  return (
    <nav className="nav">
      <Link to="/" className="siteName">
        <img src={logo} alt="logo"></img>
      </Link>
      <ul>
        <NavLink className="navBarLink" to="/">
          Accueil
        </NavLink>
        <NavLink className="navBarLink" to="/About">
          À propos
        </NavLink>
      </ul>
    </nav>
  );
}
