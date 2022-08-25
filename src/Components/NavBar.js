import { Link, NavLink, useMatch, useResolvedPath } from "react-router-dom";
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

function CustomLink({ to, children, ...props }) {
  // Nav stays on each page with active links
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });
  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  );
}
